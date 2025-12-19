import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import TopLinks from '@/components/topLinks';
import LinkDirectory from '@/components/linkDirectory';

export default function Home() {
  return (
    <>
      <Head>
        <title>HasanAbi Community Hub</title>
        <meta name="description" content="Navigate HasanAbi community resources" />
      </Head>
      <div className="bg-scanlines bg-custom-purple min-h-screen">
        <PageHeader>HasanAbi Community Hub</PageHeader>
        <TopLinks />

        <LinkDirectory />

        {/* Support/Work Links */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-x-4">
            <Link href="/support" className="text-purple-400 hover:text-purple-200 underline">
              Support
            </Link>
            <span className="text-purple-600">|</span>
            <Link href="/work" className="text-purple-400 hover:text-purple-200 underline">
              My Work
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
