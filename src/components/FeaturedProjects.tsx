"use client";

import React, { useEffect, useRef } from "react";
import { Typography } from "@/components/Typography";
import { PremiumImage } from "@/components/PremiumImage";
import { projects } from "@/data/projects";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const featuredProjects = projects.filter((p) => p.featured);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".project-row") as HTMLElement[];
      
      rows.forEach((row) => {
        const imageContainer = row.querySelector(".project-image-container");
        const imageAsset = row.querySelector(".project-image-asset");

        if (imageContainer && imageAsset) {
          gsap.fromTo(
            imageContainer,
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.5,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
              }
            }
          );

          gsap.fromTo(
            imageAsset,
            { scale: 1.15 },
            {
              scale: 1,
              duration: 1.5,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="w-full bg-background pb-16 sm:pb-32 lg:pb-48 pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <Typography variant="label" className="block text-neutral-500 uppercase tracking-[0.2em] text-xs mb-12 sm:mb-16 lg:mb-32 px-6 sm:px-12 lg:px-24">
          Selected Works
        </Typography>

        <div className="flex flex-col">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={project.id} 
                className="project-row grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-24 lg:mb-32 last:mb-0 px-6 sm:px-12 lg:px-24"
              >
                {/* Image Column */}
                <div 
                  className={`w-full order-1 ${
                    isEven 
                      ? "lg:col-span-7 lg:col-start-1 lg:order-1" 
                      : "lg:col-span-7 lg:col-start-6 lg:order-2"
                  }`}
                >
                  <Link href={`/projects/${project.slug}`} className="block project-image-container group relative w-full aspect-[4/3] overflow-hidden">
                    <div className="project-image-asset absolute inset-0 w-full h-full">
                      <PremiumImage 
                        src={project.coverImage} 
                        alt={project.title}
                        containerClassName="w-full h-full"
                        className="group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </Link>
                </div>

                {/* Text Column */}
                <div 
                  className={`flex flex-col justify-center order-2 ${
                    isEven 
                      ? "lg:col-span-4 lg:col-start-9 lg:order-2" 
                      : "lg:col-span-4 lg:col-start-1 lg:order-1"
                  }`}
                >
                  <Typography variant="label" className="text-neutral-500 uppercase tracking-[0.2em] text-xs mb-4">
                    {project.category} / {project.year}
                  </Typography>
                  <Typography variant="h3" className="text-4xl lg:text-5xl leading-[1.1] text-foreground tracking-tight mb-6">
                    {project.title}
                  </Typography>
                  <div className="mt-4">
                    <Link 
                      href={`/projects/${project.slug}`} 
                      className="inline-block relative group overflow-hidden pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-foreground after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.19,1,0.22,1)] text-xs tracking-[0.2em] uppercase font-medium"
                    >
                      View Project ↗
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

