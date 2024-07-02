import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

// import Copilot from "public/gear/copilot.jpeg";
// import Superhuman from "public/gear/superhuman.png";
// import Sway from "public/gear/sway.png";
// import shelf from "public/gear/shelf.png";
// import cables from "public/gear/cables.png";
// import EpidemicSound from "public/gear/epidemic-sound.png";
// import Keyboard from "public/gear/keeb.jpeg";
// import Macrofactor from "public/gear/macrofactor.webp";

export const metadata: Metadata = {
  title: "Gear | Edd Joseph Jr.",
  description: "My toolbox. This is gear I actually own and recommend.",
  openGraph: {
    title: "Gear | Edd Joseph Jr.",
    description: "My toolbox. This is gear I actually own and recommend.",
    type: "website",
    url: "https://eddjosephjr.com/blog/gear",
    images: [{ url: "https://eddjosephjr.com/api/og?title=Gear", alt: "gear" }],
  },
};

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link, sponsored }: ItemProps) => (
  <li className="flex items-center gap-4 transition-opacity">
    <a
      className="relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl bg-tertiary shadow-sm border border-secondary"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center"
        fill
      />
    </a>
    <div className="flex grow items-center justify-between gap-2">
      <div className="space-y-1">
        <h3 className="line-clamp-2 font-medium leading-tight text-primary">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-tight text-secondary">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto h-fit rounded-full bg-tertiary px-4 py-1 text-sm"
          href={link}
          target="_blank"
        >
          Get
        </a>
        {sponsored && (
          <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
        )}
      </div>
    </div>
  </li>
);

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Gear
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              My toolbox.
            </p>
          </div>
          <p
            className="max-w-md animate-in text-tertiary"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            This is all gear I actually own and like. Using the affiliate links
            help support my content creation. Updated on July 2024.
          </p>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex animate-in flex-col gap-8"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="animated-list grid gap-x-6 gap-y-8 md:grid-cols-2">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      // sponsored={item.sponsored}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

const gear = [


  {
    name: "Sony FX30",
    category: "Camera Setup (Video)",
    image:
      "https://m.media-amazon.com/images/I/91JwqqrK5mL._AC_SL1500_.jpg",
    description:
      "Dream camera, 4k 10bit, built-in cooling, and great low light performance.",
    link: "https://amzn.to/3VRhTTs",
  },
  {
    name: "VILTROX 13mm f/1.4",
    category: "Camera Setup (Video)",
    description: "Super versatile and high quality lens.",
    image: "https://m.media-amazon.com/images/I/711LzKhwzWL._AC_SL1500_.jpg",
    link: "https://amzn.to/465VzKV",
  },
  {
    name: "PolarPro Peter McKinnon Variable ND Filter 6-9 Stop",
    category: "Camera Setup (Video)",
    description:
      "Necessary for FX30 at base ISO, control exposure, and motion blur.",
    image: "https://m.media-amazon.com/images/I/615Qv1W4eVL._AC_SL1500_.jpg",
    link: "https://amzn.to/3zopuS5",
  },
  {
    name: "Peak Design Everyday Backpack",
    category: "Everyday Carry",
    image: "https://m.media-amazon.com/images/I/613mwFchkrL._AC_SL1500_.jpg",
    description: "Compact Camera Backpack - A Minimalist & Travel-friendly",
    link: "https://amzn.to/45WtYeT",
  },
  {
    name: "Google Pixel 8 Pro ",
    category: "Everyday Carry",
    image: "https://m.media-amazon.com/images/I/71h9zq4viSL._AC_SL1500_.jpg",
    description: "Overall great phone :)",
    link: "https://amzn.to/4cLr1Ac",
  },
  {
    name: "Sony WH-1000XM5",
    category: "Everyday Carry",
    image: "https://m.media-amazon.com/images/I/61juFYGuTPL._AC_SL1500_.jpg",
    description: "Active Noise Cancelling, Transparency Mode",
    link: "https://amzn.to/3zthn6T",
  },
  {
    name: "The Richest Man in Babylon",
    category: "Books",
    image: "https://m.media-amazon.com/images/I/71xlR6yDvkL._SL1500_.jpg",
    description: "Powerful financial lessons that are still relevant today.",
    link: "https://amzn.to/3ztixiL",
  },
  {
    name: "This Is Marketing",
    category: "Books",
    image: "https://m.media-amazon.com/images/I/71un70E9whL._SL1500_.jpg",
    description: "One of the best marketing books I've honestly read.",
    link: "https://amzn.to/4eQFEnF",
  },

];
