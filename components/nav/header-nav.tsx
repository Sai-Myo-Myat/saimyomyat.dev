import Link from "next/link";
import ClickableH3 from "../base/clickable-h3";

const navLinks: { url: string; text: string }[] = [
  { url: "#profile", text: "Profile" },
  { url: "#projects", text: "Projects" },
  // { url: "#experiences", text: "Experiences" },
  { url: "#blogs", text: "Blogs" },
];

const HeaderNav = () => {
  return (
    <nav className="flex flex-wrap justify-between py-4 sticky top-0 z-10 bg-background border-b">
      {navLinks.map((link) => {
        return (
          <Link key={link.url} href={link.url}>
            <ClickableH3>{link.text}</ClickableH3>
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderNav;
