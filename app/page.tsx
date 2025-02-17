import { allBlogs } from ".contentlayer/generated";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { allProjects } from ".contentlayer/generated";

import Link from "@/app/components/Link";
import PostList from "@/app/blog/components/PostList";
import ProjectList from "@/app/projects/components/ProjectList";

export default function Home() {
  const blogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // 3 most recent
    .filter((_, i) => i < 3);

  const projects = allProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
            hey, Edd here!
          </h1>
          <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I am a computer science student and software engineer who builds for the web with a
            design-oriented approach. I am also the Technical Co-Founder of{" "}
            <Link href="https://freshnest.tech">FreshNest</Link>. 
            </p>
            
            <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            In addition to coding and building, I make{" "}
            <Link href="https://youtube.com/@eddjosephjr">YouTube</Link> videos,
            where I document my journey.
            </p>

            <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Here's my{" "}
            <Link href="https://www.overleaf.com/read/tpkfzzgkywfj#92bba0">Resume</Link>.
            </p>
            
          
        </div>
        <div
          className="flex animate-in gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Link
            href="https://github.com/EGJJR"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Github
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://instagram.com/eddjosephjr/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            IG
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/edd-joseph/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            LinkedIn
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            href="https://x.com/eddjosephjr/"
          >
            Tweets
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            href="https://embeds.beehiiv.com/a45cb158-6258-4f7e-abdb-de5dfa4095af"
          >
            Newsletter
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <p className="tracking-tight text-secondary">Projects Coming Soon</p>
        <ProjectList projects={projects} />
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 tracking-tight text-secondary"
            href="/blog"
          >
            Latest blogs
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg text-tertiary">
            I occasionally write about tech, productivity, business, and my learnings.
            Check me out and subscribe to stay up to date.
          </p>
        </div>
        <PostList posts={blogs} />
      </div>
    </div>
  );
}
