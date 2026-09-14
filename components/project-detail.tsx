"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "@/components/lightbox";
import { PortfolioType, ProjectType } from "@/types/types";

type IndexedImage = { image: PortfolioType; index: number };

function buildRows(
  images: PortfolioType[],
  singleColumn: boolean,
): IndexedImage[][] {
  if (singleColumn) {
    return images.map((image, index) => [{ image, index }]);
  }

  const rows: IndexedImage[][] = [];
  let i = 0;
  if (images.length % 2 === 1) {
    rows.push([{ image: images[0], index: 0 }]);
    i = 1;
  }
  for (; i < images.length; i += 2) {
    const row: IndexedImage[] = [{ image: images[i], index: i }];
    if (images[i + 1]) {
      row.push({ image: images[i + 1], index: i + 1 });
    }
    rows.push(row);
  }
  return rows;
}

type NeighborProject = { slug: string; title: string };

export default function ProjectDetail({
  project,
  prevProject,
  nextProject,
}: {
  project: ProjectType;
  prevProject: NeighborProject | null;
  nextProject: NeighborProject | null;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const n = project.images.length;
  const rows = buildRows(project.images, project.singleColumn ?? false);

  return (
    <>
      <main className="mt-14 max-w-4xl mx-auto px-4 sm:px-8 pb-16">
        <h1 className="font-header font-semibold text-2xl md:text-3xl text-stone-800">
          {project.title}
        </h1>
        {project.blurb && (
          <p className="font-body text-stone-600 mt-2">{project.blurb}</p>
        )}

        <div className="flex flex-col gap-8 mt-8">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={row.length === 2 ? "flex gap-8" : undefined}
            >
              {row.map(({ image, index }) => (
                <div
                  key={image.filepath}
                  className={row.length === 2 ? "flex-1" : ""}
                >
                  <div
                    className="cursor-zoom-in rounded-md transition-all hover:shadow-md"
                    onClick={() => setSelected(index)}
                  >
                    <Image
                      src={image.filepath}
                      alt={image.seoDescription}
                      width={image.width}
                      height={image.height}
                      title={image.imageDescription}
                      className="w-full h-auto block rounded-md"
                    />
                  </div>
                  {image.imageDescription && (
                    <p className="text-stone-700 font-header font-medium text-xs md:text-md text-left mt-2 ml-1">
                      {image.imageDescription}
                    </p>
                  )}
                </div>
              ))}
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

      {/* next and previous project nav buttons */}
      {(prevProject || nextProject) && (
        <div className="flex flex-col sm:flex-row justify-between mt-32 mb-16">
          {prevProject && (
            <Link
              href={`/${prevProject.slug}`}
              className="hover:opacity-60 flex flex-col gap-1 items-start justify-center px-8 py-4 group "
            >
              <span className="font-header text-xs uppercase tracking-wide text-stone-400  ">
                ← Previous
              </span>
              <span className="inline-block font-header text-md md:text-xl font-semibold text-stone-800  transition-all duration-200 group-hover:underline">
                {prevProject.title}
              </span>
            </Link>
          )}
          {nextProject && (
            <Link
              href={`/${nextProject.slug}`}
              className="hover:opacity-60 flex flex-col gap-1 items-end justify-center text-right px-8 py-4 group ml-auto"
            >
              <span className="font-header text-xs uppercase tracking-wide text-stone-400 transition-opacity group-hover:opacity-80">
                Next →
              </span>
              <span className="inline-block font-header text-md md:text-xl font-semibold text-stone-800  transition-all duration-200  group-hover:underline">
                {nextProject.title}
              </span>
            </Link>
          )}
        </div>
      )}
    </>
  );
}
