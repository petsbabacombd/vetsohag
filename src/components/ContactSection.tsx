import { Mail, Phone, MapPin, FlaskConical, Stethoscope, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  const openWhatsAppResearch = () => {
    window.open("https://wa.me/8801756449329?text=Hello%20Dr.%20Sohag,%20I%20am%20interested%20in%20research%20collaboration.", "_blank");
  };

  const openWhatsAppConsultation = () => {
    window.open("https://wa.me/8801756449329?text=Hello%20Dr.%20Sohag,%20I%20would%20like%20to%20book%20a%20veterinary%20consultation.", "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Collaboration & Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open for research collaboration, academic partnerships, and veterinary consultations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-background rounded-2xl border border-border/50 p-8 shadow-card">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:sohag.vabs@student.sau.ac.bd" 
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      sohag.vabs@student.sau.ac.bd
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone / WhatsApp</p>
                    <a 
                      href="tel:+8801756449329" 
                      className="font-medium text-foreground hover:text-accent transition-colors"
                    >
                      +880 1756 449329
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium text-foreground">
                      Sylhet Agricultural University<br />
                      Sylhet 3100, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-background rounded-2xl border border-border/50 p-8 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-4">Academic Profiles</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://doi.org/10.1002/jbt.70544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Featured Publication
                </a>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=Talukder+S+veterinary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  PubMed
                </a>
              </div>
            </div>
          </div>

          {/* CTA Cards */}
          <div className="space-y-6">
            {/* Research Collaboration */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <FlaskConical className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold">Research Collaboration</h3>
                  <p className="text-primary-foreground/80 text-sm">For international organizations & academia</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 mb-6">
                Interested in PhD supervision, joint research projects, grants, or academic partnerships in 
                translational biomedical research.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={openWhatsAppResearch}
              >
                <Mail className="w-5 h-5" />
                Contact for Research
              </Button>
            </div>

            {/* Veterinary Consultation */}
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-8 text-accent-foreground">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold">Veterinary Consultation</h3>
                  <p className="text-accent-foreground/80 text-sm">For pet owners & livestock farmers</p>
                </div>
              </div>
              <p className="text-accent-foreground/90 mb-6">
                Professional veterinary services at Vet Care Center, Sylhet. Book a consultation 
                for your pets or livestock.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                onClick={openWhatsAppConsultation}
              >
                <Phone className="w-5 h-5" />
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
