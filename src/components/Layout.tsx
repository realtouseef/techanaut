import React from "react";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer"));

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout_main">
      <Navbar />
      <main className="layout_children">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
