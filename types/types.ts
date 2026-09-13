import { Tag } from "./tags";

export type PortfolioType = {
  filepath: string;
  width: number;
  height: number;
  imageDescription?: string;
  seoDescription: string;
  hide?: boolean;
};

export type ProjectType = {
  slug: string;
  title: string;
  blurb: string;
  tags: Tag[];
  thumbnail?: PortfolioType; // defaults to images[0] if not set
  images: PortfolioType[];
  // Detail page image layout defaults to pairing images two-per-row.
  // Set true to stack images full-width in a single column instead.
  singleColumn?: boolean;
  hide?: boolean;
};

// Same as ProjectType minus `slug`, since data records are keyed by slug.
export type ProjectData = Omit<ProjectType, "slug">;
