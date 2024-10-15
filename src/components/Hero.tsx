interface Props {
  heroTitle: string;
  heroDescription?: string;
  articleHeroCategory?: string;
}

const Hero = ({ heroTitle, heroDescription, articleHeroCategory }: Props) => {
  return (
    <>
      <div className="hero">
        <div className="hero_wrapper">
          <div className="hero_text_wrapper">
            <p className="hero_article_category">{articleHeroCategory}</p>
            <h1 className="hero_h1">{heroTitle}</h1>
            <p className="hero_para">{heroDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
