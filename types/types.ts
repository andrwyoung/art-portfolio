import { Tag } from "./tags";

export type PortfolioType = {
  filepath: string;
  width: number;
  height: number;
  clientDescription: string;
  seoDescription: string;
  hide?: boolean;
};

export type ProjectType = {
  slug: string;
  title: string;
  blurb: string;
  tags: Tag[];
  images: PortfolioType[]; // first image is used as the grid thumbnail
  hide?: boolean;
};

// Same as ProjectType minus `slug`, since data records are keyed by slug.
export type ProjectData = Omit<ProjectType, "slug">;
