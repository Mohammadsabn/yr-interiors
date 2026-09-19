export type ProjectCategory = "Interior" | "Furniture" | "Construction" | "Event";

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  year: string | number;
  client?: string;
  shortDescription: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
}

