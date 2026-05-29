import { DEFAULT_PAGE } from "@/types/settings";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(DEFAULT_PAGE);
}
