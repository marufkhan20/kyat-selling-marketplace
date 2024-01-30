import CallToAction from "@/components/home/CallToAction";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Sellers from "@/components/home/Sellers";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <CallToAction />
      <Sellers />
      <Testimonials />
    </main>
  );
}
