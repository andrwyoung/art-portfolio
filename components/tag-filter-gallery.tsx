"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Gallery from "@/components/gallery";
import { ProjectType } from "@/types/types";
import { TAGS, Tag } from "@/types/tags";

export default function TagFilterGallery({
  items,
}: {
  items: ProjectType[];
}) {
  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const selectTag = (tag: Tag) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  const visible =
    activeTag === null
      ? items
      : items.filter((item) => item.tags.includes(activeTag));

  const tagCounts = Object.fromEntries(
    TAGS.map((tag) => [
      tag,
      items.filter((item) => item.tags.includes(tag)).length,
    ]),
  ) as Record<Tag, number>;

  return (
    <>
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2 px-4 py-4">
          <button
            onClick={() => setActiveTag(null)}
            className={`inline-flex items-center gap-1.5 font-header text-sm px-3.5 py-1.5 rounded-full border transition-colors cursor-pointer ${
              activeTag === null
                ? "bg-stone-800 text-white border-stone-800"
                : "text-stone-600 border-stone-300 hover:border-stone-500 hover:text-stone-900"
            }`}
          >
            {activeTag === null && <FaCheck size={10} />}
            All
            <span className="opacity-60">({items.length})</span>
          </button>
          {TAGS.map((tag) => {
            const active = activeTag === tag;
            const count = tagCounts[tag];
            if (count === 0) return null;
            return (
              <button
                key={tag}
                onClick={() => selectTag(tag)}
                className={`inline-flex items-center gap-1.5 font-header text-sm px-3.5 py-1.5 rounded-full border capitalize transition-colors cursor-pointer ${
                  active
                    ? "bg-stone-800 text-white border-stone-800"
                    : "text-stone-600 border-stone-300 hover:border-stone-500 hover:text-stone-900"
                }`}
              >
                {active && <FaCheck size={10} />}
                {tag}
                <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-24 px-4 text-center">
          <p className="font-header text-stone-500">
            No projects match this filter.
          </p>
          <button
            onClick={() => setActiveTag(null)}
            className="font-header text-sm text-stone-600 underline hover:text-stone-900 cursor-pointer"
          >
            Clear filter
          </button>
        </div>
      ) : (
        <Gallery basePath="" items={visible} />
      )}
    </>
  );
}
