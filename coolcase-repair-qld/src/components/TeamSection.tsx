import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Database, Headphones, Monitor, ShieldCheck, Smartphone, Wrench } from "lucide-react";

const specialists = [
  {
    icon: Wrench,
    name: "Andy",
    role: "Master Technician",
    experience: "20+ years",
    summary: "Advanced repairs including PCB board repair and complex data recovery.",
  },
  {
    icon: Smartphone,
    name: "Ryan",
    role: "Retail Manager & Senior Technician",
    experience: "8+ years",
    summary: "Phone, tablet, screen, battery, charging, and customer repair guidance.",
  },
  {
    icon: ShieldCheck,
    name: "Lucas",
    role: "Repair Specialist",
    experience: "10+ years",
    summary: "Advanced diagnostics, drone repair, device testing, and technical repair planning.",
  },
  {
    icon: Monitor,
    name: "Kyle",
    role: "IT Specialist",
    experience: "4+ years",
    summary: "Computer repair, performance support, setup, networking, and IT solutions.",
  },
  {
    icon: Headphones,
    name: "Sarah",
    role: "Customer Support Specialist",
    experience: "6+ years",
    summary: "Repair triage, customer communication, service updates, and booking support.",
  },
  {
    icon: Database,
    name: "Emma",
    role: "Data Recovery Specialist",
    experience: "5+ years",
    summary: "Data recovery, software troubleshooting, backup support, and transfer services.",
  },
];

const requirements = [
  "Completed Bachelor Degree in Electrical Engineering, Information Technology, or Relevant Degrees",
  "Minimum 5 years repair experience",
  "Repaired over 1000 devices per technician",
  "Completed relevant certified repair courses such as Apple, Samsung, Oppo, Huawei, Google Independent Repair Program, etc.",
  "Completed IPC Logic Board Repair Program",
  "Completed Data Recovery Program",
  "Ex-Apple and Samsung repair technician",
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-background px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meet Our Certified Technicians</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Certified specialists across repairs, diagnostics, customer support, IT, and data recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialists.map((member) => (
            <Card key={member.name} className="group h-full border-border transition-all duration-300 hover:-translate-y-1 hover:border-ccr-primary/50 hover:shadow-ccr-glow">
              <CardContent className="flex h-full flex-col p-7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ccr-primary/10 text-ccr-primary transition-colors group-hover:bg-ccr-primary group-hover:text-white">
                    <member.icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-sm font-semibold text-ccr-primary">
                    {member.experience}
                  </span>
                </div>

                <h3 className="mb-1 text-xl font-bold text-foreground">{member.name}</h3>
                <p className="mb-3 font-semibold text-ccr-primary">{member.role}</p>
                <p className="leading-relaxed text-muted-foreground">{member.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-muted/50 p-8 text-center">
          <Award className="mx-auto mb-4 h-10 w-10 text-ccr-primary" />
          <p className="mb-2 text-lg font-medium">All our technicians are fully certified and experienced</p>
          <p className="mb-6 text-muted-foreground">With over 15 years of experience, we're committed to excellence in every repair.</p>

          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-border bg-card p-6 text-left">
            <h3 className="mb-4 text-center text-lg font-semibold">Our Requirements</h3>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              To be a certified technician, our technicians have obtained a minimum of 3 of these requirements:
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {requirements.map((requirement) => (
                <li key={requirement} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-ccr-primary" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
