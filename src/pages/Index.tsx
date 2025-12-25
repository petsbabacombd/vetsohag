import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { PhDVisionSection } from "@/components/PhDVisionSection";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

{/* 
SEO Keywords (hidden for indexing):
veterinary surgeon bangladesh, biomedical researcher bangladesh, veterinary phd applicant, translational research veterinary, 
histopathology expert bangladesh, cancer drug toxicity research, one health researcher, international grant applicant, 
academic veterinary portfolio, veterinary science sylhet, anatomy histology researcher, methotrexate toxicity research,
silymarin protective effects, nephrotoxicity research, hepatotoxicity animal model, veterinary consultant sylhet,
pet doctor sylhet, livestock veterinarian bangladesh, animal surgery specialist, veterinary medicine researcher,
comparative medicine expert, drug-induced organ toxicity, tissue pathology specialist, molecular veterinary research,
cellular biology veterinary, gene signaling research, biomedical phd candidate, veterinary research fellow,
american society microbiology member, bangladesh veterinary council, sher-e-bangla agricultural university,
sylhet agricultural university, vet care center sylhet, veterinary clinical practice, animal health specialist,
pet healthcare bangladesh, farm animal medicine, diagnostic veterinary services, research-informed veterinary care,
phd translational medicine, international veterinary collaboration, veterinary grant recipient, nst fellowship bangladesh,
waavp scholarship recipient, veterinary publication author, peer-reviewed veterinary research, journal biochemical toxicology,
veterinary medicine science journal, research journal microbiology, international veterinary conference, 
agricultural research conference, veterinary workshop training, elisa pcr technique, tissue processing specialist,
histological slide preparation, h and e staining expert, ffpe embedding technique, microtomy specialist,
veterinary anatomy expert, animal morphology research, veterinary physiology, organ toxicity mitigation,
natural compound therapeutics, adjunct therapy research, chemotherapy safety veterinary, safer drug protocols,
rabbit model research, animal disease model, human disease translation, veterinary to human medicine,
one health initiative, zoonotic disease research, disease mechanism research, drug reaction research,
tissue level pathology, cellular pathway research, gene control signaling, novel biomedical solutions,
veterinary field innovation, academic veterinary excellence, international veterinary network,
research collaboration opportunity, phd supervision opportunity, veterinary mentorship,
sylhet pet clinic, bangladesh animal hospital, veterinary emergency care, animal wellness center,
preventive veterinary medicine, veterinary diagnostic imaging, blood biochemistry veterinary,
organ function markers, kidney function analysis, liver function testing, tissue damage assessment
*/}

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <GallerySection />
      <PhDVisionSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;