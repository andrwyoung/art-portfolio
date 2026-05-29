"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/lightbox";
import { PortfolioType } from "@/types/types";

const DEFAULT_COLUMNS = 3;

export default function Gallery({
  items,
  numCols = DEFAULT_COLUMNS,
}: {
  items: PortfolioType[];
  numCols?: number;
}) {
  const visible = items.filter((item) => !item.hide);
  const [selected, setSelected] = useState<number | null>(null);
  const n = visible.length;

  const columns = Array.from({ length: numCols }, (_, colIdx) =>
    visible
      .map((item, i) => ({ item, i }))
      .filter((_, idx) => idx % numCols === colIdx),
  );

  return (
    <>
      <div className="max-w-7xl mx-auto hidden sm:flex gap-4 p-4">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-4">
            {col.map(({ item, i }) => (
              <div
                key={item.filepath}
                className="cursor-zoom-in rounded-md transition-all hover:shadow-md hover:scale-101"
                onClick={() => setSelected(i)}
              >
                <Image
                  src={item.filepath}
                  alt={item.seoDescription}
                  width={item.width}
                  height={item.height}
                  title={item.clientDescription}
                  className="w-full h-auto block rounded-md"
                  // sizes="33vw"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-4 p-4 sm:hidden">
        {visible.map((item) => (
          <div key={item.filepath} className="rounded-md">
            <Image
              src={item.filepath}
              alt={item.seoDescription}
              width={item.width}
              height={item.height}
              title={item.clientDescription}
              className="w-full h-auto block rounded-md"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {selected !== null && (
        <Lightbox
          items={visible}
          index={selected}
          onClose={() => setSelected(null)}
          onNext={() => setSelected((selected + 1) % n)}
          onPrev={() => setSelected((selected - 1 + n) % n)}
        />
      )}
    </>
  );
}
