import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Typography } from "@/components/Typography";
import Link from "next/link";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | YRG Ventures`,
      description: project.shortDescription,
      images: [{ url: project.coverImage }],
    }
  };
}

import { PremiumImage } from "@/components/PremiumImage";
import { Header } from "@/components/Header";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projectIndex = projects.findIndex(p => p.slug === resolvedParams.slug);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <Header dark={false} />

      {/* Full-Bleed Hero Image */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden z-0">
        <PremiumImage 
          src={project.coverImage} 
          alt={project.title}
          containerClassName="w-full h-full"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
      </div>

      {/* Header & Description */}
      <div className="bg-[#f9f8f6] py-16 px-4 lg:px-12 max-w-7xl mx-auto w-full z-20 -mt-8 relative">
        <Typography variant="label" className="text-neutral-500 uppercase tracking-[0.2em] text-xs mb-6 block">
          {project.category} / {project.year}
        </Typography>
        <Typography variant="h1" className="text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] tracking-tight mb-8 text-[#1c1b1a]">
          {project.title}
        </Typography>
        <Typography variant="p" className="max-w-2xl text-xl text-neutral-600">
          {project.shortDescription}
        </Typography>
      </div>

      {/* Editorial Image Gallery */}
      <div className="w-full flex-1">
        <ProjectGallery images={project.gallery} />
      </div>

      {/* Next Project Navigation Loop */}
      <div className="flex flex-col items-center justify-center text-center py-32 px-6 bg-[#1c1b1a] text-[#f9f8f6] w-full">
        <Typography variant="label" className="text-white/50 uppercase tracking-[0.2em] text-xs mb-6 block">
          Next Project
        </Typography>
        <Typography variant="h2" className="text-5xl lg:text-7xl leading-[1.1] tracking-tight mb-12 max-w-4xl">
          {nextProject.title}
        </Typography>
        <Link 
          href={`/projects/${nextProject.slug}`}
          className="inline-flex w-auto rounded-none border border-[#f9f8f6] text-[#f9f8f6] bg-transparent px-8 py-4 h-auto text-xs tracking-[0.2em] font-medium uppercase hover:bg-white/10 transition-colors"
        >
          View Project ↗
        </Link>
      </div>
    </div>
  );
}

