import { Hero } from "../components/Hero";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Process } from "../components/Process";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
  return (
    <div className="pt-24">
      <Hero />
      <WhyChooseUs />
      <Process />
      <Testimonials />
    </div>
  );
}
