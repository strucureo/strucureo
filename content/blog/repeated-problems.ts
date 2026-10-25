import type { Post } from '@/lib/blog';

export const repeatedProblems: Post = {
    slug: 'repeated-problems-reusable-modules',
    title: 'Turning repeated problems into reusable modules',
    summary: 'Labs picks problems from real client work, tests solutions as prototypes, and keeps only what proves itself.',
    date: '2026-10-05',
    updated: '2026-10-05',
    category: 'Labs',
    draft: true,
    takeaways: [
        'Labs research starts only from problems seen repeating in real client work.',
        'A prototype must prove itself against real needs; failed ones are kept as notes.',
        'Graduated modules skip the riskiest phase of the next Build project.',
    ],
    body: [
        {
            type: 'paragraph',
            segments: [
                { text: 'Strucureo Labs exists for one reason: the same problems keep appearing in our client work, and solving each from scratch wastes everyone\'s time and money. Labs turns the repeating ones into tested, reusable modules, so the next project starts further ahead. This post explains how an idea earns that status.' },
            ],
        },
        { type: 'heading', level: 2, text: 'Ideas come from client work, not trends' },
        {
            type: 'paragraph',
            segments: [
                { text: 'Labs does not chase technology for its own sake. A research track opens when a pattern appears across real projects: the third chatbot that needs the same document Q&A behaviour, the second ERP that needs the same approval flow. Two occurrences are a coincidence worth noting. Three are a candidate for research.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'This rule keeps Labs honest. Research anchored in paying clients\' problems cannot drift into interesting-but-useless territory for long, because the test is always the same: would this have made a recent project faster, cheaper or safer? If the answer is no, the idea waits until the pattern strengthens.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'Not every problem belongs in Labs. A genuinely one-off need — a peculiar integration, a client-specific workflow — stays in Build and gets solved there, without ceremony. Forcing everything through research would slow down the very projects Labs exists to speed up. The discipline is in telling the two apart, and the count of occurrences is the simplest honest test we have.' },
            ],
        },
        { type: 'heading', level: 2, text: 'A prototype has to earn its keep' },
        {
            type: 'paragraph',
            segments: [
                { text: 'Once a pattern qualifies, Labs builds the smallest prototype that could settle the open questions. Can the approach handle our clients\' real data volumes? Does it survive the edge cases we keep seeing? Can a developer who did not write it understand it in an afternoon? A prototype that fails these tests has still done its job: it told us cheaply what not to ship.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'Prototypes are tested against real needs wherever possible, ideally inside an active Build project with the client\'s knowledge. Nothing graduates on the strength of a demo alone.' },
            ],
        },
        { type: 'heading', level: 2, text: 'What graduates, and what does not' },
        {
            type: 'paragraph',
            segments: [
                { text: 'What graduates is a documented module with clear limits: what it does, what it assumes, and where it should not be used. AI agents for document Q&A, reusable admin panels, and standard integration patterns are the current tracks. Each one carries the history of the projects that shaped it.' },
            ],
        },
        {
            type: 'list',
            items: [
                [{ text: 'Proven against real client needs, not demo data.' }],
                [{ text: 'Documented, including its limits and assumptions.' }],
                [{ text: 'Maintainable by any engineer on the team.' }],
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'What does not graduate stays as notes: the approach, the test results, and why it stopped. Those notes are reviewed whenever the pattern resurfaces, because constraints change and a failed idea from last year is sometimes exactly right this year.' },
            ],
        },
        { type: 'heading', level: 2, text: 'How this helps the next build' },
        {
            type: 'paragraph',
            segments: [
                { text: 'The payoff lands in Build. A project that reuses a graduated module skips the riskiest phase of engineering: the first contact between an untested approach and real users. Scopes get shorter, estimates get more honest, and clients inherit the lessons of every project before theirs. That compounding effect is the whole point of Labs.' },
            ],
        },
        {
            type: 'quote',
            segments: [
                { text: 'Every project should leave the studio stronger than it found it.' },
            ],
        },
    ],
};
