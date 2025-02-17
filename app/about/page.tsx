import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";


import portrait from "public/gallery/portrait.jpeg";
import field from "public/gallery/field.jpeg";
import blueHour from "public/gallery/bluehour.jpg";  
import working from "public/gallery/working.jpg";


export const metadata: Metadata = {
  title: "About | Edd Joseph Jr.",
  description:
    "",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse of me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={portrait}
            alt={"portrait"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md"
            priority

          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={working}
            alt={"working"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority

          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Hello, it's Edd! Originally from Miami, Florida.
              I have been coding for {new Date().getFullYear() - 2022} years. As
              a software engineer, I specialize in full-stack web development
              and product design. Along with coding, I am the Technical Co-Founder and CEO of{" "}
              <Link href="https://freshnest.tech">FreshNest</Link>, which is a platform aimed to connect Short-term rental hosts with cleaners, 
              making cleaning effortless.
            </p>
            <p>
              In addition to coding and building, I create content on my{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/@eddjosephjr"
              >
                YouTube
              </Link>{" "}
              channel, documenting my journey as an entrepreneur and software engineer.
            </p>
            <p>
              When I am not at my desk, I am probably playing basketball,
              playing the piano, reading, or getting gelato :]
            </p>
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              Regarding my technical skills, I specialize in Python, Typescript, Next.JS, React, web/mobile development,
              UI/UX, and product management. But I am always learning new things.
    
            </p>
            <p>
              Here's my{" "} <Link href="https://www.overleaf.com/read/tpkfzzgkywfj#92bba0">resume</Link>. 
            </p>
            {/* <Workplaces items={workplaces} /> */}
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Full Stack Engineer",
    company: "Hines",
    date: "2022 -",
    // imageSrc: hinesLogo,
    link: "https://hines.com",
  },
  {
    title: "Software Engineer",
    company: "PeriShip",
    date: "2021 - 2022",
    // imageSrc: perishipLogo,
    link: "https://peripharma.com/",
  },
  {
    title: "Python Developer",
    company: "CAMS",
    date: "2019 - 2020",
    // imageSrc: camsLogo,
    link: "https://camstex.com",
  },
  {
    title: "Coding Camp Instructor",
    company: "University of Houston",
    date: "2019",
    // imageSrc: uhdLogo,
    link: "https://www.uhd.edu/",
  },
];
