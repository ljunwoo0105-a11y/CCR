import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-ccr-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to fix your device? Contact us today for a free quote or emergency repair service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ccr-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">(07) 3000-COOL</p>
                    <p className="text-sm text-muted-foreground">Available 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ccr-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@coolcaserepair.com.au</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ccr-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Springfield Central QLD</p>
                    <p className="text-sm text-muted-foreground">Mobile service available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ccr-glow rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                    <p className="text-muted-foreground">Mon-Sun: 7:00 AM - 9:00 PM</p>
                    <p className="text-sm text-muted-foreground">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-ccr-primary to-ccr-secondary rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4">Need Immediate Help?</h4>
              <div className="space-y-3">
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button className="w-full bg-ccr-accent hover:bg-ccr-accent/90 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (07) 3000-COOL
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-ccr-elegant border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get Free Quote</CardTitle>
              <p className="text-muted-foreground">Tell us about your device and we'll provide a free estimate.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input placeholder="Your phone number" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Device Type</label>
                <Input placeholder="e.g., iPhone 12, Samsung Galaxy Tab, Dell Laptop" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Issue Description</label>
                <Textarea placeholder="Describe the problem with your device..." className="min-h-[120px]" />
              </div>

              <Button className="w-full bg-ccr-primary hover:bg-ccr-primary/90 text-white font-semibold py-3">
                Get Free Quote
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;