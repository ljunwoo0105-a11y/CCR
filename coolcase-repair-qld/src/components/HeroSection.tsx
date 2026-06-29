import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, ShieldCheck, Star, Wrench } from "lucide-react";
import heroImage from "@/assets/generated-home-hero.jpg";

const highlights = [
  { icon: ShieldCheck, label: "Certified technicians" },
  { icon: Clock, label: "Same-day repairs" },
  { icon: Wrench, label: "Genuine quality parts" },
  { icon: Star, label: "4.9 rating from 1.5K+ reviews" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <img
        src={heroImage}
        alt="Professional electronics repair bench with phones, laptop, tablet and diagnostic tools"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.74),rgba(0,0,0,0.44)_45%,rgba(0,0,0,0.82))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,0.28)_62%,rgba(0,0,0,0.78)_100%)]" />

      <div className="container mx-auto px-4 py-10 md:py-12 lg:py-14">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-md sm:text-sm">
            <MapPin className="h-4 w-4 text-ccr-glow" />
            Orion Springfield Central - Local repair experts since 2008
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-[0.96] tracking-normal sm:text-5xl md:text-6xl lg:text-7xl">
            Top Rated Repair Service in Brisbane
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/82 md:text-xl md:leading-8">
            Premium phone, tablet, computer, watch, drone and IT repair from certified technicians.
            Express on-site repairs are available for in-stock parts.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-9">
            <Button size="lg" className="h-12 rounded-full bg-ccr-accent px-7 text-base font-semibold text-white hover:bg-ccr-accent/90">
              Book Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/35 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-md hover:bg-white hover:text-neutral-950"
            >
              Call or Text 0452 385 321
            </Button>
          </div>

          <div className="mx-auto mt-7 grid max-w-5xl grid-cols-2 gap-2 text-left sm:grid-cols-2 sm:gap-3 md:mt-10 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-2 rounded-lg border border-white/14 bg-white/[0.08] px-3 py-2 backdrop-blur-md sm:gap-3 sm:px-4 sm:py-3">
                <item.icon className="h-5 w-5 flex-shrink-0 text-ccr-glow" />
                <span className="text-xs font-medium leading-5 text-white/88 sm:text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
