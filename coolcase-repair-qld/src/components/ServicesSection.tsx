import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import phoneImage from "@/assets/generated-phone-repair.jpg";
import tabletImage from "@/assets/generated-tablet-repair.jpg";
import computerImage from "@/assets/generated-computer-repair.jpg";
import droneImage from "@/assets/generated-drone-repair.jpg";
import watchImage from "@/assets/generated-watch-repair.jpg";
import itImage from "@/assets/generated-it-solutions.jpg";

const services = [
  {
    title: "Phone Repair",
    image: phoneImage,
    description: "Screen, battery, charging port, camera and water-damage repairs for major smartphone models.",
    features: ["Screen replacement", "Battery replacement", "Charging issues", "Camera repair", "Water damage"],
    fromPrice: "$59",
  },
  {
    title: "Tablet Repair",
    image: tabletImage,
    description: "iPad, Samsung Galaxy Tab and Android tablet repair with quality parts and careful diagnostics.",
    features: ["Screen replacement", "Battery service", "Charging issues", "Software problems", "Home button"],
    fromPrice: "$120",
  },
  {
    title: "Computer Repair",
    image: computerImage,
    description: "Laptop and desktop repairs, upgrades, virus removal and data recovery for home and business.",
    features: ["Hardware upgrades", "Virus removal", "Data recovery", "OS installation", "Performance boost"],
    fromPrice: "$150",
  },
  {
    title: "Drone Repair",
    image: droneImage,
    description: "Drone diagnostics and component repair for recreational and commercial devices.",
    features: ["Gimbal repair", "Motor replacement", "Camera issues", "Flight controller", "Propeller service"],
    fromPrice: "$180",
  },
  {
    title: "Watch Repair",
    image: watchImage,
    description: "Smartwatch screen, battery, water-damage and button repairs completed with precise handling.",
    features: ["Screen replacement", "Battery service", "Water damage", "Crown/button repair", "Software issues"],
    fromPrice: "$30",
  },
  {
    title: "IT Solutions",
    image: itImage,
    description: "Network setup, security, cloud migration and ongoing IT support for small businesses.",
    features: ["Network setup", "Security solutions", "Cloud migration", "System administration", "Ongoing support"],
    fromPrice: "$150",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-ccr-primary">Repair services</p>
          <h2 className="text-4xl font-semibold tracking-normal text-neutral-950 md:text-6xl">
            Expert repairs, handled cleanly.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Professional repair services for phones, tablets, computers, drones, watches and business IT.
            Clear pricing, local support and warranty-backed work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group flex h-full flex-col overflow-hidden border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-ccr-primary/40 hover:shadow-ccr-elegant">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={`${service.title} service`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 via-black/30 to-transparent p-5 text-white">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <span className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-neutral-950">
                    From {service.fromPrice}
                  </span>
                </div>
              </div>

              <CardContent className="flex flex-1 flex-col p-6">
                <p className="mb-6 leading-7 text-muted-foreground">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-ccr-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-auto h-11 w-full rounded-full bg-ccr-primary font-semibold text-white hover:bg-ccr-primary/90">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-neutral-950 px-6 py-8 text-center text-white md:px-10">
          <h3 className="text-2xl font-semibold md:text-3xl">Express repairs for in-stock parts</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/72">
            Bring your device to Orion Springfield Central for fast diagnosis and practical repair options.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full bg-ccr-accent px-7 font-semibold text-white hover:bg-ccr-accent/90">
              Book Repair
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent px-7 font-semibold text-white hover:bg-white hover:text-neutral-950">
              Call 0452 385 321
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
