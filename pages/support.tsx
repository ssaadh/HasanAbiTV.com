import Head from 'next/head';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

export default function Support() {
  return (
    <>
      <Head>
        <title>Support My Work</title>
        <meta name="description" content="Support the development of left-wing content creator tools" />
      </Head>
      <div className="bg-scanlines bg-custom-purple min-h-screen">
        <PageHeader>Support My Work</PageHeader>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-3xl">
          {/* Intro */}
          <section className="mb-8">
            <p className="text-purple-200 text-lg mb-4">
              I build left-wing content creator tools and fan sites. Currently developing the
              CrankCommunism ecosystem — including this HasanAbi fan site and the upcoming HMTV & LMTV platforms.
            </p>
            <p className="text-purple-300">
              Tech stack: Ruby/Rails, TypeScript/React, Inertia.js, Avo, Bullet Train
            </p>
          </section>

          {/* Quick Credentials */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-purple-100 mb-4">Background</h2>
            <ul className="list-disc list-inside text-purple-200 space-y-2">
              <li>Previously built MobileAdScout & VidAdTelligence — profitable B2B SaaS apps for marketers</li>
              <li>Web automation specialist (Playwright, Selenium, Watir)</li>
              <li>Full-stack Rails developer with headless CMS experience (Strapi, Directus, WordPress)</li>
            </ul>
          </section>

          {/* Why Support */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-purple-100 mb-4">Why Support?</h2>
            <p className="text-purple-200 mb-4">
              Running these platforms requires ongoing investment in infrastructure and tooling:
            </p>
            <ul className="list-disc list-inside text-purple-300 space-y-1 mb-4">
              <li>Hosting for AI coding and workflow apps</li>
              <li>Platform access & scraping resources (TikTok, Instagram, YouTube, Twitch, Patreon, Social Blade, Twitter, Reddit)</li>
              <li>Premium Rails tools (Avo, Bullet Train)</li>
              <li>Self-hosted Twitter API infrastructure</li>
            </ul>
            <p className="text-purple-200">
              <strong>Current costs:</strong> $100-250/month<br />
              <strong>Projected by 2027:</strong> ~$1K/month as platforms scale
            </p>
          </section>

          {/* Links */}
          <section className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://buymeacoffee.com/hrmtv.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Buy Me a Coffee
              </a>
              <Link href="/work" className="text-purple-300 hover:text-purple-100 underline">
                See full portfolio →
              </Link>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-purple-100 mb-4">Contact</h2>
            <p className="text-purple-300">
              Email: <span className="text-purple-200">ssgear456 [at] gmail [dot] com</span>
            </p>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
