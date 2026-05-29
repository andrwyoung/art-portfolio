import Gallery from "@/components/gallery";
import { PublishingConfig } from "@/types/publishing-config";

export default function PublishingPortfolio() {
  return (
    <main className="mt-14">
      <Gallery numCols={2} items={PublishingConfig} />
    </main>
  );
}
