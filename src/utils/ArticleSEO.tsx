import Head from "next/head";
import { SiteData } from "./SiteData";

interface SeoProps {
  articleTitle: string;
  slug: string;
  siteName: string;
  excerpt: string;
  description?: string;
  image: string;
  imageWidth: string;
  imageHeight: string;
  imageType: string;
  keywords: string[];
  createdAt: string;
  updatedAt: string;
  author: string;
}

const ArticleSEO = ({
  articleTitle,
  slug,
  siteName,
  excerpt,
  description,
  image,
  imageWidth,
  imageHeight,
  imageType,
  keywords,
  createdAt,
  updatedAt,
  author = "Techanaut",
}: SeoProps) => {
  const { siteTitle, siteUrl } = SiteData;

  return (
    <Head>
      {/* General Meta Tags */}
      <meta charSet="utf-8" />
      <title>{`${articleTitle} | Techanaut`}</title>
      <meta property="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta property="description" content={excerpt} />
      <meta name="author" content={`Written by ${author}`} />
      <meta name="rating" content="general" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="revisit-after" content="1 day" />
      <meta name="distribution" content="global" />
      <link rel="canonical" href={`${siteUrl}/blog/${slug}`} />
      <meta property="article:published_time" content={createdAt} />
      <meta property="article:modified_time" content={updatedAt} />
      <meta property="keywords" content={keywords?.join(", ")} />

      {/* Open Graph Meta Tags  */}
      <meta property="og:title" content={articleTitle} />
      <meta property="og:url" content={`${siteUrl}/blog/${slug}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={excerpt} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={`https:${image}`} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:type" content={imageType} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={`${siteUrl}/blog/${slug}`} />
      <meta property="twitter:url" content={`${siteUrl}/blog/${slug}`} />
      <meta name="twitter:title" content={articleTitle} />
      <meta name="twitter:description" content={excerpt} />
      <meta name="twitter:creator" content={`@${siteTitle}`} />
      <meta name="twitter:site" content={`@${siteTitle}`} />
      <meta name="twitter:image" content={`https:${image}`} />
    </Head>
  );
};

export default ArticleSEO;
