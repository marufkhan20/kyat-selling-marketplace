import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Information from "@/components/home/Information";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <CallToAction />
      <Sellers />
      <Testimonials /> */}
      <Information />
      <HowItWorks />
    </main>
  );
}
