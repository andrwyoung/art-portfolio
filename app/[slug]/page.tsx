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
  const project = AllProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectDetail project={project} backHref="/" />;
}
