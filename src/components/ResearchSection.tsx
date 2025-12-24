import { 
  FlaskConical, 
  Microscope, 
  Pill, 
  Heart, 
  Dna, 
  Leaf, 
  Globe2,
  ExternalLink 
} from "lucide-react";
import { Button } from "./ui/button";

const researchAreas = [
  { icon: FlaskConical, title: "Translational Biomedical Research", color: "text-primary" },
  { icon: Pill, title: "Drug-Induced Kidney & Liver Toxicity", color: "text-accent" },
  { icon: Heart, title: "Chemotherapy Safety & Toxicity Mitigation", color: "text-primary" },
  { icon: Microscope, title: "Histopathology & Tissue-Level Analysis", color: "text-accent" },
  { icon: Dna, title: "Animal Models for Human Disease", color: "text-primary" },
  { icon: Leaf, title: "Natural Compounds as Adjunct Therapeutics", color: "text-accent" },
  { icon: Globe2, title: "One Health & Comparative Medicine", color: "text-primary" },
];

export function ResearchSection() {
  return (
    <section id="research" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Research Focus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Areas of Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridging veterinary medicine with human health through translational research
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <area.icon className={`w-7 h-7 ${area.color}`} />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{area.title}</h3>
            </div>
          ))}
        </div>

        {/* Featured Research */}
        <div className="bg-background rounded-2xl border border-border/50 shadow-card overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 px-8 py-6">
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-2">
              Featured Publication
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
              Protective Role of Silymarin Against Methotrexate-Induced Nephrotoxicity
            </h3>
          </div>
          
          <div className="p-8">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              This internationally published research demonstrated that <strong className="text-foreground">Silymarin</strong>, 
              a natural compound, significantly protects kidney tissue against <strong className="text-foreground">Methotrexate-induced 
              toxicity</strong> in rabbit models. The findings support safer chemotherapy protocols and highlight the potential 
              of natural adjunct therapies in both veterinary and human medicine.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg">
                <Microscope className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">Histopathology</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                <FlaskConical className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Biochemical Assays</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg">
                <Dna className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">In Vivo Study</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Published in</p>
                <p className="font-semibold text-foreground">Journal of Biochemical and Molecular Toxicology</p>
                <p className="text-sm text-muted-foreground">2025 | PMID: 41071712</p>
              </div>
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open("https://doi.org/10.1002/jbt.70544", "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                View Publication
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
