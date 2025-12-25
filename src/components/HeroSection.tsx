import { Button } from "./ui/button";
import { ArrowRight, FlaskConical, Stethoscope } from "lucide-react";
import profileImage from "@/assets/profile-main.jpeg";
export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* DNA helix pattern - subtle */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e4d7c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-up">
              <FlaskConical className="w-4 h-4" />
              <span>Translational Biomedical Researcher</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up stagger-1">
              Advancing{" "}
              <span className="text-primary">Veterinary Care</span> &{" "}
              <span className="text-accent">Translational Research</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-fade-up stagger-2">
              <span className="font-semibold text-foreground">Expert Pet Surgeon</span> |{" "}
              <span className="font-semibold text-foreground">Biomedical Researcher</span> |{" "}
              <span className="font-semibold text-foreground">Expert on Feline Liver, Kidney | </span>
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl opacity-0 animate-fade-up stagger-3">
              Dr. Sohag Talukder is a Bangladesh-based veterinary surgeon and biomedical researcher 
              bridging clinical veterinary practice with internationally recognized translational research.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up stagger-4">
              <Button variant="hero" size="xl" onClick={() => scrollToSection("#research")} className="group">
                <FlaskConical className="w-5 h-5" />
                Research Collaboration
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="accentOutline" size="xl" onClick={() => scrollToSection("#services")} className="group">
                <Stethoscope className="w-5 h-5" />
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-up stagger-2">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-elevated">
                <img src={profileImage} alt="Dr. Sohag Talukder - Veterinary Surgeon and Biomedical Researcher" className="w-full h-full object-cover object-top" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -right-2 md:-right-6 top-8 bg-background rounded-xl shadow-card px-3 py-2 md:px-4 md:py-3 border border-border/50 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                  <span className="text-xs md:text-sm font-medium">BVC Reg. 8026</span>
                </div>
              </div>
              
              <div className="absolute -left-2 md:-left-8 top-1/3 bg-background rounded-xl shadow-card px-3 py-2 md:px-4 md:py-3 border border-border/50 animate-float" style={{
              animationDelay: "0.5s"
            }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                  <span className="text-xs md:text-sm font-medium">ASM Member</span>
                </div>
              </div>
              
              <div className="absolute -right-2 md:-right-10 bottom-1/3 bg-background rounded-xl shadow-card px-3 py-2 md:px-4 md:py-3 border border-border/50 animate-float" style={{
              animationDelay: "1s"
            }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                  <span className="text-xs md:text-sm font-medium">ESVNU Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
        <button onClick={() => scrollToSection("#about")} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>;
}