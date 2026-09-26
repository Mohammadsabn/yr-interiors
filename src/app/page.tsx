import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Leadership } from "@/components/Leadership";

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "YRG Ventures",
            image: "https://yrgventures.in/hero-interior.jpg",
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
      <Leadership />
    </main>
  );
}
