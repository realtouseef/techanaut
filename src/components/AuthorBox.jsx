import Image from "next/image";

const AuthorBox = ({ authorImage, authorName, authorDescription }) => {
  return (
    <>
      <div className="author_box">
        <div className="author_box_wrapper">
          <div className="author_box_image_wrapper">
            <Image
              src={`https:${authorImage}`}
              alt={authorName}
              layout="fill"
              placeholder="blur"
              blurDataURL={`https:${authorImage}`}
              objectFit="cover"
            />
          </div>
          <div className="author_box_text_wrapper">
            <h1 className="author_box_name">{authorName}</h1>
            <p className="author_box_description">{authorDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorBox;
