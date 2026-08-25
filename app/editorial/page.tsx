import Gallery from "@/components/gallery";
import { EditorialConfigV2 } from "@/types/editorial-config-v2";

export default function EditorialPortfolio() {
  return (
    <main className="mt-14">
      <Gallery items={EditorialConfigV2} />
    </main>
  );
}
