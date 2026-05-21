import { CONTACT_EMAIL } from "@/app/types/settings";
import { SocialIcon } from "./social-icon";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full px-8 py-6 flex flex-col items-center justify-center font-semibold text-sm text-stone-400 bg-background">
      <div className="flex gap-4 items-center mb-2">
        <SocialIcon
          href={`mailto:${CONTACT_EMAIL}`}
          title="Send email to Andrew"
          icon={<MdEmail className="size-6" />}
        />{" "}
        <SocialIcon
          href="https://www.instagram.com/jonadrew_/"
          title="Instagram"
          icon={<FaInstagram className="size-6" />}
        />
        <SocialIcon
          href="https://github.com/andrwyoung/art-portfolio"
          title="See this website's code"
          icon={<FaGithub className="size-5.5" />}
        />
        <SocialIcon
          href="https://linkedin.com/in/andrwyoung"
          title="Visit Andrew's LinkedIn"
          icon={<FaLinkedin className="size-5.5" />}
        />
      </div>

      <a
        href="https://www.andrwyoung.com/"
        className="font-header tracking-tightest text-xs font-semibold
            hover:underline"
        title="Andrew's website"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        © {new Date().getFullYear()} Andrew Yong
      </a>
    </footer>
  );
}
