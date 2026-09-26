import React from "react";
import { Typography } from "@/components/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | YRG Ventures",
  description: "Privacy Policy and Data Protection guidelines for YRG Ventures, Bangalore.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#1c1b1a] text-white py-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">
          Privacy Policy
        </Typography>
        
        <div className="text-white/70 space-y-8 text-sm md:text-base leading-relaxed">
          <p className="text-white/50 text-xs tracking-widest uppercase">
            Last Updated: September 19, 2026
          </p>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">1. Introduction</h2>
            <p>
              Welcome to YRG Ventures (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs the manner in which we collect, use, maintain, and disclose information collected from users of our website and services, in accordance with the Information Technology Act, 2000 and applicable Indian data protection norms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our interior architecture services, when you participate in activities on the website (such as filling out our contact form or subscribing to our newsletter), or otherwise when you contact us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address for consultation purposes.</li>
              <li><strong>Project Details:</strong> Floor plans, property dimensions, budgets, and design preferences you share with our studio.</li>
              <li><strong>Automatically Collected Data:</strong> IP addresses, browser types, and interaction metrics used to improve website experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              The information we collect is used primarily to provide and improve our interior design services. Specifically, we use your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule and conduct architectural and interior design consultations.</li>
              <li>Send periodic newsletters containing design launches and project highlights (if opted in).</li>
              <li>Respond to inquiries, support requests, and process turnkey contracts.</li>
              <li>Comply with legal obligations under Indian jurisdiction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates for the purposes outlined above. We may disclose your information where legally required to do so in order to comply with applicable law, governmental requests, or a judicial proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">5. Your Rights</h2>
            <p>
              You have the right to request access to the personal information we collect from you, change that information, or delete it in certain circumstances. To request to review, update, or delete your personal information, please contact us at the email address provided below. If you have subscribed to our newsletter, you may unsubscribe at any time using the link provided in the email.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-serif mb-4">6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, you may contact our Bangalore studio at:
            </p>
            <address className="not-italic mt-4 p-6 bg-white/5 border border-white/10 rounded-lg">
              <strong className="text-white block mb-2">YRG Ventures</strong>
              No.15, 3rd cross, Kasthuriba nagar,<br />
              Ashwathkatte road, Bangalore 560026<br />
              Karnataka, India<br /><br />
              Email: <a href="mailto:info@yrventures.in" className="text-white hover:underline">info@yrventures.in</a><br />
              Phone: <a href="tel:+916361464303" className="text-white hover:underline">+91 6361464303</a>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
