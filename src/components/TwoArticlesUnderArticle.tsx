import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "contentful";

const TwoArticlesUnderArticle = () => {
  const [printPostTitle, setPrintPostTitle] = useState(null);

  const fetchTwoArticles = async () => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });
    const resp = await client.getEntries({ content_type: "blog", limit: 2 });

    setPrintPostTitle(resp.items);
  };

  useEffect(() => {
    fetchTwoArticles();
  }, []);

  return (
    <>
      <main className="two_articles">
        <h1 className="two_articles_latest">Latest Hand-picked Articles</h1>
        <div className="two_articles_wrapper">
          {printPostTitle &&
            printPostTitle.map(({ fields }) => {
              return (
                <Link href={fields?.slug} key={fields?.category?.sys?.id}>
                  <a className="two_articles_a">
                    <h2 className="two_articles_heading">{fields?.title}</h2>
                    <p className="two_articles_explore">Explore →</p>
                  </a>
                </Link>
              );
            })}
        </div>
      </main>
    </>
  );
};

export default TwoArticlesUnderArticle;
