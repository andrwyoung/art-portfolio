"use client";

import Image from "next/image";
import { useState } from "react";
import { PortfolioConfig } from "@/app/types/portfolio-config";
import Lightbox from "@/components/lightbox";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const n = PortfolioConfig.length;

  return (
    <>
      <div className="max-w-6xl mx-auto columns-1 sm:columns-3 gap-4 p-4">
        {PortfolioConfig.map((item, i) => (
          <div
            key={item.filepath}
            className="break-inside-avoid mb-4 cursor-zoom-in rounded-md transition-all 
            hover:shadow-md hover:scale-101"
            onClick={() => { if (window.innerWidth >= 640) setSelected(i); }}
          >
            <Image
              src={item.filepath}
              alt={item.seoDescription}
              width={item.width}
              height={item.height}
              title={item.clientDescription}
              className="w-full h-auto block rounded-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {selected !== null && (
        <Lightbox
          index={selected}
          onClose={() => setSelected(null)}
          onNext={() => setSelected((selected + 1) % n)}
          onPrev={() => setSelected((selected - 1 + n) % n)}
        />
      )}
    </>
  );
}
