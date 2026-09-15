import { ReactNode } from "react";
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
  blurb: ReactNode;
  artDirector?: string;
  tags: Tag[];
  thumbnail?: PortfolioType; // defaults to images[0] if not set
  images: PortfolioType[];
  singleColumn?: boolean; // defaults to false; i.e. double column
  hide?: boolean;
};

// same as ProjectType minus `slug`
export type ProjectData = Omit<ProjectType, "slug">;
