import type { Post } from '@/lib/blog';

export const deliverInDays: Post = {
    slug: 'software-in-days-not-months',
    title: 'How we deliver software in days, not months',
    summary: 'Speed comes from the process, not the hours: root cause first, options to choose from, one contact throughout.',
    date: '2026-10-05',
    updated: '2026-10-05',
    category: 'Build',
    draft: false,
    takeaways: [
        'Speed comes from removing ambiguity early: diagnosis first, then a chosen solution path.',
        'One dedicated contact and a shared portal keep feedback loops to hours, not weeks.',
        'Support and handover after launch are part of every project, not an extra.',
    ],
    body: [
        {
            type: 'paragraph',
            segments: [
                { text: 'Our Build projects ship in days, not months. People sometimes hear that as a promise of long nights. It is the opposite. The speed comes from the process: we remove the ambiguity that normally stretches a project, decide early, and build only what the decision requires.' },
            ],
        },
        { type: 'heading', level: 2, text: 'Start from the root cause' },
        {
            type: 'paragraph',
            segments: [
                { text: 'Most slow projects are not slow to build. They are slow to understand. A client asks for a dashboard, but the real problem is that two teams keep different spreadsheets and no longer trust each other\'s numbers. Build the dashboard without fixing that and you ship on time, only to rebuild it a month later when the distrust surfaces.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'So our first step is always diagnosis: the business problem, the people involved, the constraints, and what success looks like in plain terms. This takes hours or days, not weeks, and it is the highest-leverage part of the project. A correct diagnosis makes the build almost boring, which is exactly what you want from engineering.' },
            ],
        },
        { type: 'heading', level: 2, text: 'Choose from options, not estimates' },
        {
            type: 'paragraph',
            segments: [
                { text: 'After diagnosis, you receive practical solution paths with honest tradeoffs: what each option costs, how long it takes, and what it cannot do. You pick the tradeoff that fits your situation instead of approving a single estimate you had no hand in shaping. That choice usually takes one conversation, and it prevents the most expensive sentence in software: "that is not what we meant."' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'Typical timelines depend on scope. What we can promise for every project is a fixed, visible scope before we start, and milestones small enough that you always know where things stand.' },
            ],
        },
        { type: 'heading', level: 2, text: 'One contact, one shared portal' },
        {
            type: 'paragraph',
            segments: [
                { text: 'Every project has one dedicated point of contact who understands your business and manages the entire build. You never chase different departments or repeat yourself to new faces. Behind that person sits the full team, coordinated through our shared project portal, where you see the same progress, decisions and open questions that we see.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'This sounds like a small thing until you have lived through the alternative. Status meetings shrink because the status is always visible. Feedback lands in hours instead of weeks because there is exactly one door to knock on. Days are saved in the gaps between work, which is where most project time quietly goes.' },
            ],
        },
        { type: 'heading', level: 2, text: 'Support after launch' },
        {
            type: 'paragraph',
            segments: [
                { text: 'Handover matters as much as the build itself. You receive documentation written for the people who will actually run the system, not for other engineers: where things live, what to do when something looks wrong, and who to call when it is genuinely broken. A system your team understands is a system that stays fast long after we have left.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'We do not launch and leave. Real users find what testing missed, so the weeks after launch are part of the project: monitoring, fixes, small adjustments, and documentation your team can actually use. The goal is a system that survives contact with reality, then keeps improving as your business grows.' },
            ],
        },
    ],
};
