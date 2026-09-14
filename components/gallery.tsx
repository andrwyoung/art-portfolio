import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/types/types";
import { FaImage } from "react-icons/fa6";

const DEFAULT_COLUMNS = 3;

function MultiImageIndicator({ count }: { count: number }) {
  if (count <= 1) return null;
  return (
    <span className="inline-flex items-center gap-1 text-stone-500/80 ml-auto">
      <FaImage size={12} />
      <span className="text-xs font-header font-semibold leading-none">
        {count}
      </span>
    </span>
  );
}

// estimated allowance for caption height
const CAPTION_HEIGHT = 0.12;

// greedily builds columns
function packColumns(items: ProjectType[], numCols: number): ProjectType[][] {
  const columns: ProjectType[][] = Array.from({ length: numCols }, () => []);
  const heights = new Array(numCols).fill(0);

  for (const item of items) {
    const thumbnail = item.thumbnail ?? item.images[0];
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(item);
    heights[shortest] += thumbnail.height / thumbnail.width + CAPTION_HEIGHT;
  }

  return columns;
}

export default function Gallery({
  items,
  numCols = DEFAULT_COLUMNS,
  basePath,
}: {
  items: ProjectType[];
  numCols?: number;
  basePath: string;
}) {
  const visible = items.filter((item) => !item.hide);

  const columns = packColumns(visible, numCols);

  return (
    <>
      <div className="px-4 sm:px-8 lg:px-16 mx-auto hidden sm:flex gap-4 md:gap-6 p-4 mb-24">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-8">
            {col.map((project) => {
              const thumbnail = project.thumbnail ?? project.images[0];
              return (
                <Link key={project.slug} href={`${basePath}/${project.slug}`}>
                  <div className="cursor-pointer rounded-md transition-all hover:shadow-md hover:scale-101">
                    <Image
                      src={thumbnail.filepath}
                      alt={thumbnail.seoDescription}
                      width={thumbnail.width}
                      height={thumbnail.height}
                      title={project.title}
                      className="w-full h-auto block rounded-md"
                    />
                  </div>
                  <p className="flex items-center text-stone-700 font-header font-medium text-xs md:text-md text-left mt-2 ml-1 mr-1">
                    {project.title}
                    <MultiImageIndicator count={project.images.length} />
                  </p>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-6 p-4 sm:hidden mb-18">
        {visible.map((project) => {
          const thumbnail = project.thumbnail ?? project.images[0];
          return (
            <Link key={project.slug} href={`${basePath}/${project.slug}`}>
              <div className="rounded-md">
                <Image
                  src={thumbnail.filepath}
                  alt={thumbnail.seoDescription}
                  width={thumbnail.width}
                  height={thumbnail.height}
                  title={project.title}
                  className="w-full h-auto block rounded-md"
                  sizes="100vw"
                />
              </div>
              <p className="flex items-center text-stone-700 font-header font-medium text-xs md:text-md text-left mt-2 ml-1 mr-1">
                {project.title}
                <MultiImageIndicator count={project.images.length} />
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
