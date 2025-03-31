import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { JSX } from "react";

interface Social {
  name: "github" | "instagram" | "linkedin" | "twitter";
  url: string;
}

export default function Socials() {
  const socialsLogo: Record<Social["name"], JSX.Element> = {
    github: (
      <BsGithub
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    instagram: (
      <AiFillInstagram
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    linkedin: (
      <BsLinkedin
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    twitter: (
      <BsTwitter
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
  };

  const socialsBg: Record<Social["name"], string> = {
    github: "hover:bg-[#333]",
    instagram: "hover:bg-[#e1306c]",
    linkedin: "hover:bg-[#0a66c2]",
    twitter: "hover:bg-[#1da1f2]",
  };

  const socialsBgDark: Record<Social["name"], string> = {
    github: "dark:hover:bg-[#333]",
    instagram: "dark:hover:bg-[#e1306c]",
    linkedin: "dark:hover:bg-[#0a66c2]",
    twitter: "dark:hover:bg-[#1da1f2]",
  };

  const socials: Social[] = [
    {
      name: "github",
      url: "https://github.com/rizzotto",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/guirizzotto/",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/guilherme-rizzotto/?locale=en_US",
    },
  ];

  return (
    <div className="flex flex-col gap-3 sm:flex-col md:flex-row xl:flex-row z-1">
      <div className="mt-3 flex gap-3 max-[768px]:justify-between max-[333px]:flex-col max-[333px]:items-center">
        {socials.map((social) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={social.name}
            href={social.url}
            className={`p-4 transition transform group active:scale-95 ${
              socialsBg[social.name]
            } rounded-full group bg-white dark:bg-zinc-200 ${
              socialsBgDark[social.name]
            }`}
          >
            {socialsLogo[social.name]}
          </a>
        ))}
      </div>
    </div>
  );
}
