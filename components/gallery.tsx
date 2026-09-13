import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/types/types";

const DEFAULT_COLUMNS = 3;

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

  const columns = Array.from({ length: numCols }, (_, colIdx) =>
    visible.filter((_, idx) => idx % numCols === colIdx),
  );

  return (
    <>
      <div className="px-4 sm:px-8 lg:px-16 mx-auto hidden sm:flex gap-4 md:gap-6 p-4">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-8">
            {col.map((project) => (
              <Link key={project.slug} href={`${basePath}/${project.slug}`}>
                <div className="cursor-pointer rounded-md transition-all hover:shadow-md hover:scale-101">
                  <Image
                    src={project.images[0].filepath}
                    alt={project.images[0].seoDescription}
                    width={project.images[0].width}
                    height={project.images[0].height}
                    title={project.title}
                    className="w-full h-auto block rounded-md"
                  />
                </div>
                <p className="text-stone-700 font-header font-medium text-xs md:text-md text-left mt-2 ml-1 ">
                  {project.title}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-6 p-4 sm:hidden">
        {visible.map((project) => (
          <Link key={project.slug} href={`${basePath}/${project.slug}`}>
            <div className="rounded-md">
              <Image
                src={project.images[0].filepath}
                alt={project.images[0].seoDescription}
                width={project.images[0].width}
                height={project.images[0].height}
                title={project.title}
                className="w-full h-auto block rounded-md"
                sizes="100vw"
              />
            </div>
            <p className="text-stone-700 font-header font-medium text-xs md:text-md text-left mt-2 ml-1 ">
              {project.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
