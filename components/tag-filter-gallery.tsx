"use client";

import { useState } from "react";
import Gallery from "@/components/gallery";
import { ProjectType } from "@/types/types";
import { TAGS, Tag } from "@/types/tags";

export default function TagFilterGallery({ items }: { items: ProjectType[] }) {
  const [activeTags, setActiveTags] = useState<Tag[]>([]);

  const toggleTag = (tag: Tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const visible =
    activeTags.length === 0
      ? items
      : items.filter((item) => item.tags.some((t) => activeTags.includes(t)));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 px-4 mb-4">
        <button
          onClick={() => setActiveTags([])}
          className={`font-header text-sm px-4 py-1.5 rounded-full border transition-colors ${
            activeTags.length === 0
              ? "bg-stone-800 text-white border-stone-800"
              : "text-stone-600 border-stone-300 hover:border-stone-500"
          }`}
        >
          All
        </button>
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`font-header text-sm px-4 py-1.5 rounded-full border capitalize transition-colors ${
              activeTags.includes(tag)
                ? "bg-stone-800 text-white border-stone-800"
                : "text-stone-600 border-stone-300 hover:border-stone-500"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <Gallery basePath="" items={visible} numCols={4} />
    </>
  );
}
