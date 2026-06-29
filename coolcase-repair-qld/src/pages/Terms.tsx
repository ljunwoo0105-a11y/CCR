import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-ccr-primary mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ccr-primary">1. Services</h2>
              <p>
                Cool Case Repair (CCR) provides professional repair services for smartphones, tablets, computers, drones, watches, and IT solutions. We have been serving Springfield Central since 2008 with over 15 years of local experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ccr-primary">2. Warranty</h2>
              <p>
                We provide a lifetime warranty for all premium repairs to ensure the quality of our parts and services. This warranty covers manufacturing defects and workmanship issues but does not cover accidental damage, water damage, or misuse.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ccr-primary">3. Pricing</h2>
              <p>
                Most of our repairs start from $99. Final pricing may vary based on device model, parts availability, and repair complexity. All quotes are provided free of charge before any work begins.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ccr-primary">4. Express Service</h2>
              <p>
                Express on-spot repair will be provided by our certified technicians within an hour for all parts in stock. Service times may vary depending on part availability and repair complexity.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ccr-primary">5. Customer Responsibility</h2>
              <p>
                Customers are responsible for backing up their data before service. CCR is not responsible for data loss during the repair process. We recommend all customers backup their devices before bringing them in for repair.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ccr-primary">6. Limitation of Liability</h2>
              <p>
                CCR's liability is limited to the cost of the repair service. We are not liable for any indirect, incidental, or consequential damages arising from our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ccr-primary">7. Contact Information</h2>
              <p>
                For questions about these terms and conditions, please contact us at (07) 3000-COOL or email info@coolcaserepair.com.au
              </p>
            </section>

            <div className="mt-12 text-sm text-foreground/60">
              <p>Last updated: January 2024</p>
              <p>© 2024 Cool Case Repair (CCR). All rights reserved.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;