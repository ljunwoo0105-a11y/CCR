import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-to-br from-ccr-primary via-ccr-secondary to-ccr-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-ccr-glow">CCR</span>
              <span className="text-white block">COOL CASE REPAIR</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Springfield Central's premier technology repair specialist. Expert service for phones, tablets, computers, drones, and IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-ccr-glow">Our Services</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-ccr-glow transition-colors">Phone Repair</a></li>
              <li><a href="#" className="hover:text-ccr-glow transition-colors">Tablet Repair</a></li>
              <li><a href="#" className="hover:text-ccr-glow transition-colors">Computer Repair</a></li>
              <li><a href="#" className="hover:text-ccr-glow transition-colors">Drone Repair</a></li>
              <li><a href="#" className="hover:text-ccr-glow transition-colors">IT Solutions</a></li>
              <li><a href="#" className="hover:text-ccr-glow transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-ccr-glow">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#home" className="hover:text-ccr-glow transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-ccr-glow transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-ccr-glow transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-ccr-glow transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-ccr-glow transition-colors">Book Online</a></li>
              <li><a href="#" className="hover:text-ccr-glow transition-colors">Get Quote</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-ccr-glow">Contact Info</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-ccr-glow flex-shrink-0" />
                <div>
                  <div>0415890924</div>
                  <div className="text-sm">7 days a week</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-ccr-glow flex-shrink-0" />
                <div>coolcaserepair@gmail.com</div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-ccr-glow flex-shrink-0" />
                <div>
                  <div>Springfield Central QLD</div>
                  <div className="text-sm">Mobile service available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60">
            <div className="text-sm">
              © 2024 Cool Case Repair (CCR). All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-ccr-glow transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-ccr-glow transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-ccr-glow transition-colors">Warranty</a>
              <a href="/employee-login" className="hover:text-ccr-glow transition-colors">Employee Login</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
