import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

const PrivacyPolicy = () => (
  <main className={`max-w-3xl mx-auto px-4 py-12 ${roboto.className}`}>
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Details We Collect From You</h2>
      <p>When you register, order, email, or call us, we might request your name, email, payment information, or other information. We use these to finish making your request and enhance your experience. We only use the information that's needed.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Collecting Personally Identifiable Information</h2>
      <p>We gather, store, and utilize the type of personal information that assists us in conducting our services accurately. This may be the information you supply when you register on our site or subscribe to our services. Stuff such as your first and last name, email address, address, phone number, designation, company name, and even URLs of your social profiles, such as LinkedIn or Facebook, may be disclosed to us at the time of sign-up or thereafter. We may also keep track of information regarding your activity, such as which pages you view, for how long you remain on them, how many times you return, etc. Some of this information enables us to make our website or apps better.</p>
      <p>When you talk to our support or service representatives, they can gather other information to assist in posting your information online, such as company background, team member bios, or your site images based on what services you've requested.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">How Your Information May Be Shared With Others?</h2>
      <p>We do not trade your personal information, such as email or phone numbers, with third parties. But we can give some data to a few partners and vendors for operational reasons. For instance, if you subscribe with us, we may provide your information to our payment processor to process your monthly billing. They can store some information just to make the charges, but they cannot use it for any other reason.</p>
      <p>We also share some of this work with other service providers, such as website hosting, data analysis, research, customer support software, and online content publishing. They could receive your business information to do their work, but they cannot use it for personal purposes. Some of your information may also be passed on to search engines in the course of providing our SEO or digital marketing services, and those sites make use of the information in their own manner that we cannot control.</p>
      <p>In some instances, we might be compelled to disclose your information if we are legally bound to do so, such as in the event of a court order, a government request, or legal process in respect of our services. These are beyond our will, and we only do this when required to.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">How We Keep Your Information Safe</h2>
      <p>Your information is kept safe with the help of a third-party hosting environment and the required protection hardware and software. We do value safety and employ various physical and electronic layers of security to hinder unauthorized access, use or alteration of your data. Nevertheless, no system is 100% safe online, so we make an effort.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Do We Use 'Cookies'?</h2>
      <p>Yes, we use cookies to store your visit to our website. They assist in keeping you signed in and display ads related to your interests. You can disable cookies in your browser, but some features of our site may not function if you do.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Keeping You Informed About Policy Changes</h2>
      <p>We may update this privacy policy. When we do, the revised version will appear on this same page. So it's a good idea to come back sometimes to get the latest. The new version will only apply to information collected after the change, so don't worry — it won't impact the information you provided before the change.</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Contacting Us</h2>
      <p>If you want to learn more or want clarity on your doubts related to our policy, feel free to connect with us anytime through email at info@skstechsolution.com or call us at +1 (302) 321-2310, +1 (302) 329-3535.</p>
    </section>
  </main>
);

export default PrivacyPolicy; 