import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "@/app/components/Link";
import { allBlogs } from ".contentlayer/generated";

// import Avatar from "@/app/components/Avatar";
import Tags from "@/app/components/Tags";
import Mdx from "@/app/blog/components/MdxWrapper";
import FlipNumber from "@/app/components/FlipNumber";
// import Me from "@/public/avatar.png";

import { formatDate } from "@/app/_utils/formatDate";
import { getViewsCount } from "@/app/db/queries";
import { incrementViews } from "@/app/db/actions";
import NewsletterSignupForm from "@/app/blog/components/NewsletterSignupForm";

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const {
    title,
    date: publishedTime,
    summary: description,
    image,
    slug,
  } = blog;

  const ogImage = image
    ? `https://eddjosephjr.com/${image}`
    : `https://eddjosephjr.com/api/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL("https://eddjospehjr.com"),
    title: `${title} | Edd Joseph Jr.`,
    description,
    openGraph: {
      title: `${title} | Edd Joseph Jr.`,
      description,
      type: "article",
      publishedTime,
      url: `https://eddjosephjr.com/blog/${slug}`,
      images: [{ url: ogImage, alt: title }],
    },
  };

  return metadata;
}

export default async function Blog({ params }: { params: any }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex flex-col gap-8">
          <div className="flex max-w-xl flex-col gap-4 text-pretty">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {blog.title}
            </h1>
            <p className="text-secondary">{blog.summary}</p>
          </div>
          <div className="flex max-w-none items-center gap-4">
            {/* <Avatar src={Me} initials="ej" size="sm" /> */}
            <div className="leading-tight">
              <p>Edd Joseph</p>
              <p className="text-secondary">
                <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                {blog.updatedAt
                  ? `(Updated ${formatDate(blog.updatedAt)})`
                  : ""}
                {" · "}

                <Views slug={blog.slug} />
              </p>
            </div>
          </div>
        </div>
        {blog.image && (
          <>
            <div className="h-8" />
            <Image
              src={blog.image}
              alt={`${blog.title} blog image`}
              width={700}
              height={350}
              className="-ml-6 w-[calc(100%+48px)] max-w-none md:rounded-lg lg:-ml-20 lg:w-[calc(100%+160px)]"
              priority
            />
          </>
        )}
        <div className="h-16" />
        <div className="prose prose-neutral text-pretty">
          <Mdx code={blog.body.code} />
        </div>
      </article>

      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <Tags tags={blog.tags} />
        </div>
        <div className="flex flex-col gap-6">
          <h2>Contact</h2>
          <p className="max-w-md text-pretty text-secondary">
            Questions or need more details? DM me on {" "}
            <Link href="https://www.instagram.com/eddjosephjr/" underline>
              Instagram,
            </Link>{" "}
            or any of my other social media <Link href="/links" underline>links</Link>.
          </p>
        </div>
        <NewsletterSignupForm contained={false} />
      </div>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let blogViews = await getViewsCount();
  const viewsForBlog = blogViews.find((view) => view.slug === slug);

  incrementViews(slug);

  return (
    <span>
      <FlipNumber>{viewsForBlog?.count || 0}</FlipNumber>
      {viewsForBlog?.count === 1 ? " view" : " views"}
    </span>
  );
}
