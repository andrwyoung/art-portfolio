import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project-detail";
import { AllProjects } from "@/types/projects";

export function generateStaticParams() {
  return AllProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = AllProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectDetail project={project} backHref="/" />;
}
