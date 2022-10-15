import Head from "next/head";
import { SiteData } from "./SiteData";

const HomePageSEO = () => {
  const {
    siteTitle,
    siteMoto,
    siteDescription,
    siteKeywords,
    siteUrl,
    siteImage,
  } = SiteData;
  return (
    <Head>
      {/* General Meta Tags */}
      <meta charSet="utf-8" />
      <title>{siteTitle + " | " + siteMoto}</title>
      <link rel="canonical" href={siteUrl} />
      <meta property="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta property="image" content={siteImage} />
      <meta property="description" content={siteDescription} />
      <meta property="keywords" content={siteKeywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="200" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter  Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${siteTitle}`} />
      <meta property="twitter:domain" content={siteUrl} />
      <meta property="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:creator" content={`@${siteTitle}`} />
      <meta name="twitter:site" content={`@${siteTitle}`} />
      <meta name="twitter:image" content={siteImage} />
    </Head>
  );
};

export default HomePageSEO;
