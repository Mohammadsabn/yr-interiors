import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-01",
    title: "The Alabaster Residence",
    slug: "alabaster-residence",
    category: "Interior",
    location: "Mumbai",
    year: 2024,
    client: "Private Client",
    shortDescription: "A luxurious minimalist apartment blending organic textures with sharp contemporary lines.",
    coverImage: "/project-1.png",
    gallery: ["/project-1.png", "/project-2.png", "/project-3.png"],
    featured: true
  },
  {
    id: "project-02",
    title: "Nexus Corporate HQ",
    slug: "nexus-corporate-hq",
    category: "Interior",
    location: "Pune",
    year: 2023,
    client: "Nexus Technologies",
    shortDescription: "A dynamic 15,000 sq ft workspace designed to foster collaboration and brand identity.",
    coverImage: "/project-2.png",
    gallery: ["/project-2.png", "/project-3.png", "/project-1.png"],
    featured: true
  },
  {
    id: "project-03",
    title: "The Oakwood Collection",
    slug: "oakwood-collection",
    category: "Furniture",
    location: "Studio",
    year: 2024,
    shortDescription: "A bespoke collection of solid oak furniture pieces designed for an exclusive boutique hotel.",
    coverImage: "/project-3.png",
    gallery: ["/project-3.png", "/project-1.png", "/project-2.png"],
    featured: true
  },
  {
    id: "project-04",
    title: "Aura Retail Flagship",
    slug: "aura-retail-flagship",
    category: "Construction",
    location: "Bangalore",
    year: 2022,
    client: "Aura Lifestyle",
    shortDescription: "Ground-up construction and interior fit-out for a flagship luxury retail destination.",
    coverImage: "/project-1.png",
    gallery: ["/project-1.png", "/project-2.png", "/project-3.png"],
    featured: false
  }
];

