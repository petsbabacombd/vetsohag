import { Stethoscope, Syringe, ClipboardList, Brain, HeartPulse, Scissors } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Veterinary Consultation",
    description: "Comprehensive health assessments for pets and livestock with research-backed diagnostic approaches.",
  },
  {
    icon: Scissors,
    title: "Surgical Services",
    description: "Expert surgical procedures performed with the highest standards of care and precision.",
  },
  {
    icon: HeartPulse,
    title: "Pet Healthcare",
    description: "Complete health management for companion animals including preventive care and treatment.",
  },
  {
    icon: Syringe,
    title: "Livestock Medicine",
    description: "Specialized care for farm animals with focus on herd health and productivity.",
  },
  {
    icon: ClipboardList,
    title: "Diagnostic Support",
    description: "Advanced diagnostic testing and treatment planning using cutting-edge methodologies.",
  },
  {
    icon: Brain,
    title: "Research-Informed Care",
    description: "Clinical decisions backed by the latest biomedical research and evidence-based practices.",
  },
];

export function ServicesSection() {
  const openWhatsApp = () => {
    window.open("https://wa.me/8801756449329?text=Hello%20Dr.%20Sohag,%20I%20would%20like%20to%20book%20a%20veterinary%20consultation.", "_blank");
  };

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Clinical Practice
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Veterinary Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional veterinary care at Vet Care Center, Sylhet
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="xl" onClick={openWhatsApp} className="group">
            <Stethoscope className="w-5 h-5" />
            Book Veterinary Consultation
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Vet Care Center, Sylhet • Available for appointments
          </p>
        </div>
      </div>
    </section>
  );
}
