import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-[hsl(var(--ccr-primary))] to-[hsl(var(--ccr-secondary))] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-4 text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <a href="tel:0452385321" className="flex items-center gap-2 hover:text-[hsl(var(--ccr-glow))] transition-colors group">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">0452 385 321</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="line-clamp-1 md:line-clamp-none">Orion Springfield Central, Kiosk 1/1 Main St, Springfield Central QLD 4300</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-xs font-medium bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <span className="text-[hsl(var(--ccr-glow))]">5 Star</span>
              <span>4.9 Rating - 1.5K+ Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-3xl md:text-4xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-ccr-primary">CCR</span>
              <span className="text-ccr-secondary ml-2"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-ccr-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-ccr-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-ccr-primary transition-colors">
              Why Choose Us
            </a>
            <a href="#reviews" className="text-foreground hover:text-ccr-primary transition-colors">
              Reviews
            </a>
            <a href="#team" className="text-foreground hover:text-ccr-primary transition-colors">
              Team
            </a>
            <a href="#contact" className="text-foreground hover:text-ccr-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-ccr-primary text-ccr-primary hover:bg-ccr-primary hover:text-white">
              Get Quote
            </Button>
            <Button className="bg-ccr-accent hover:bg-ccr-accent/90 text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-ccr-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-ccr-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-ccr-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Why Choose Us
              </a>
              <a href="#reviews" className="text-foreground hover:text-ccr-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </a>
              <a href="#team" className="text-foreground hover:text-ccr-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Team
              </a>
              <a href="#contact" className="text-foreground hover:text-ccr-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" className="border-ccr-primary text-ccr-primary hover:bg-ccr-primary hover:text-white">
                  Get Quote
                </Button>
                <Button className="bg-ccr-accent hover:bg-ccr-accent/90 text-white">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;
