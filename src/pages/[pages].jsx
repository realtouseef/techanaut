import Layout from "@/components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import safeJsonStringify from "safe-json-stringify";
import ArticleSEO from "@/utils/ArticleSEO";
import Hero from "@/components/Hero";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const data = await client.getEntries({ content_type: "pages" });

  const paths = data.items.map((item) => ({
    params: { pages: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "pages",
    "fields.slug": params.pages,
  });

  const stringifiedData = safeJsonStringify(res.items[0]);
  const data = JSON.parse(stringifiedData);

  return {
    props: { pages: data },
    revalidate: 1,
  };
}

const PageSlug = ({ pages }) => {
  return (
    <Layout>
      <ArticleSEO
        articleTitle={pages.fields?.title}
        slug={pages.fields?.slug}
        keywords={pages.fields?.metadata?.tags}
      />
      <Hero heroTitle={pages.fields?.title} />
      <main className="pages_wrapper">
        <div>{documentToReactComponents(pages.fields?.content)}</div>
      </main>
    </Layout>
  );
};

export default PageSlug;
