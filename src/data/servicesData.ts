export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  heroImage: string;
  detailedDescription: string;
  offeringsTitle?: string;
  offerings: {
    title: string;
    items: string[];
  }[];
  processTitle?: string;
  process?: {
    step: string;
    title: string;
    description: string;
  }[];
  galleryImages: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "interior",
    slug: "interior",
    title: "Interior Design & Execution",
    tagline: "Curated residential and commercial spaces that blend warmth, comfort, and architectural precision.",
    shortDescription: "Our interior design services focus on creating deeply personal sanctuaries that reflect your lifestyle. From concept to execution, we blend aesthetic elegance with functional living.",
    heroImage: "/services/interior/hero.jpg",
    detailedDescription: "YRG Ventures specializes in crafting premium, deeply personal spaces that transcend trends. We believe in architectural precision, working closely with clients to deliver environments that are equally breathtaking and functionally intelligent.",
    offeringsTitle: "Custom Interior Solutions",
    offerings: [
      {
        title: "Residential Interiors",
        items: [
          "Living room interiors",
          "Modular kitchens",
          "Bedrooms & Wardrobes",
          "Dining areas",
          "Pooja rooms",
          "TV units",
          "False ceilings",
          "Lighting solutions",
          "Complete home interiors"
        ]
      },
      {
        title: "Commercial Interiors",
        items: [
          "Office interiors",
          "Retail spaces",
          "Showrooms",
          "Restaurants & cafés",
          "Studios",
          "Commercial establishments"
        ]
      }
    ],
    galleryImages: ["/services/interior/gallery-1.png", "/services/interior/gallery-2.png"]
  },
  {
    id: "furniture",
    slug: "furniture",
    title: "Bespoke Furniture Manufacturing",
    tagline: "Master craftsmanship meets contemporary design for custom furniture tailored to your exact spatial requirements.",
    shortDescription: "Under YRG Ventures, our bespoke furniture service delivers unique, high-quality manufacturing designed specifically for your space and functional needs.",
    heroImage: "/services/furniture/hero.png",
    detailedDescription: "Mass-produced furniture often fails to align with true architectural vision. At YRG Ventures, we manufacture bespoke furniture designed exclusively for your space. Combining exceptional materials with masterful craftsmanship, we deliver pieces that become the defining elements of a room.",
    offeringsTitle: "Furniture Made for Your Space",
    offerings: [
      {
        title: "Furniture Solutions",
        items: [
          "Custom wardrobes",
          "Modular kitchens",
          "TV units",
          "Beds & side tables",
          "Dining tables",
          "Study tables",
          "Office furniture",
          "Storage units",
          "Custom cabinets",
          "Sofas and seating solutions"
        ]
      }
    ],
    galleryImages: ["/services/furniture/gallery-1.png", "/services/furniture/gallery-2.png"]
  },
  {
    id: "construction",
    slug: "construction",
    title: "Construction Solutions",
    tagline: "From Foundation to Finish. Uncompromising structural integrity.",
    shortDescription: "Bringing architectural visions to life with robust building execution for residential and commercial projects.",
    heroImage: "/services/construction/hero.png",
    detailedDescription: "Construction forms the bedrock of our turnkey capabilities. We execute with a strict adherence to safety, quality standards, and engineering precision, ensuring that the foundations we lay are as resilient as the designs they support.",
    offeringsTitle: "From Foundation to Finish",
    offerings: [
      {
        title: "Construction Services",
        items: [
          "Foundation & Structural Work",
          "Masonry & Civil Execution",
          "Plumbing & Electrical Frameworks",
          "Flooring & Tiling",
          "Painting & Finishing",
          "Safety Compliance & Management"
        ]
      }
    ],
    galleryImages: ["/services/construction/gallery-1.png", "/services/construction/gallery-2.png"]
  },
  {
    id: "turnkey-solutions",
    slug: "turnkey-solutions",
    title: "Turnkey Solutions",
    tagline: "One Partner. One Vision. Complete Execution.",
    shortDescription: "End-to-end design and execution, delivering a fully finished space ready for occupancy.",
    heroImage: "/services/turnkey/hero.png",
    detailedDescription: "A fragmented approach often leads to delays, budget overruns, and compromised quality. Our Turnkey Solutions consolidate the entire project lifecycle—from the initial consultation to the final handover—under a single, accountable entity.",
    processTitle: "Complete Execution",
    offerings: [],
    process: [
      {
        step: "01",
        title: "Consultation",
        description: "Initial discovery phase to understand client lifestyle, requirements, and budget constraints."
      },
      {
        step: "02",
        title: "Planning & Design",
        description: "Comprehensive 2D/3D layouts, material selection, and architectural blueprinting."
      },
      {
        step: "03",
        title: "Execution",
        description: "On-site civil work, flooring, electrical, and structural framing begin."
      },
      {
        step: "04",
        title: "Furniture",
        description: "Off-site bespoke manufacturing and on-site carpentry assembly."
      },
      {
        step: "05",
        title: "Finishing",
        description: "Final touches including painting, lighting installation, and deep cleaning."
      },
      {
        step: "06",
        title: "Handover",
        description: "A completely finished, ready-to-live space is handed over to the client."
      }
    ],
    galleryImages: ["/services/turnkey/gallery-1.png", "/services/turnkey/gallery-2.png"]
  }
];
