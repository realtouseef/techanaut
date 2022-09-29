import Layout from "@/components/Layout";
import Link from "next/link";
import Hero from "@/components/Hero";
import Head from "next/head";
import { SiteData } from "@/utils/SiteData";

const FourOFour = () => {
  const { siteTitle } = SiteData;
  return (
    <Layout>
      <Head>
        <title>Ops, Nothing Found!! | {siteTitle} </title>
      </Head>
      <Hero heroTitle="Ops, Nothing Found!!" />
      <main className="four_not-found">
        <p>
          {`Sorry, couldn't find anything. Either the entered URL is incorrect,
          broken or doesn't exist.`}
        </p>
        <p>
          Please double check if the <strong>URL is correct</strong> or you can
          pick <strong>another article</strong> to read, written by our experts.
        </p>
        <button aria-label="Go back to Main Page">
          <Link aria-label="go back to home page" href="/">
            Read other Articles
          </Link>
        </button>
      </main>
    </Layout>
  );
};

export default FourOFour;
