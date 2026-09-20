import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { DesignYourSpace } from "@/components/DesignYourSpace";

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "YR Interiors & Furnitures",
            image: "https://yrinteriors.com/hero-interior.jpg",
            telephone: "+91-6361464303",
            address: {
              "@type": "PostalAddress",
              streetAddress: "No.15, 3rd cross, Kasthuriba nagar, Ashwathkatte road",
              addressLocality: "Bangalore",
              postalCode: "560026",
              addressCountry: "IN"
            }
          })
        }}
      />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <DesignYourSpace />
    </main>
  );
}
