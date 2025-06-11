import HeroSection from "@/app/components/home/herosection"
import AboutUs from "./components/home/aboutus";
import Services from "./components/home/services";
import CaseDetails from "./components/home/ServiceDetails";
import Solutions from "./components/home/solutions";
import Portfolio from "./components/home/portfolio";
import Tesitmonials from "./components/home/testimonials";
import Technology from "./components/home/technology";
import Faq from "./components/home/faq";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="bg-[#08060F]">
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <CaseDetails/>
      <Solutions/>
      <Portfolio/>
      <Tesitmonials/>
      <Technology/>
      <Faq/>
      <Contact/>
    </div>
  );
}
