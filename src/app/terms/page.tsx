import React from "react";
import { Typography } from "@/components/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | YRG Ventures",
  description: "Terms of service and contract conditions for YRG Ventures, Bangalore.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#1c1b1a] text-white py-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">
          Terms & Conditions
        </Typography>
        
        <div className="text-white/70 space-y-8 text-sm md:text-base leading-relaxed">
          <p className="text-white/50 text-xs tracking-widest uppercase">
            Last Updated: September 19, 2026
          </p>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;), and YRG Ventures (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of our website as well as any related interior design, architectural, and turnkey services we provide. By accessing the site or engaging our services, you agree that you have read, understood, and agreed to be bound by all of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">2. Interior Design & Turnkey Services</h2>
            <p className="mb-4">
              All architectural, interior design, and execution services are subject to the specific terms detailed in the formal contract signed between the client and YRG Ventures prior to project commencement. 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Initial consultations provide general guidance; binding scopes of work require executed contracts.</li>
              <li>Timelines provided in estimates are projected and may be subject to external variables such as material availability and site conditions.</li>
              <li>Custom furniture production begins only after final design approval and receipt of the mandated advance payment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the website and all structural designs, 3D renders, floor plans, custom furniture blueprints, photographs, and graphics on the site (collectively, the &quot;Content&quot;) are our proprietary property and are protected by Indian copyright and trademark laws. You may not reproduce, distribute, or create derivative works from our architectural and design content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">4. Client Responsibilities</h2>
            <p>
              When engaging us for interior or turnkey services, you agree to provide accurate site dimensions (where applicable), ensure site accessibility during agreed working hours, and secure necessary approvals from local housing societies, municipal bodies, or building management prior to the commencement of civil or interior work.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">5. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and defined following the laws of India. YRG Ventures and yourself irrevocably consent that the courts of Bangalore, Karnataka shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms or the execution of our interior design contracts.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">6. Modifications and Interruptions</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or our service offerings.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
