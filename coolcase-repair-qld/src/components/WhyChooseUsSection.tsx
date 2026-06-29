import { Shield, Clock, Users, Award, MapPin, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Certified & Insured",
      description: "Fully certified technicians with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Clock,
      title: "Express On-Spot Repair",
      description: "Express repair within 1 hour for parts in stock. Certified technicians provide same-day service."
    },
    {
      icon: Users,
      title: "15+ Years Experience",
      description: "Certified technicians with over 15 years experience in repair industry. Expert service since 2008."
    },
    {
      icon: Award,
      title: "Lifetime Warranty",
      description: "All premium repairs backed by our lifetime warranty. Quality parts and services guaranteed."
    },
    {
      icon: MapPin,
      title: "Local Springfield Central",
      description: "Proudly serving Springfield Central and surrounding areas with personalized local service."
    },
    {
      icon: Wrench,
      title: "VIP Member Discounts",
      description: "Special discounts on accessories for repair customers and VIP members. Best quality for competitive prices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-ccr-primary">CCR</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Family-owned Springfield Central repair shop since 2008. Our certified technicians have 15+ years experience 
            providing quality repairs with lifetime warranty on premium services. Brisbane's highest-rated repair shop 
            with 1.5K+ Google reviews at 4.9 stars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-ccr-elegant transition-all duration-300 border-border hover:border-ccr-primary/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-ccr-primary to-ccr-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-ccr-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-ccr-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-ccr-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ccr-primary">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ccr-secondary">1.5K+</div>
              <div className="text-muted-foreground">Google Reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ccr-accent">4.9</div>
              <div className="text-muted-foreground">Google Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ccr-glow">$99</div>
              <div className="text-muted-foreground">Repairs From</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
