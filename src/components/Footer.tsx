import Link from "next/link";
import { SiteData } from "@/utils/SiteData";
import dynamic from "next/dynamic";

const Techanaut = dynamic(() => import("/public/images/techanaut.svg"));

interface footerProps {
  id: number;
  itemName: string;
  itemLink: string;
}

const footerItems: footerProps[] = [
  { id: 1, itemName: "About", itemLink: "/about" },
  {
    id: 2,
    itemName: "Terms and Conditions",
    itemLink: "/terms-and-conditions",
  },
  {
    id: 3,
    itemName: "Affiliate Disclosure",
    itemLink: "/affiliate-disclosure",
  },
];

const Footer = () => {
  const { siteTitle, siteDescription } = SiteData;
  return (
    <footer>
      <div className="footer_wrapper">
        <main className="footer_left">
          <Link className="footer_logo" href="/">
            <a>
              <Techanaut />
            </a>
          </Link>
          <p className="footer_para">{siteDescription}</p>
          <small>
            © {new Date().getFullYear()} {siteTitle}. All rights reserved.
          </small>
        </main>
        <main className="footer_right">
          {footerItems.map(({ id, itemName, itemLink }) => {
            return (
              <Link href={itemLink} key={id}>
                <a className="footer_right_items">{itemName}</a>
              </Link>
            );
          })}
        </main>
      </div>
    </footer>
  );
};

export default Footer;
