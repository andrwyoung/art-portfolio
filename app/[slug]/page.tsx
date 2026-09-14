import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project-detail";
import { AllProjects } from "@/types/projects";

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
  const description = project.blurb || thumbnail.seoDescription;
  const title = `${project.title} — Andrew Yong`;

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
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = AllProjects.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const project = AllProjects[index];
  const prevProject = index > 0 ? AllProjects[index - 1] : null;
  const nextProject =
    index < AllProjects.length - 1 ? AllProjects[index + 1] : null;

  return (
    <ProjectDetail
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
