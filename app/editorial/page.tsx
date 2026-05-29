import Gallery from "@/components/gallery";
import { EditorialConfig } from "../../types/editorial-config";

export default function EditorialPortfolio() {
  return (
    <main className="mt-14">
      <Gallery items={EditorialConfig} />
    </main>
  );
}
