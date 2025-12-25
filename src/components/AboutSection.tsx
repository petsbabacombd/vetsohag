import { Award, BookOpen, Building2, GraduationCap, Users } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "B.Sc. Vet. Sci. & A.H.",
    subtitle: "Sher-e-Bangla Agricultural University, Dhaka",
    detail: "CGPA: 3.77/4.00",
  },
  {
    icon: BookOpen,
    title: "MS in Anatomy",
    subtitle: "Sylhet Agricultural University",
    detail: "CGPA: 4.00/4.00",
  },
  {
    icon: Users,
    title: "American Society for Microbiology",
    subtitle: "Global Outreach Student Member",
    detail: "ASM Member",
  },
  {
    icon: Award,
    title: "Bangladesh Veterinary Council",
    subtitle: "Licensed Veterinary Surgeon",
    detail: "Reg. No. 8026",
  },
  {
    icon: Building2,
    title: "Vet Care Center, Sylhet",
    subtitle: "Consultant & Surgeon",
    detail: "Since 2022",
  },
  {
    icon: Users,
    title: "European Society of Veterinary Nephrology and Urology",
    subtitle: "Professional Member",
    detail: "ESVNU Member",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Dr. Sohag Talukder
          </h2>
          <p className="text-lg text-primary font-medium">
            Veterinary Surgeon, Consultant & Translational Biomedical Researcher
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio Text */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Sohag Talukder holds a <strong className="text-foreground">B.Sc. in Veterinary Science & Animal Husbandry</strong> from 
              Sher-e-Bangla Agricultural University, Dhaka, and an <strong className="text-foreground">MS in Anatomy</strong> from 
              Sylhet Agricultural University with a perfect CGPA of 4.00.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              He is a registered veterinarian (<strong className="text-foreground">BVC Reg. No. 8026</strong>) and an active 
              <strong className="text-foreground"> Member of the American Society for Microbiology</strong>. He also holds 
              membership in the <strong className="text-foreground">Asian Council of Science Editors (ACSE)</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently serving as <strong className="text-foreground">Consultant and Surgeon at Vet Care Center, Sylhet</strong>, 
              he continues to pursue advanced translational research focused on drug-induced organ toxicity and protective 
              therapeutic strategies, bridging clinical practice with cutting-edge biomedical research.
            </p>

            {/* Fellowships */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Fellowships & Scholarships</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">NST Fellowship 2023-2024</strong> – Ministry of Science and Technology, Bangladesh
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">WAAVP Dublin Scholarship Fund</strong> – 29th WAAVP Conference, Chennai, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Credentials Cards */}
          <div className="lg:col-span-2 space-y-4">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="card-elevated p-5 hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cred.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm mb-1">{cred.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{cred.subtitle}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
                      {cred.detail}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
