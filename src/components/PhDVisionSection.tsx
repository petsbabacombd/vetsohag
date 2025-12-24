import { GraduationCap, Globe2, Target, Lightbulb, Award, Handshake } from "lucide-react";
import { Button } from "./ui/button";

const visionPoints = [
  {
    icon: GraduationCap,
    title: "PhD in Translational Research",
    description: "Focused on disease mechanisms, drug reactions, and tissue-level pathology",
  },
  {
    icon: Lightbulb,
    title: "Cellular & Molecular Biology",
    description: "Exploring cellular pathways and gene control signaling",
  },
  {
    icon: Target,
    title: "Cancer Drug Safety",
    description: "Developing safer chemotherapy protocols and toxicity mitigation strategies",
  },
  {
    icon: Globe2,
    title: "One Health Approach",
    description: "Bridging veterinary and human medicine for comprehensive health solutions",
  },
];

export function PhDVisionSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="phd" className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Future Aspirations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              PhD & International Research Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dr. Sohag Talukder aims to pursue a <strong className="text-foreground">PhD in translational biomedical research</strong>, 
              focusing on disease mechanisms, drug reactions, and tissue-level pathology. His interdisciplinary background in 
              veterinary medicine, anatomy, histology, and molecular research positions him strongly for international PhD programs 
              and competitive research grants.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Research interests align with <strong className="text-foreground">One Health</strong>, comparative medicine, 
              cancer drug safety, and organ toxicity mitigation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                <Handshake className="w-5 h-5" />
                Research Collaboration
              </Button>
              <Button variant="heroOutline" size="lg" onClick={scrollToContact}>
                <Award className="w-5 h-5" />
                PhD Supervision Inquiry
              </Button>
            </div>
          </div>

          {/* Vision Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Open for Collaboration
          </h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6 text-lg">
            Actively seeking PhD supervision, international research collaboration, grants, 
            and academic partnerships in translational biomedical research.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/20 text-primary-foreground rounded-full text-sm font-medium">
              PhD Programs
            </span>
            <span className="px-4 py-2 bg-white/20 text-primary-foreground rounded-full text-sm font-medium">
              Research Grants
            </span>
            <span className="px-4 py-2 bg-white/20 text-primary-foreground rounded-full text-sm font-medium">
              Academic Partnerships
            </span>
            <span className="px-4 py-2 bg-white/20 text-primary-foreground rounded-full text-sm font-medium">
              One Health Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
