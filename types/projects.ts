import { ProjectOrder } from "./project-order";
import { ProjectDataBySlug } from "./project-data";
import { ProjectType } from "./types";

export const AllProjects: ProjectType[] = ProjectOrder.map((slug) => {
  const data = ProjectDataBySlug[slug];
  if (!data) {
    throw new Error(`No project data found for slug "${slug}"`);
  }
  return { slug, ...data };
});
