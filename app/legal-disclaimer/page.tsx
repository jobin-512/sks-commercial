import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

const LegalDisclaimer = () => (
  <main className={`max-w-3xl mx-auto px-4 py-12 ${roboto.className}`}>
    <h1 className="text-3xl font-bold mb-6">Legal Disclaimer</h1>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Disclaimer for SKS TECH SOLUTION</h2>
      <p className="mb-4">At SKS Tech Solution, we believe in being honest and transparent with our visitors. The information you'll find on our website is shared with good intentions and meant for general knowledge purposes only. We always attempt our level best to keep everything accurate and updated, but we do not guarantee or assure the complete accuracy, reliability, or completeness of information on this site.</p>
      <p className="mb-4">Any action you choose to take after reading the information presented on this website is entirely at your own risk. SKS Tech Solution will not be responsible for any kind of losses or damages that may occur from using our website.</p>
      <p className="mb-4">We've also included links to other websites for your convenience. While we aim to only connect you to useful, trusted, and ethical websites, we honestly can't control what happens on those sites. Content and owners of these external sites may change without any notice. So, sometimes the links may become outdated or not as trustworthy as they once were. Please know, just because we have shared a link, doesn't mean we personally recommend every single thing found on that site.</p>
      <p className="mb-4">Also, after you leave www.skstechsolution.com, we request that you recall that other websites have their own terms of use and privacy policies, which are not in our control. Therefore, we recommend that you visit the privacy policies and terms of any site you go to, particularly before sending your personal information or entering into any business transaction with them.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Consent</h2>
      <p className="mb-4">Continuing to browse our site means that you agree to our disclaimer and accept its terms.</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Updates</h2>
      <p>We retain the right to update, modify, or amend this disclaimer at any time. If we do update, modify, or amend this disclaimer, we will clearly designate the changes here so that you are aware of any changes.</p>
    </section>
  </main>
);

export default LegalDisclaimer; 