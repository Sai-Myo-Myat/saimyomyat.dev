import Link from "next/link";
import ClickableH3 from "../base/clickable-h3";
import NavLayout from "./nav-layout";

const navLinks: { url: string; text: string }[] = [
  { url: "#profile", text: "Profile" },
  { url: "#projects", text: "Projects" },
  // { url: "#experiences", text: "Experiences" },
  { url: "#blogs", text: "Blogs" },
];

const HeaderNav = () => {
  return (
    <NavLayout>
      {navLinks.map((link) => {
        return (
          <Link key={link.url} href={link.url}>
            <ClickableH3 className="font-bold sm:text-lg">
              {link.text}
            </ClickableH3>
          </Link>
        );
      })}
    </NavLayout>
  );
};

export default HeaderNav;
