import dayjs from "dayjs";
import Image from "next/image";

interface ArticleHeroProps {
  articleTitle: string;
  articleCategory: string;
  articlefeaturedImage: string;
  articleAuthor: string;
  articleDate: string;
}

const ArticleHero = ({
  articleTitle,
  articleCategory,
  articlefeaturedImage,
  articleAuthor,
  articleDate,
}: ArticleHeroProps) => {
  return (
    <>
      <div className="article_hero">
        <div className="article_hero_wrapper">
          <div className="article_hero_wrapper_text">
            <div className="article_hero_featuredImage">
              <Image
                src={`https:${articlefeaturedImage}?w=400&h=200&q=100&fm=webp`}
                alt={articleTitle}
                width={400}
                height={200}
                placeholder="blur"
                blurDataURL={`https:${articlefeaturedImage}`}
              />
            </div>
            <p className="article_hero_category">{articleCategory}</p>
            <h1 className="article_hero_h1">{articleTitle}</h1>
            <div className="article_hero_author_wrapper">
              <p className="article_hero_author_name">{articleAuthor}</p>
              <span className="article_hero_date">
                Updated: {dayjs(articleDate).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleHero;
