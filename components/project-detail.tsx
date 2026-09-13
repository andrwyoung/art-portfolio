"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "@/components/lightbox";
import { ProjectType } from "@/types/types";

export default function ProjectDetail({
  project,
  backHref,
}: {
  project: ProjectType;
  backHref: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const n = project.images.length;

  return (
    <main className="mt-14 max-w-4xl mx-auto px-4 sm:px-8 pb-16">
      <Link
        href={backHref}
        className="font-header text-sm text-stone-500 hover:text-stone-900"
      >
        ← Back
      </Link>

      <h1 className="font-header font-semibold text-2xl md:text-3xl text-stone-800 mt-4">
        {project.title}
      </h1>
      {project.blurb && (
        <p className="font-body text-stone-600 mt-2">{project.blurb}</p>
      )}

      <div className="flex flex-col gap-8 mt-8">
        {project.images.map((image, i) => (
          <div
            key={image.filepath}
            className="cursor-zoom-in rounded-md transition-all hover:shadow-md"
            onClick={() => setSelected(i)}
          >
            <Image
              src={image.filepath}
              alt={image.seoDescription}
              width={image.width}
              height={image.height}
              title={image.clientDescription}
              className="w-full h-auto block rounded-md"
            />
          </div>
        ))}
      </div>

      {selected !== null && (
        <Lightbox
          items={project.images}
          index={selected}
          onClose={() => setSelected(null)}
          onNext={() => setSelected((selected + 1) % n)}
          onPrev={() => setSelected((selected - 1 + n) % n)}
        />
      )}
    </main>
  );
}
