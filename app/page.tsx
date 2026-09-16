import { Suspense } from "react";
import Link from "next/link";
import TagFilterGallery from "@/components/tag-filter-gallery";
import { AllProjects } from "@/types/projects";

export default function Home() {
  return (
    <main className="mt-14">
      <h1 className="sr-only">
        Andrew Yong — Illustration Portfolio for Editorial, Publishing, and
        Advertising
      </h1>
      <Suspense>
        <TagFilterGallery items={AllProjects} />
      </Suspense>

      <section className="flex flex-col items-center gap-4 text-center px-8 py-16 mt-2 mb-16">
        <h2 className="font-header text-xl font-semibold tracking-wide">
          Interested in working together?
        </h2>
        <Link
          href="/contact"
          className="font-header font-semibold tracking-wide text-stone-50 bg-stone-800 rounded-xl px-6 py-3 hover:bg-stone-700 transition-colors"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
