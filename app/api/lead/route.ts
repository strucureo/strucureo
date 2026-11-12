import { NextResponse } from 'next/server';

/**
 * /api/lead — lead-event collector.
 *
 * Vercel's filesystem is read-only at runtime, so events cannot be appended to
 * a local file there. The route therefore validates the event and delivers it
 * to a durable sink when one is configured:
 *
 *  1. LEAD_WEBHOOK_URL — when set, receives the event as JSON. Highest-priority
 *     override; the owner (or the agent's own collector) can point it anywhere
 *     durable (a database, a form service, this machine behind a tunnel).
 *  2. LEAD_MAIL_TO — when set, emails the owner through the mail API
 *     (MAIL_BASE_URL / MAIL_API_KEY, same as app/actions.ts). No visitor
 *     details are sent, only type, page, referrer and time.
 *  3. LEAD_TG_BOT_TOKEN + LEAD_TG_CHAT_ID — when set, sends a plain-text
 *     Telegram message to the owner's chat. Fallback when mail is not set.
 *  4. With none configured, the event is logged to the function log
 *     (visible in Vercel's dashboard) and acknowledged. The form's own email
 *     (app/actions.ts) remains the lead of record either way.
 *
 * Only timestamp, source, page and referrer are recorded — never the visitor's
 * name, email or message, which stay in the mail the form sends.
 */

const VALID_SOURCES = new Set(['form', 'whatsapp', 'phone', 'email', 'chatbot']);

const SOURCE_LABEL: Record<string, string> = {
    form: 'Contact form submit',
    whatsapp: 'WhatsApp click',
    phone: 'Phone click',
    email: 'Email click',
    chatbot: 'Chatbot hand-off',
};

function escapeHtml(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function POST(request: Request): Promise<NextResponse> {
    let source: unknown;
    let page: unknown;
    let referrer: unknown;
    try {
        const body = await request.json();
        source = body?.source;
        page = body?.page;
        referrer = body?.referrer;
    } catch {
        return NextResponse.json({ ok: false, error: 'invalid json' }, { status: 400 });
    }

    if (typeof source !== 'string' || !VALID_SOURCES.has(source)) {
        return NextResponse.json({ ok: false, error: 'invalid source' }, { status: 400 });
    }

    const event = {
        ts: new Date().toISOString(),
        source,
        page: typeof page === 'string' ? page.slice(0, 200) : '',
        referrer: typeof referrer === 'string' ? referrer.slice(0, 500) : '',
    };

    // 1. Webhook override — highest-priority durable sink.
    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
        try {
            const res = await fetch(webhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(event),
            });
            return NextResponse.json({ ok: true, delivered: res.ok, sink: 'webhook' });
        } catch (err) {
            console.error('lead webhook delivery failed:', err);
            // Fall through to Telegram rather than dropping the lead.
        }
    }

    // 2. Mail — when LEAD_MAIL_TO is set, email the owner through the mail API.
    //    Same endpoint and variables as app/actions.ts; no visitor details are sent.
    const mailTo = process.env.LEAD_MAIL_TO;
    if (mailTo) {
        const label = SOURCE_LABEL[event.source] || event.source;
        const rows = [
            ['Type', label],
            ['Page', event.page || '-'],
            ['From', event.referrer || '-'],
            ['Time (UTC)', event.ts],
        ]
            .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
            .join('');
        try {
            const res = await fetch(
                `${process.env.MAIL_BASE_URL || 'https://ceo-driftsrpikemail.vercel.app'}/api/send-email`,
                {
                    method: 'POST',
                    headers: {
                        'x-api-key': process.env.MAIL_API_KEY || '',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        to: mailTo,
                        subject: `New lead — ${label}`,
                        html: `<h3>New lead</h3><table cellpadding="4">${rows}</table>`,
                    }),
                },
            );
            if (!res.ok) console.error('lead mail delivery failed:', res.status);
            return NextResponse.json({ ok: true, delivered: res.ok, sink: 'mail' });
        } catch (err) {
            console.error('lead mail delivery failed:', err);
            // A tracking failure must not break the visitor's action: still 200.
            return NextResponse.json({ ok: true, delivered: false, sink: 'mail' });
        }
    }

    // 3. Telegram — fallback sink when mail is not configured.
    const botToken = process.env.LEAD_TG_BOT_TOKEN;
    const chatId = process.env.LEAD_TG_CHAT_ID;
    if (botToken && chatId) {
        const label = SOURCE_LABEL[event.source] || event.source;
        const pageLine = event.page ? `\nPage: ${event.page}` : '';
        const refLine = event.referrer ? `\nFrom: ${event.referrer}` : '';
        const text = `New lead — ${label}${pageLine}${refLine}\nTime: ${event.ts}`;
        try {
            const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, text }),
            });
            return NextResponse.json({ ok: true, delivered: res.ok, sink: 'telegram' });
        } catch (err) {
            console.error('lead telegram delivery failed:', err);
            // A tracking failure must not break the visitor's action: still 200.
            return NextResponse.json({ ok: true, delivered: false, sink: 'telegram' });
        }
    }

    // 4. No durable sink: acknowledged and logged, not stored.
    console.log('lead event (no sink configured):', JSON.stringify(event));
    return NextResponse.json({ ok: true, stored: false, sink: 'none' });
}
