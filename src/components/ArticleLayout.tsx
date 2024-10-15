import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import React from "react";

const Footer = dynamic(() => import("./Footer"));

const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="article_layout">
      <Navbar />
      <article className="article_layout_children">{children}</article>
      <Footer />
    </main>
  );
};

export default ArticleLayout;
