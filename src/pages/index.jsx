import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import { createClient } from "contentful";
import safeJsonStringify from "safe-json-stringify";
import { SiteData } from "@/utils/SiteData";
import Head from "next/head";

// dynamic imports
const AllBlogPosts = dynamic(() => import("@/components/AllBlogPosts"));

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "blog" });
  const stringifiedData = safeJsonStringify(res.items);
  const data = JSON.parse(stringifiedData);

  return {
    props: {
      // only return what you're using
      // helps in decreasing the size
      blogPosts: data.map(
        ({
          fields: { title, author, featuredImage, slug, category },
          sys: { id, updatedAt },
        }) => ({
          fields: { title, author, featuredImage, slug, category },
          sys: { id, updatedAt },
        })
      ),
    },
    revalidate: 1,
  };
}

const Home = ({ blogPosts }) => {
  const {
    siteTitle,
    siteMoto,
    siteDescription,
    siteKeywords,
    siteUrl,
    siteImage,
  } = SiteData;
  return (
    <>
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <title>{siteTitle + " | " + siteMoto}</title>
          <link rel="canonical" href={siteUrl} />
          <meta
            property="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:description" content={siteDescription} />
          <meta property="description" content={siteDescription} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={siteImage} />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="250" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="keywords" content={siteKeywords} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={`@${siteTitle}`} />
        </Head>
        <AllBlogPosts blogPosts={blogPosts} />
      </Layout>
    </>
  );
};

export default Home;
