import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

const TermsAndConditions = () => (
  <main className={`max-w-3xl mx-auto px-4 py-12 ${roboto.className}`}>
    <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
    <section className="mb-6">
      <p>Welcome to Seo Master . When you visit or use our website, you agree to be bound by these terms and conditions. Please read carefully because by continuing to browse the site, you automatically agree to everything mentioned here. If you disagree, then unfortunately, you should discontinue using the website or any of our services on an immediate basis.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Client Responsibilities & Service Limitations</h2>
      <p>Before services can begin, it's assumed that the client doesn't have duplicate websites or repeated pages, and no sneaky redirect tricks or doorway pages. The client also confirms they have not exchanged links with link farms or been involved in spamming methods that can mess up the website's ranking with Google and other search engines. Please note that we can't guarantee exact results or promise a 100% improvement in traffic or sales, because search engines are unpredictable and every project is unique in its own way. All service fees are required in advance and, unfortunately, are not refundable. If the client alters the pages that Seo Master has already optimized, or if they ignore recommended changes, any form of guarantee will be cancelled immediately. Seo Master sticks to only ethical SEO practices. It will nullify any agreement or guarantee if it turns out that the client has been doing things search engines consider bad, like using hidden links, link schemes, or any kind of page cloaking or automated submissions, even without telling us. Also, Seo Master has the right to use client websites, designs, and layouts for promotional purposes, like adding to portfolio pages or case studies, and even adding subtle links in the footer unless the client clearly asks us not to.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Grant of Specific Legal Rights</h2>
      <p>To do proper SEO, we may require access to your site's backend, i.e., FTP and admin panels. We may also need to contact your web developer or third-party provider if required. Full access to your current website analytics is expected so we can monitor and measure performance. Clients also give permission for Seo Master to use their logos, trademarks, and website images to create content or articles needed for SEO strategy. If the client's website lacks enough written content, then they are expected to send more in digital form. Otherwise, Seo Master can provide content at an additional cost, and that cost will be discussed beforehand. We can also write fresh content if needed, but again, it's something that's charged separately.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Non-Disclosure Agreement</h2>
      <p>During the course of the project and even after that, the client undertakes to strictly adhere to confidentiality terms and not disclose or use any confidential information provided by Seo Master . Also, we request that clients don't publicly criticise the company, employees, or partners on blogs, forums, or any social media during or even after project completion. This includes avoiding negative discussions or asking for SEO help in a way that makes Seo Master look bad. If this clause is violated, the client may be liable to pay damages, the amount of which would be based on the harm caused. It's just about keeping mutual respect and professionalism.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Ending or Cancelling Your Agreement</h2>
      <p>The agreement naturally terminates when all the work specified is finished. But it can also be dissolved if one or the other party does not fulfil the terms of the contract or if the parties themselves consent to it. At times, situations such as war, civil unrest, natural catastrophes, or some other circumstances beyond anyone's control may also render it impossible to perform the work. In those situations, the contract ends automatically. Other than that, any party may cancel the agreement by giving a written 30-day notice after the first 30 days of service.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Copyright Protection</h2>
      <p>Seo Master retains the copyright for all materials, content, designs, and publications on this website. But we do permit users to download or share some information for non-commercial use, for private purposes, or within your organization. You are more than welcome to do that, if you don't modify the material or eliminate the copyright notices. Unless it falls under "fair use," nothing from our site should be copied, republished, or redistributed without written approval from us. Basically, ask before reusing anything.</p>
      <p>Seo Master does not offer prorated refunds if you cancel a subscription. All subscription plans renew automatically at the end of the current billing cycle unless canceled. Clients are expected to understand our services and how they work before signing up. Refunds won't be given just because someone didn't fully understand the process, or ran into content issues or compatibility issues.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Cancellation Policy</h2>
      <p>Clients should understand that subscription fees are automatically charged on a recurring basis unless canceled. To cancel, you must send an email to info@seomaster.com at least three days before your next billing date. Please also cc your project manager assigned to ensure it's processed in time. We will send a confirmation notice to process the cancellation. Please note that it's your task to cancel properly—we cannot cancel it for you without the proper request.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Refund Policy</h2>
      <p>All subscriptions and selected service plans are billed in advance and are completely non-refundable. Seo Master does not issue refunds for any unused time, partial months, plan downgrades, or even canceled plans. Once payment has been processed, no credits or reversals will be made.</p>
      <p>If you have any doubts or questions regarding the given terms and conditions, please feel free to reach out to us anytime through email at info@seomaster.com </p>
    </section>
  </main>
);

export default TermsAndConditions; 