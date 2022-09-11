import Head from "next/head";
import Favicon from "../../public/t-placeholder.jpg";
import { SiteData } from "./SiteData";

const ArticleSEO = ({
  articleTitle,
  slug,
  siteName,
  excerpt,
  image = Favicon,
  imageWidth,
  imageHeight,
  imageType,
  keywords,
  createdAt,
  updatedAt,
  author = "Techanaut",
}) => {
  const { siteTitle, siteUrl } = SiteData;
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{`${articleTitle} | Techanaut`}</title>
      <meta property="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta property="og:title" content={articleTitle} />
      <meta property="og:url" content={`${siteUrl}/${slug}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={excerpt} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <link rel="canonical" href={`${siteUrl}/${slug}`} />
      <meta property="og:image" content={`https:${image}`} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:type" content={imageType} />
      <meta property="article:published_time" content={createdAt} />
      <meta property="article:modified_time" content={updatedAt} />
      <meta property="keywords" content={keywords?.join(", ")} />
      <meta name="author" content={`Written by ${author}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${siteTitle}`} />
      <meta name="twitter:site" content={`@${siteTitle}`} />
    </Head>
  );
};

export default ArticleSEO;
