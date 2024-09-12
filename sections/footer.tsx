import LinkIcon from "@/components/base/link-icon";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between py-4">
      <LinkIcon icon={<GithubIcon />} url="https://github.com/Sai-Myo-Myat" />
      <LinkIcon
        icon={<LinkedinIcon />}
        url="https://www.linkedin.com/in/saimyo-myat-862729229/"
      />
      <LinkIcon
        icon={<h4 className="font-extrabold">Up Work</h4>}
        url="https://www.upwork.com/freelancers/~018080e88edad80076"
      />
    </footer>
  );
};

export default Footer;
