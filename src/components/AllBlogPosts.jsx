import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { SiteData } from "@/utils/SiteData";

const AllBlogPosts = ({ blogPosts }) => {
  const { siteTitle } = SiteData;
  return (
    <>
      <div className="blog-home">
        {blogPosts.map(({ fields, sys }) => {
          return (
            <Link href={`/blog/${fields?.slug}`} key={sys?.id}>
              <div className="blog-home_wrapper_inner">
                <div className="blog-home_wrapper">
                  <div className="inner-wrapper_inside">
                    <div className="inner_featured_img">
                      <Image
                        src={`https:${fields?.featuredImage?.fields?.file?.url}`}
                        alt={`${fields?.title}'s featured Image on Techanaut`}
                        width={
                          fields?.featuredImage?.fields?.file?.details?.image
                            ?.width
                        }
                        height={
                          fields?.featuredImage?.fields?.file?.details?.image
                            ?.height
                        }
                        placeholder="blur"
                        blurDataURL={`https:${fields?.featuredImage?.fields?.file?.url}`}
                      />
                    </div>

                    <div className="content-below-image">
                      <span className="category_tag">
                        {fields?.category?.fields?.categoryName}
                      </span>
                      <h1 className="content-below_h1">
                        <span className="below_h1_span">{fields?.title}</span>
                      </h1>
                      {/* <p className="excerpt">{fields?.excerpt}</p> */}

                      <div className="author_date blogs-stuff">
                        <div className="author_wrapper_allblogs">
                          <div className="author_name">
                            {fields?.author?.map(({ fields }) => {
                              return (
                                <div
                                  key={fields.picture?.sys?.id}
                                  className="author_image"
                                >
                                  <div className="author_image_wrapper">
                                    <Image
                                      src={`https:${fields?.picture?.fields?.file?.url}`}
                                      alt={`${fields?.name} on ${siteTitle}`}
                                      placeholder="blur"
                                      blurDataURL={`https:${fields?.picture?.fields?.file?.url}`}
                                      layout="fill"
                                      objectFit="cover"
                                      quality={100}
                                    />
                                  </div>
                                  <p className="author_name_abp">
                                    {fields?.name}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                          <p className="blog-home_author_date">
                            • {dayjs(sys?.updatedAt).format("MMM DD, YYYY")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AllBlogPosts;
