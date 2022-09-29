// import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import safeJsonStringify from "safe-json-stringify";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { SiteData } from "@/utils/SiteData";
import ArticleSEO from "@/utils/ArticleSEO";
import ArticleHero from "@/components/ArticleHero";
import TwoArticlesUnderArticle from "@/components/TwoArticlesUnderArticle";
import AuthorBox from "@/components/AuthorBox";

// dynamic imports
const ArticleLayout = dynamic(() => import("@/components/ArticleLayout"));
// const SocialShare = dynamic(() => import("@/utils/SocialShare"));

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const data = await client.getEntries({ content_type: "blog" });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  const stringifiedData = safeJsonStringify(res.items[0]);
  const data = JSON.parse(stringifiedData);

  return {
    props: { article: data },
    revalidate: 1,
  };
}

const renderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={node.data.uri}
          aria-label={node.data.uri}
        >
          {children}
        </a>
      );
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blog") {
        return (
          <a
            href={node.data.target.fields.slug}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={node.data.target.fields.title}
          >
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <div className="video_wrapper">
            <iframe
              src={`https:${node.data.target.fields.embedUrl}`}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          </div>
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      // render the EMBEDDED_ASSET as you need
      let imgWidth = node.data.target.fields.file.details.image.width;
      let imgHeight = node.data.target.fields.file.details.image.height;
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}?w=${imgWidth}&h=${imgHeight}&q=60&fl=progressive`}
          alt={node.data.target.fields.title}
          width={imgWidth}
          height={imgHeight}
          placeholder="blur"
          blurDataURL={`https:${node.data.target.fields.file.url}`}
        />
      );
    },
  },
};

const PerPosts = ({ article }) => {
  console.log(article);
  // const [isBuyingGuide, setIsBuyingGuide] = useState(false);
  const { siteTitle, siteUrl, siteAffiliateDisclosure } = SiteData;
  // const buyingGuideCategory = article?.fields?.category?.fields?.categoryName;

  // useEffect(() => {
  //   (() => {
  //     if (Object.values(buyingGuideCategory).join("") === "Buying Guide") {
  //       setIsBuyingGuide(true);
  //     }
  //   })();
  // }, [buyingGuideCategory]);

  return (
    <ArticleLayout>
      <ArticleSEO
        articleTitle={article.fields?.title}
        title={article.fields?.title}
        description={article.fields?.excerpt}
        slug={article.fields?.slug}
        siteName={siteTitle}
        createdAt={article.sys?.createdAt}
        updatedAt={article.sys?.updatedAt}
        excerpt={article.fields?.excerpt}
        image={article.fields?.featuredImage?.fields?.file?.url}
        imageWidth={
          article.fields?.featuredImage?.fields?.file?.details?.image?.width
        }
        imageHeight={
          article.fields?.featuredImage?.fields?.file?.details?.image?.height
        }
        imageType={article.fields?.featuredImage?.fields?.file?.contentType}
        keywords={article.fields?.tags}
        author={article.fields?.author[0]?.fields?.name}
      />

      <article className="SingleBlogPost">
        <div className="top_heading">
          <ArticleHero
            articlefeaturedImage={
              article.fields?.featuredImage?.fields?.file?.url
            }
            articleCategory={article?.fields?.category?.fields?.categoryName}
            articleTitle={article.fields?.title}
            articleAuthor={article.fields?.author[0]?.fields?.name}
            articleDate={article.sys?.updatedAt}
          />
        </div>

        <div className="actual_content">
          <div className="SBP-content">
            <div className="SBP-content_wrapper">
              {documentToReactComponents(
                article.fields?.content,
                renderOptions
              )}
            </div>

            {/* <div className="social_wrapper">
              <SocialShare
                shareUrl={`${siteUrl}/blog/${article.fields?.slug}`}
                mediaUrl={`https:${article.fields?.featuredImage?.fields?.file?.url}`}
              />
            </div> */}
          </div>
          <AuthorBox
            authorLink={`/author/${article.fields?.author[0]?.fields?.slug}`}
            authorImage={
              article.fields?.author[0]?.fields?.picture?.fields?.file?.url
            }
            authorName={article.fields?.author[0]?.fields?.name}
            authorDescription={article.fields?.author[0]?.fields?.bio}
          />
        </div>
        {/* {isBuyingGuide && <p className="sbp_amz">{siteAffiliateDisclosure}</p>} */}
      </article>

      <TwoArticlesUnderArticle />
    </ArticleLayout>
  );
};

export default PerPosts;
