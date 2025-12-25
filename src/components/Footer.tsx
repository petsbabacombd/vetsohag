import logo from "@/assets/logo.png?format=webp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="VetSohag Logo" width={127} height={40} loading="lazy" className="h-10 w-auto brightness-0 invert" />
            <div>
              <p className="font-serif font-bold text-lg">Dr. Sohag Talukder</p>
              <p className="text-sm text-background/70">Veterinary Surgeon & Biomedical Researcher</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-background/70">
              © {currentYear} VetSohag.com. All rights reserved.
            </p>
            <p className="text-xs text-background/50 mt-1">
              Bangladesh Veterinary Council Reg. No. 8026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
