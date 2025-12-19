/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

export default function Work() {
  return (
    <>
      <Head>
        <title>My Work</title>
        <meta name="description" content="Portfolio - web automation, full-stack development, content creator tools" />
      </Head>
      <div className="bg-scanlines bg-custom-purple min-h-screen">
        <PageHeader>My Work</PageHeader>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-purple-200 text-lg mb-4">
              I build left-wing content creator tools and fan sites. Currently developing the
              CrankCommunism ecosystem — including this HasanAbi fan site and the upcoming HMTV & LMTV platforms.
            </p>
            <p className="text-purple-300 mb-4">
              Primary languages: Ruby, TypeScript/JavaScript. Python as needed.
            </p>
            <p className="text-purple-300">
              Available for: freelance coding, AI workflow consulting, left-wing agitprop help.
            </p>
          </section>

          {/* Section 1: Content Creator Tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-6 border-b border-purple-600 pb-2">
              Content Creator Tools & Left-Wing Media
            </h2>
            <p className="text-purple-200 mb-4">
              Current focus: CrankCommunism ecosystem — building tools and platforms for left-wing content creators.
            </p>
            <ul className="list-disc list-inside text-purple-300 mb-6 space-y-1">
              <li><a href="https://hasanabi.tv" className="text-purple-200 hover:text-white underline">HasanAbi fan site</a> (this site)</li>
              <li><a href="https://crankcommunism-com-git-main-saadh-shezs-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white underline">CrankCommunism</a> (dev)</li>
              <li>HMTV (coming soon)</li>
              <li>LMTV (coming soon)</li>
            </ul>

            {/* HasTok Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <img
                  src="/work/hastok-homepage.png"
                  alt="HasTok Homepage"
                  className="rounded-lg border border-purple-600 w-full"
                />
                <p className="text-purple-400 text-sm mt-2">HasTok Homepage (HMTV/LMTV component)</p>
              </div>
              <div>
                <img
                  src="/work/hastok-stats.png"
                  alt="HasTok Stats"
                  className="rounded-lg border border-purple-600 w-full"
                />
                <p className="text-purple-400 text-sm mt-2">HasTok Stats Dashboard</p>
              </div>
            </div>
          </section>

          {/* Section 2: Web Automation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-6 border-b border-purple-600 pb-2">
              Web Automation & Scraping
            </h2>
            <p className="text-purple-200 mb-4">
              Extensive experience with browser automation and data scraping at scale:
            </p>
            <ul className="list-disc list-inside text-purple-300 mb-6 space-y-1">
              <li>Playwright, Selenium, Watir (JS, Python, Ruby)</li>
              <li>Proxy management and rotation</li>
              <li>Browser fingerprint avoidance</li>
              <li>Large-scale crawling infrastructure</li>
            </ul>

            {/* MobileAdScout */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-purple-100 mb-3">MobileAdScout</h3>
              <p className="text-purple-300 mb-4">
                Profitable B2B SaaS for marketers. Used Selenium and Watir to scrape ads and landing pages from thousands of sites.
              </p>

              {/* Video */}
              <div className="mb-4">
                <video
                  controls
                  poster="/work/mobileadscout-video-thumb.jpg"
                  className="rounded-lg border border-purple-600 w-full max-w-2xl"
                >
                  <source src="/work/mobileadscout-walkthrough.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-purple-400 text-sm mt-2">MobileAdScout Review and Walkthrough</p>
              </div>

              {/* Screenshots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <img
                    src="/work/mobileadscout-1.png"
                    alt="MobileAdScout Screenshot 1"
                    className="rounded-lg border border-purple-600 w-full"
                  />
                </div>
                <div>
                  <img
                    src="/work/mobileadscout-2.png"
                    alt="MobileAdScout Screenshot 2"
                    className="rounded-lg border border-purple-600 w-full"
                  />
                </div>
              </div>

              {/* Short clip */}
              <div className="mb-4">
                <video
                  controls
                  className="rounded-lg border border-purple-600 w-full max-w-md"
                >
                  <source src="/work/mobileadscout-clip.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-purple-400 text-sm mt-2">MobileAdScout demo clip</p>
              </div>

              <p className="text-purple-400">
                <a href="https://github.com/ssaadh/MobileAdScout" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 underline">GitHub repo</a> (private — request access)
              </p>
            </div>

            {/* VidAdTelligence */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-purple-100 mb-3">VidAdTelligence</h3>
              <p className="text-purple-300 mb-4">
                Similar to MobileAdScout but focused on video ads. Scraped Instagram, Facebook, and YouTube video ads and landing pages.
              </p>
              <div className="mb-4">
                <img
                  src="/work/vidadtelligence.png"
                  alt="VidAdTelligence Screenshot"
                  className="rounded-lg border border-purple-600 w-full max-w-2xl"
                />
                <p className="text-purple-400 text-sm mt-2">VidAdTelligence interface</p>
              </div>
              <p className="text-purple-400">
                <a href="https://github.com/ssaadh/vidtelligence-app" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 underline">GitHub repo</a> (private — request access)
              </p>
            </div>
          </section>

          {/* Section 3: Full-Stack Development */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-6 border-b border-purple-600 pb-2">
              Full-Stack Development
            </h2>
            <p className="text-purple-200 mb-4">
              Modern Rails stack with React frontends:
            </p>
            <ul className="list-disc list-inside text-purple-300 mb-4 space-y-1">
              <li>Rails with Avo (admin/backend) and Bullet Train (starter kit)</li>
              <li>Inertia.js for Rails + React integration</li>
              <li>Headless CMS experience: Strapi, Directus, WordPress</li>
              <li>TypeScript, React, Next.js</li>
            </ul>
          </section>

          {/* Ongoing Costs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-6 border-b border-purple-600 pb-2">
              Ongoing Costs
            </h2>
            <p className="text-purple-200 mb-4">
              Running these platforms requires ongoing investment:
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
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-100 mb-6 border-b border-purple-600 pb-2">
              Links
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="https://buymeacoffee.com/hrmtv.dev" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white underline">
                  Buy Me a Coffee
                </a>
              </li>
              <li>
                <a href="https://github.com/ssaadh" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/sponsors/ssaadh" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white underline">
                  GitHub Sponsors
                </a>
              </li>
              <li>
                <a href="https://github.com/ssaadh/MobileAdScout" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white underline">
                  MobileAdScout repo
                </a>
                <span className="text-purple-400"> (private — request access)</span>
              </li>
              <li>
                <a href="https://github.com/ssaadh/vidtelligence-app" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white underline">
                  VidAdTelligence repo
                </a>
                <span className="text-purple-400"> (private — request access)</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-100 mb-6 border-b border-purple-600 pb-2">
              Contact
            </h2>
            <p className="text-purple-300">
              Email: <span className="text-purple-200">ssgear456 [at] gmail [dot] com</span>
            </p>
          </section>

          {/* Back to Support */}
          <div className="text-center">
            <Link href="/support" className="text-purple-300 hover:text-purple-100 underline">
              ← Back to Support page
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
