import Link from "next/link";
import { SiteData } from "@/utils/SiteData";
import dynamic from "next/dynamic";

const Techanaut = dynamic(() => import("public/images/techanaut.svg"));

const Footer = () => {
  const { siteTitle, siteAffiliateDisclosure } = SiteData;
  return (
    <footer>
      <div className="footer_wrapper">
        <main className="footer_left">
          <Link className="footer_logo" href="/">
            <a>
              <Techanaut />
            </a>
          </Link>
          <p className="footer_para">{siteAffiliateDisclosure}</p>
          <small>
            © {new Date().getFullYear()} {siteTitle}. All rights reserved.
          </small>
        </main>
      </div>
    </footer>
  );
};

export default Footer;
