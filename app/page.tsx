import { Suspense } from "react";
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
    </main>
  );
}
