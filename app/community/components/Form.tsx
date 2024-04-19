"use client";

import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import * as Avatar from "@radix-ui/react-avatar";
import { saveCommunityPost } from "@/app/db/actions";

export default function MobileForm() {
  const { data: session } = useSession();
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");

  return (
    <form
      className="-mx-3 flex items-start justify-between gap-3 rounded-md border border-secondary bg-primary px-3 py-1.5"
      ref={formRef}
      action={async (formData) => {
        await saveCommunityPost(formData);
        formRef.current?.reset();
      }}
    >
      <input type="hidden" name="author_id" value={session?.user?.id || ""} />
      <input type="hidden" name="topic_id" value={1} />
      <div className="mt-0.5 w-fit">
        <MyAvatar />
      </div>

      <textarea
        required
        name="content"
        placeholder="what's on your mind?"
        className="h-auto max-h-52 flex-1 resize-none bg-inherit py-3 leading-tight text-primary outline-none placeholder:text-tertiary"
        rows={3}
        maxLength={280}
        onInput={(event) => {
          event.currentTarget.style.height = "auto";
          event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;
        }}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="mt-1.5 flex h-fit w-fit items-center justify-center rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-primary disabled:font-normal disabled:text-tertiary"
        type="submit"
        disabled={name === ""}
      >
        Share
      </button>
    </form>
  );
}

function MyAvatar() {
  const { data: session } = useSession();

  return (
    <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full border border-secondary bg-secondary align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={session?.user?.image ?? ""}
        alt="Avatar image"
      />
      <Avatar.Fallback
        className="flex h-full w-full items-center justify-center border border-secondary bg-secondary text-sm font-medium text-primary"
        delayMs={600}
      >
        {session?.user?.name?.slice(0, 2) ?? ""}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}