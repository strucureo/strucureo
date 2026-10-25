import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getAllPosts, getPost, getPrevNext, readingTime, formatDate } from '@/lib/blog';
import { breadcrumbList } from '@/lib/jsonld';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Magnetic } from '@/components/shared/Magnetic';
import { Contact } from '@/components/sections/Contact';
import { PostBody } from '@/components/blog/PostBody';

const SITE_URL = 'https://www.strucureo.com';

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post || post.draft) return {};
    return {
        title: `${post.title} | Strucureo`,
        description: post.summary,
        alternates: {
            canonical: `${SITE_URL}/blog/${post.slug}`,
        },
        openGraph: {
            title: `${post.title} | Strucureo`,
            description: post.summary,
            url: `${SITE_URL}/blog/${post.slug}`,
            siteName: 'Strucureo',
            type: 'article',
            publishedTime: post.date,
            images: [
                {
                    url: 'https://www.strucureo.com/opengraph-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Strucureo Engineering Studio'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | Strucureo`,
            description: post.summary,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post || post.draft) notFound();
    const { prev, next } = getPrevNext(slug);

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        author: {
            '@type': 'Organization',
            name: 'Strucureo',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Strucureo',
        },
    };

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Blog', url: `${SITE_URL}/blog` },
        { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
    ]);

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <SiteHeader />

            <article>
                <Section>
                    <AnimatedText text={post.category} className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]"
                        style={{ letterSpacing: '-0.03em' }}
                    >
                        {post.title}
                    </h1>
                    <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] opacity-40">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        {' · '}
                        {readingTime(post)} min read
                        {post.updated && post.updated !== post.date && (
                            <>
                                {' · '}
                                <span>Last updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></span>
                            </>
                        )}
                    </p>

                    {post.takeaways && post.takeaways.length > 0 && (
                        <div className="max-w-3xl mt-12">
                            <h2 className="mb-4 text-2xl font-bold">Key takeaways</h2>
                            <ul className="space-y-3 list-disc pl-6 text-xl font-light leading-relaxed text-[#6E6E6E]">
                                {post.takeaways.map((takeaway) => (
                                    <li key={takeaway}>{takeaway}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="max-w-3xl mt-16">
                        <PostBody blocks={post.body} />
                    </div>

                    <div className="mt-16 flex flex-col items-start gap-8">
                        <Magnetic strength={0.15}>
                            <a
                                href="/#contact"
                                className="px-8 py-4 bg-[#111111] text-white font-bold tracking-widest text-sm hover:bg-black/80 transition-colors uppercase"
                            >
                                Book a free consultation
                            </a>
                        </Magnetic>
                        <div className="flex flex-col gap-4 md:flex-row md:gap-8 border-t border-[#111111]/10 pt-10 w-full">
                            {prev ? (
                                <a
                                    href={`/blog/${prev.slug}`}
                                    className="inline-flex items-center gap-3 border-b border-[#111111] pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    {prev.title}
                                </a>
                            ) : (
                                <span />
                            )}
                            {next && (
                                <a
                                    href={`/blog/${next.slug}`}
                                    className="inline-flex items-center gap-3 border-b border-[#111111] pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60 md:ml-auto"
                                >
                                    {next.title}
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </Section>
            </article>

            <section className="border-t border-[#111111]/10 px-6 py-12 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#555555]">
                        More from the studio
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Built something useful?
                    </h2>
                    <p className="mb-6 text-lg text-[#6E6E6E]">
                        Got a manual workflow or a bottleneck you want to remove? We package proven solutions into custom software, automation and AI chatbots — usually in days to a few weeks.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="/services" className="px-8 py-4 bg-[#111111] text-white font-bold tracking-widest text-sm hover:bg-black/80 transition-colors uppercase">
                            See our services
                        </a>
                        <a href="/blog/how-much-does-an-mvp-cost-in-india-and-dubai" className="px-8 py-4 border border-[#111111] text-[#111111] font-bold tracking-widest text-sm hover:bg-[#111111] hover:text-white transition-colors uppercase">
                            How much an MVP costs
                        </a>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
