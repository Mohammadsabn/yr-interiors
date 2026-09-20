export interface Palette {
  id: string;
  name: string;
  description: string;
  hex: string;
  image: string;
}

export type CategoryKey = 'residential' | 'corporate' | 'retail';

export const configuratorData: Record<CategoryKey, Palette[]> = {
  residential: [
    { id: 'res-beige', name: 'Ivory Beige', description: 'Warm organic neutrals for timeless architectural calm.', hex: '#E5DFD5', image: '/hero-interior.jpg' },
    { id: 'res-sage', name: 'Sage Green', description: 'Earthy botanical tones inspired by natural landscapes.', hex: '#9CA89E', image: '/hero-interior-2.jpg' },
    { id: 'res-terracotta', name: 'Terracotta', description: 'Rich clay warmth bringing grounded depth to living spaces.', hex: '#C47B62', image: '/hero-interior-3.jpg' },
  ],
  corporate: [
    { id: 'corp-charcoal', name: 'Dark Charcoal', description: 'Bold, immersive industrial refinement for executive spaces.', hex: '#2C2B2A', image: '/project-2.png' },
    { id: 'corp-navy', name: 'Midnight Navy', description: 'Sophisticated deep blues for dramatic modern luxury.', hex: '#2A3C4E', image: '/project-1.png' },
    { id: 'corp-grey', name: 'Executive Grey', description: 'Clean, professional slate grey for focused productivity.', hex: '#6b7280', image: '/hero-interior.jpg' },
  ],
  retail: [
    { id: 'ret-gold', name: 'Luxury Gold', description: 'Warm metallic accents designed to elevate premium retail environments.', hex: '#D4AF37', image: '/hero-interior-2.jpg' },
    { id: 'ret-white', name: 'Minimalist White', description: 'Pristine, gallery-like brightness that lets products take center stage.', hex: '#F9F8F6', image: '/hero-interior-3.jpg' },
    { id: 'ret-terracotta', name: 'Warm Terracotta', description: 'Inviting, earthy warmth to create a boutique atmosphere.', hex: '#C47B62', image: '/project-1.png' },
  ]
};
