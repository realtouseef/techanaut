import { useState, useEffect } from "react";
import Link from "next/link";
import {
  categoryNameQuery,
  allCategoryNamesQuery,
} from "@/queries/categoryQuery";
import { createClient } from "contentful";
import dynamic from "next/dynamic";

const Techanaut = dynamic(() => import("public/images/techanaut.svg"));
const Cross = dynamic(() => import("public/images/Xmark.svg"));
const Bars = dynamic(() => import("public/images/Bars.svg"));

const Navbar = () => {
  // const [singleCategory, setSingleCategory] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [renderPages, setRenderPages] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  // useEffect(() => {
  // categories are limited to 3
  //   (async () => {
  //     const res = await fetch(process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_URL, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         query: categoryNameQuery,
  //       }),
  //     });

  //     const { data } = await res.json();
  //     setSingleCategory(data.categoryCollection?.items);
  //   })();
  // }, []);

  useEffect(() => {
    // all the categories are fetched
    (async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: allCategoryNamesQuery,
        }),
      });

      const { data } = await res.json();
      setAllCategories(data.categoryCollection?.items);
    })();
  }, []);

  useEffect(() => {
    // all the categories are fetched
    (async () => {
      const data = await client.getEntries({ content_type: "pages" });

      setRenderPages(data.items);
    })();
  }, []);

  // doing this to lower the response time
  const localCategory = [
    { id: 1, categoryName: "How To", slug: "how-to" },
    { id: 2, categoryName: "Informational", slug: "informational" },
    { id: 3, categoryName: "Buying Guides", slug: "buying-guides" },
  ];

  return (
    <>
      <div className="navbar_main">
        <div className="navbar_main_wrapper">
          <nav className="navbar_left">
            <Link
              aria-label="go back to home page"
              href="/"
              className="nav_logo"
            >
              <Techanaut />
            </Link>
          </nav>
          <div className="navbar_right_outer-wrapper">
            <ul className="navbar_right">
              <li className="items_li">
                {localCategory?.map(({ categoryName, slug, id }) => {
                  return (
                    <Link
                      href={`/category/${slug}`}
                      key={id}
                      className="items_link"
                    >
                      <a className="items_a">{categoryName}</a>
                    </Link>
                  );
                })}
              </li>
            </ul>
            <button
              aria-label="hamburger icon"
              type="button"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              {isOpen ? (
                <div className="wrapper_svg">
                  <Bars />
                </div>
              ) : (
                <div className="wrapper_svg">
                  <Bars />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          {/* <div className="nav_bg_shadow"></div> */}
          <div className="nav_sidebar">
            <p className="sidebar_logo">
              <Techanaut />
              <button
                aria-label="close icon"
                type="button"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <div className="wrapper_svg">
                  <Cross />
                </div>
              </button>
            </p>
            <ul className="sidebar_ul">
              <li className="sidebar_li">
                {allCategories?.map(({ categoryName, slug, sys }) => {
                  return (
                    <Link
                      href={`/category/${slug}`}
                      key={sys.id}
                      prefetch={false}
                      className="sidebar_link"
                    >
                      <a className="sidebar_a">{categoryName}</a>
                    </Link>
                  );
                })}
              </li>
              <li className="sidebar_li">
                {renderPages?.map(({ fields, sys }) => {
                  return (
                    <Link
                      href={`/${fields?.slug}`}
                      key={sys.id}
                      className="sidebar_link"
                    >
                      <a className="sidebar_a">{fields?.title}</a>
                    </Link>
                  );
                })}
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
