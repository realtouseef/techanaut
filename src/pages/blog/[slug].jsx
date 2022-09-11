import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import dayjs from "dayjs";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import safeJsonStringify from "safe-json-stringify";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { SiteData } from "@/utils/SiteData";
import SEO from "@/utils/SEO";

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
        <a target="_blank" rel="noopener noreferrer" href={node.data.uri}>
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
      return (
        <img
          src={`https:${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.title}
          className="SBP_img_asset_wrapper"
        />
      );
    },
  },
};

const PerPosts = ({ article }) => {
  const [isBuyingGuide, setIsBuyingGuide] = useState(false);
  const { siteTitle, siteUrl, siteAffiliateDisclosure } = SiteData;

  const buyingGuideCategory = article?.fields?.category?.fields?.categoryName;

  useEffect(() => {
    (() => {
      if (Object.values(buyingGuideCategory).join("") === "Buying Guide") {
        setIsBuyingGuide(true);
      }
    })();
  }, [buyingGuideCategory]);

  return (
    <ArticleLayout>
      <SEO
        articleTitle={article.fields?.title}
        title={article.fields?.title}
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
        <div className="actual_content">
          <span className="SBP-category">
            {article?.fields?.category?.fields?.categoryName}
          </span>

          <h1 className="SBP-title">{article.fields?.title}</h1>

          <div className="sbp-author-date">
            <span className="sbp-author_section">
              <div className="sbp-author_image">
                <Image
                  src={`https:${article.fields?.author[0]?.fields?.picture?.fields?.file?.url}`}
                  alt={`${article.fields?.author[0]?.fields?.name}'s profile picture on ${siteTitle}`}
                  placeholder="blur"
                  blurDataURL={`https:${article.fields?.author[0]?.fields?.picture?.fields?.file?.url}`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="sbp-author-date_wrapper">
                <span className="sbp-author-name">
                  {article.fields?.author[0]?.fields?.name}
                </span>

                <span className="sbp-date">
                  {dayjs(article.sys?.updatedAt).format("MMM DD, YYYY")}
                </span>
              </div>
            </span>
          </div>
        </div>

        <div className="SBP-featured__wrapper">
          <Image
            src={`https:${article.fields?.featuredImage?.fields?.file?.url}`}
            alt={`${article.fields?.title}'s featured image on Techanaut`}
            placeholder="blur"
            blurDataURL={`https:${article.fields?.featuredImage?.fields?.file?.url}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            loading="eager"
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
        </div>
        {/* {isBuyingGuide && <p className="sbp_amz">{siteAffiliateDisclosure}</p>} */}
      </article>
    </ArticleLayout>
  );
};

export default PerPosts;
