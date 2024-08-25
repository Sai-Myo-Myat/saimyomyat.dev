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
    <nav
      className="shadow-md sticky top-0 z-10"
      style={{
        backgroundImage: "url('/news_paper_background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between p-4">
        {navLinks.map((link) => {
          return (
            <Link key={link.url} href={link.url}>
              <ClickableH3>{link.text}</ClickableH3>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default HeaderNav;
