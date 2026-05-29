"use client";

import { PortfolioType } from "@/types/types";
import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox({
  items,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  items: PortfolioType[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80"
      onClick={onClose}
    >
      <button
        className="absolute left-4 text-white text-4xl select-none px-4 py-2 
        hover:cursor-pointer hover:opacity-60"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
      >
        ‹
      </button>

      <div
        className="flex flex-col max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.clientDescription && (
          <p className="text-white font-header text-lg text-center mb-4 ">
            {item.clientDescription}
          </p>
        )}
        <Image
          src={item.filepath}
          alt={item.seoDescription}
          width={item.width}
          height={item.height}
          // title={item.clientDescription}
          className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain"
          sizes="90vw"
          priority
        />
      </div>

      <button
        className="absolute right-4 text-white text-4xl select-none
        hover:cursor-pointer px-4 py-2 hover:opacity-60"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
