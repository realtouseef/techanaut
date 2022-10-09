import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* preloading fonts */}
          <link
            rel="preload"
            href="/fonts/ahrefs_regular.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/ahrefs_display.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/ahrefs_bold.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/ahrefs_condensedbold.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-Regular.ttf"
            as="font"
            type="font/ttf"
          />
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-Medium.ttf"
            as="font"
            type="font/ttf"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            async
            id="g-tag"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script
            id="g-analytics-code"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
            `,
            }}
          />

          {/* // Google Adsense  */}
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1980395838929361"
            crossorigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
