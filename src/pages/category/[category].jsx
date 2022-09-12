import { createClient } from "contentful";
import Layout from "@/components/Layout";
import safeJsonStringify from "safe-json-stringify";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { SiteData } from "@/utils/SiteData";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const data = await client.getEntries({ content_type: "category" });

  const paths = data.items.map((item) => ({
    params: { category: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "category",
    "fields.slug": params.category,
  });

  const stringifiedData = safeJsonStringify(res.items[0]);
  const data = JSON.parse(stringifiedData);

  return {
    props: { category: data },
    revalidate: 1,
  };
}

const Category = ({ category }) => {
  const { siteTitle, siteUrl } = SiteData;
  return (
    <Layout>
      <Head>
        <title>{`${category.fields?.categoryName} Articles | ${siteTitle}`}</title>
        <meta
          property="og:url"
          content={`${siteUrl}/category/${category.fields?.slug}`}
        />
        <meta
          property="og:description"
          content={category.fields?.description}
        />
        <meta property="description" content={category.fields?.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={category.fields?.categoryName} />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={`@${siteTitle}`} />
        <meta name="twitter:site" content={`@${siteTitle}`} />
        <link
          rel="canonical"
          href={`${siteUrl}/category/${category.fields?.slug}`}
        />
      </Head>
      <main className="category_main">
        <article className="category_inner">
          <h1 className="category_h1">{category.fields?.categoryName}</h1>
          <p className="category_p">{category.fields?.description}</p>
        </article>
        <article>
          <div className="cat_articles">
            {!category.fields?.categoryBlogs ? (
              <div className="under_construction">
                <h2>Under Construction...</h2>
              </div>
            ) : (
              category.fields?.categoryBlogs?.map((item) => {
                return (
                  <Link href={`/blog/${item.fields?.slug}`} key={item.sys?.id}>
                    <a className="cat_article_link">
                      <div className="cat_feat_wrapper">
                        <Image
                          src={`https:${item.fields?.featuredImage?.fields?.file?.url}`}
                          alt={`${item.fields?.title}'s featured Image`}
                          height={
                            item.fields?.featuredImage?.fields?.file?.details
                              ?.image?.height
                          }
                          width={
                            item.fields?.featuredImage?.fields?.file?.details
                              ?.image?.width
                          }
                          placeholder="blur"
                          blurDataURL={`https:${item.fields?.featuredImage?.fields?.file?.url}`}
                        />
                      </div>
                      <div className="cat_feat_content">
                        <h2>{item.fields?.title}</h2>
                        <span>Read More</span>
                      </div>
                    </a>
                  </Link>
                );
              })
            )}
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default Category;
