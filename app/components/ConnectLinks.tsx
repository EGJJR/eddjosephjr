import {
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  // {
  //   label: "Email",
  //   href: "mailto:josepheddjr@gmail.com",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 20 20"
  //       fill="currentColor"
  //       className="h-5 w-5"
  //     >
  //       <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
  //       <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  //     </svg>
  //   ),
  // },
  {
    label: "Partnerships",
    href: "mailto:josepheddjr@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@eddjosephjr",
    icon: <FaYoutube />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eddjospehjr",
    icon: <FaInstagram />,
  },
  {
    label: "Twitter",
    href: "https://x.com/eddjosephjr",
    icon: <FaXTwitter />,
  },
  {
    label: "Discord",
    href: "https://discord.gg/4Gu6CnEy",
    icon: <FaDiscord />,
  },
  {
    label: "GitHub",
    href: "https://github.com/EGJJR",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edd-joseph/",
    icon: <FaLinkedin />,
  },
];

export default ConnectLinks;
