import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import { createClient } from "contentful";
import safeJsonStringify from "safe-json-stringify";
import { SiteData } from "@/utils/SiteData";
import Hero from "@/components/Hero";
import HomePageSEO from "@/utils/HomePageSEO";

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
      blogPosts: data.map(
        ({
          fields: { title, author, featuredImage, slug, excerpt, category },
          sys: { id, updatedAt },
        }) => ({
          fields: { title, author, featuredImage, slug, excerpt, category },
          sys: { id, updatedAt },
        })
      ),
    },
    revalidate: 1,
  };
}

const Home = ({ blogPosts }) => {
  const { siteTitle } = SiteData;

  return (
    <>
      <Layout>
        <HomePageSEO />
        <Hero
          heroTitle={`the ${siteTitle} Blog`}
          heroDescription="Expand your knowledge of the tech and gaming world with detailed reviews, step-by-step guides, and informational content."
        />
        <AllBlogPosts blogPosts={blogPosts} />
      </Layout>
    </>
  );
};

export default Home;
