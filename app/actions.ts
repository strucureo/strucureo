'use server';

interface SendEmailState {
    success: boolean;
    message: string;
}

const MAIL_BASE_URL = process.env.MAIL_BASE_URL || 'https://ceo-driftsrpikemail.vercel.app';
const MAIL_API = `${MAIL_BASE_URL}/api/send-email`;

async function sendMail(to: string, subject: string, html: string): Promise<boolean> {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };
    if (process.env.MAIL_API_KEY) {
        headers['x-api-key'] = process.env.MAIL_API_KEY;
    }
    const res = await fetch(MAIL_API, {
        method: 'POST',
        headers,
        body: JSON.stringify({ to, subject, html, attachments: [] }),
    });
    if (!res.ok) {
        console.error('Email API Error:', res.status, await res.text());
    }
    return res.ok;
}

export async function sendEmailAction(prevState: SendEmailState, formData: FormData): Promise<SendEmailState> {
    const email = formData.get('email') as string;
    const name = (formData.get('name') as string) || 'Not provided';
    const message = formData.get('message') as string;

    if (!email || !message) {
        return { success: false, message: 'All fields are required.' };
    }

    try {
        // 1. Notify the studio. This is the lead of record — if it fails, the
        //    whole submission fails so we never lose a real lead.
        const ownerEmail = process.env.CONTACT_EMAIL || process.env.LEAD_MAIL_TO || 'strucureo@gmail.com';
        const ownerOk = await sendMail(
            ownerEmail,
            `[Contact Form] ${name}`,
            `
        <h1>New Message from Strucureo Contact Form</h1>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <hr />
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        );

        if (!ownerOk) {
            return { success: false, message: 'Failed to send email. Please try again later.' };
        }

        // 2. Instant auto-reply to the visitor: confirms receipt, sets the
        //    response-time expectation (F-022) and offers WhatsApp (F-023).
        //    A failure here must NOT fail the submission — the lead is already
        //    captured — so it is fire-and-forget with a logged error.
        try {
            await sendMail(
                email,
                'We received your message — Strucureo',
                `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out. We have your message and will reply within 4 hours.</p>
        <p>If it is urgent, message us on WhatsApp: <a href="https://wa.me/919344275731">+91 93442 75731</a>.</p>
        <p>— Strucureo<br/>Clarity against complexity.</p>
      `,
            );
        } catch (autoReplyErr) {
            console.error('Auto-reply failed (lead still captured):', autoReplyErr);
        }

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Email Server Action Error:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
