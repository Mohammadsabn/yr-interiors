import React from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { PremiumImage } from "@/components/PremiumImage";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen">
      <Section spacing="lg" className="bg-neutral-50">
        <Container>
          <Typography variant="h1" className="mb-4">Design System</Typography>
          <Typography variant="p" className="max-w-2xl text-neutral-600">
            This verification page demonstrates the foundational design tokens, typography, and base components for YR Interiors & Furnitures.
          </Typography>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <Typography variant="h2" className="mb-8 border-b border-neutral-200 pb-4">Typography</Typography>
          
          <div className="space-y-8">
            <div>
              <Typography variant="caption" className="block mb-2">h1. Playfair Display</Typography>
              <Typography variant="h1">Premium Editorial</Typography>
            </div>
            
            <div>
              <Typography variant="caption" className="block mb-2">h2. Playfair Display</Typography>
              <Typography variant="h2">Refined Architectural Space</Typography>
            </div>
            
            <div>
              <Typography variant="caption" className="block mb-2">h3. Playfair Display</Typography>
              <Typography variant="h3">Curated Collections</Typography>
            </div>
            
            <div>
              <Typography variant="caption" className="block mb-2">h4. Inter</Typography>
              <Typography variant="h4">Warm Alabaster Tones</Typography>
            </div>
            
            <div>
              <Typography variant="caption" className="block mb-2">h5. Inter</Typography>
              <Typography variant="h5">Deep Charcoal Accents</Typography>
            </div>
            
            <div>
              <Typography variant="caption" className="block mb-2">h6. Inter</Typography>
              <Typography variant="h6">Minimalist Approach</Typography>
            </div>
            
            <div className="max-w-3xl">
              <Typography variant="caption" className="block mb-2">p. Inter (Body Text)</Typography>
              <Typography variant="p">
                We believe that a well-designed space has the power to transform daily life. 
                Our approach to interior design combines architectural precision with curated 
                warmth, creating environments that feel both aspirational and deeply personal. 
                Through a careful selection of materials, light, and form, we craft spaces 
                that endure beyond passing trends.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-neutral-50">
        <Container>
          <Typography variant="h2" className="mb-8 border-b border-neutral-200 pb-4">Interactive Elements</Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Typography variant="h4" className="mb-6">Buttons</Typography>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>
            
            <div>
              <Typography variant="h4" className="mb-6">Links</Typography>
              <div className="flex flex-wrap gap-6 items-center">
                <Link href="#" variant="default">Default Link</Link>
                <Link href="#" variant="underline">Underlined Link</Link>
                <Link href="#" variant="button">Button Link</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <Typography variant="h2" className="mb-8 border-b border-neutral-200 pb-4">Premium Image Component</Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Typography variant="h5">Portrait (3:4)</Typography>
              <PremiumImage 
                src="/placeholder.svg" 
                alt="Placeholder portrait" 
                containerClassName="aspect-[3/4]"
              />
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <Typography variant="h5">Landscape (4:3)</Typography>
                <PremiumImage 
                  src="/placeholder.svg" 
                  alt="Placeholder landscape" 
                  containerClassName="aspect-[4/3]"
                />
              </div>
              
              <div className="space-y-4">
                <Typography variant="h5">Freeform (Container Driven)</Typography>
                <div className="h-48 w-full border border-neutral-200">
                  <PremiumImage 
                    src="/placeholder.svg" 
                    alt="Placeholder freeform" 
                    containerClassName="h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
