import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Typography } from "@/components/Typography";
import { PremiumImage } from "@/components/PremiumImage";
import { ServiceGallerySlider } from "@/components/ServiceGallerySlider";
import { servicesData } from "@/data/servicesData";

// Generate static params for the 4 service categories
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found - YRG Ventures",
    };
  }

  return {
    title: `${service.title} - YRG Ventures`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} - YRG Ventures`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  let dynamicGalleryImages: string[] = [];
  try {
    const fs = await import('fs');
    const path = await import('path');
    const publicDir = path.join(process.cwd(), 'public', 'services', service.slug);
    
    if (fs.existsSync(publicDir)) {
      const files = fs.readdirSync(publicDir);
      dynamicGalleryImages = files
        .filter(file => file.toLowerCase().startsWith('gallery'))
        .map(file => `/services/${service.slug}/${file}`);
    }
  } catch (e) {
    console.error("Error reading gallery directory", e);
  }

  if (dynamicGalleryImages.length === 0) {
    dynamicGalleryImages = service.galleryImages;
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-end pt-32 pb-16 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PremiumImage 
            src={service.heroImage} 
            alt={service.title}
            containerClassName="w-full h-full"
            priority={true}
          />
          {/* Gradient Overlay for Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 w-full text-white">
          <Typography variant="label" className="text-white/70 uppercase tracking-[0.2em] text-xs mb-4 block">
            Our Services / {service.title}
          </Typography>
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-7xl font-serif max-w-4xl leading-[1.1] tracking-tight">
            {service.tagline}
          </Typography>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-24 lg:py-32 px-6 sm:px-12 lg:px-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Detailed Description */}
          <div className="lg:col-span-5">
            <Typography variant="h2" className="text-3xl lg:text-4xl text-[#1c1b1a] font-serif mb-6">
              The Philosophy
            </Typography>
            <p className="text-neutral-600 text-lg leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* Right: Offerings or Process */}
          <div className="lg:col-span-7">
            {service.offerings && service.offerings.length > 0 && (
              <div className="mb-16">
                <Typography variant="h3" className="text-2xl text-[#1c1b1a] font-serif mb-8 border-b border-neutral-300 pb-4">
                  {service.offeringsTitle}
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {service.offerings.map((offering, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h4 className="text-[#1c1b1a] font-medium tracking-wide uppercase text-xs mb-4">
                        {offering.title}
                      </h4>
                      <ul className="space-y-3">
                        {offering.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-neutral-600 text-sm flex items-start">
                            <span className="mr-2 text-neutral-400">▹</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.process && service.process.length > 0 && (
              <div>
                <Typography variant="h3" className="text-2xl text-[#1c1b1a] font-serif mb-8 border-b border-neutral-300 pb-4">
                  {service.processTitle}
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="text-4xl font-serif text-[#1c1b1a]/20 mb-3">
                        {step.step}
                      </div>
                      <h4 className="text-[#1c1b1a] font-medium tracking-wide uppercase text-xs mb-3">
                        {step.title}
                      </h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ServiceGallerySlider images={dynamicGalleryImages} />

      {/* CTA Block */}
      <section className="w-full py-32 bg-[#F9F8F6] flex justify-center text-center px-6">
        <div className="max-w-3xl flex flex-col items-center">
          <Typography variant="h2" className="text-4xl md:text-6xl font-serif text-[#1c1b1a] mb-6">
            Ready to begin?
          </Typography>
          <p className="text-neutral-600 mb-10 text-lg">
            Let&apos;s discuss how our {service.title.toLowerCase()} can elevate your space.
          </p>
          <a 
            href={`https://wa.me/916361464303?text=Hi,%20I%20am%20interested%20in%20discussing%20a%20project%20regarding%20${encodeURIComponent(service.title)}.%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20YR%20Interiors%20%26%20Furnitures.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1c1b1a] text-white px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-neutral-800 transition-colors rounded-none"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
