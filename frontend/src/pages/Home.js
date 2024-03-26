import Peek from "../components/home/Peek";
import About from "../components/home/About";
import OurTeam from "../components/home/OurTeam";
import FAQ from "../components/home/FAQ";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";

export default function Example() {
  return (
      <div className="bg-base-100">
        <Header />
        <Hero />
        <Peek />
        <About />
        <OurTeam />
        <FAQ />
      </div>
  );
}
