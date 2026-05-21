"use client";

import Image from "next/image";
import { useEffect } from "react";
import { PortfolioConfig } from "@/app/types/portfolio-config";

type Props = {
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({ index, onClose, onNext, onPrev }: Props) {
  const item = PortfolioConfig[index];

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/70"
      onClick={onClose}
    >
      <button
        className="absolute left-4 text-white text-4xl select-none px-4 py-2 hover:opacity-60"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
      >
        ‹
      </button>

      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.filepath}
          alt={item.seoDescription}
          width={item.width}
          height={item.height}
          className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain"
          sizes="90vw"
          priority
        />
      </div>

      <button
        className="absolute right-4 text-white text-4xl select-none px-4 py-2 hover:opacity-60"
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
