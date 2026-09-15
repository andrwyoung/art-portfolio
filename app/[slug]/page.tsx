import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project-detail";
import { AllProjects } from "@/types/projects";
import { TAGS, Tag } from "@/types/tags";

export function generateStaticParams() {
  return AllProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = AllProjects.find((p) => p.slug === slug);

  if (!project) return {};

  const thumbnail = project.thumbnail ?? project.images[0];
  const description =
    (typeof project.blurb === "string" ? project.blurb : "") ||
    thumbnail.seoDescription;
  const title = `Andrew Yong - ${project.title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: thumbnail.filepath }],
    },
  };
}

export default async function ProjectPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tag?: string }>;
}) {
  const { slug } = await params;
  const { tag: rawTag } = await searchParams;

  const project = AllProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const activeTag = TAGS.includes(rawTag as Tag) ? (rawTag as Tag) : null;

  // Only filter to the active tag's subset if the current project is
  // actually part of it (guards against stale/mismatched ?tag= links).
  const scoped =
    activeTag && project.tags.includes(activeTag)
      ? AllProjects.filter((p) => p.tags.includes(activeTag))
      : AllProjects;

  const index = scoped.findIndex((p) => p.slug === slug);
  const prevProject = index > 0 ? scoped[index - 1] : null;
  const nextProject = index < scoped.length - 1 ? scoped[index + 1] : null;

  return (
    <ProjectDetail
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
      activeTag={scoped === AllProjects ? null : activeTag}
    />
  );
}
