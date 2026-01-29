import { BookOpen, FileText, Mic, ExternalLink } from "lucide-react";

const journalArticles = [
  {
    authors: "Talukder S, Akter S, Akanda MR, Siddiqui MSI",
    year: "2025",
    title: "The 1–1–1 technique: A modified novel approach to feline ovariohysterectomy with minimal incision, rapid recovery and antibiotic free outcomes",
    journal: "Veterinary and Animal Science",
    details: "27: 100428",
    doi: "https://doi.org/10.1016/j.vas.2025.100428",
    isFirstAuthor: true,
    isHighlight: true,
  },
  {
    authors: "Talukder S, Islam S, Islam S, Akanda MR, Siddiqui MSI",
    year: "2025",
    title: "Protective Role of Silymarin Against Methotrexate Induced Nephropathy in Rabbits",
    journal: "Journal of Biochemical and Molecular Toxicology",
    details: "39: e70544",
    doi: "https://doi.org/10.1002/jbt.70544",
    pmid: "41071712",
    isFirstAuthor: true,
  },
  {
    authors: "Khan SS, Hossain H, Talukder S, Uddin MS, Uddin MA, Siddiqui MSI",
    year: "2024",
    title: "A survey on the knowledges, attitudes, behaviours and practices of goat farmers about peste des petits ruminants disease in goats",
    journal: "Veterinary Medicine and Science",
    details: "10, e1543",
    doi: "https://doi.org/10.1002/vms3.1543",
    isFirstAuthor: false,
  },
  {
    authors: "Siddiqui MSI, Mussa MT, Talukder S, Hossain H, Al Masud A, Uddin AM, Akter S, Islam MR",
    year: "2023",
    title: "Seroprevalence of Peste des Petits Ruminants in Small and Large Ruminants in Selected Bordered Areas of Bangladesh",
    journal: "Research Journal of Microbiology",
    details: "18(1): 57-62",
    doi: "https://doi.org/10.17311/rjm.2023.57.62",
    isFirstAuthor: false,
  },
  {
    authors: "Islam KM, Mussa MT, Talukder S, Hossain H, Siddiqui MSI",
    year: "2023",
    title: "Investigation of the Axial Skeleton of Bengal Monitor Lizard (Varanus bengalensis): A macroanatomical study",
    journal: "DYSONA - Life Science",
    details: "4, 1, 23-29",
    doi: "https://doi.org/10.30493/dls.2023.379556",
    isFirstAuthor: false,
  },
];

const conferences = [
  {
    type: "Full Paper",
    authors: "Talukder S, Siddiqui MSI, Das PK, et al.",
    year: "2023",
    title: "Economic Impact of Ivermectin as Anthelmintic on Body Weight Gain of Goat in Bangladesh",
    venue: "3rd International Congress of the Turkish Journal of Agriculture-Food Science and Technology",
    details: "ID-229, 392-396",
  },
  {
    type: "Abstract",
    authors: "Talukder S, Islam S, Nargis SB, et al.",
    year: "2024",
    title: "Protective Effects of Silymarin on Methotrexate Induced Liver Damages in Rabbits",
    venue: "1st International Conference on Advanced Agricultural Research, Sylhet, Bangladesh",
    details: "",
  },
];

const workshops = [
  "1st International Conference on Advanced Agricultural Research (May 2024) – Sylhet Agricultural University",
  "Workshop on Vector-Borne Diseases (Dec 2023) – SAU, Bangladesh",
  "TroCCAP Workshop-Bangladesh Edition (Sep 2023) – Bangladesh Agricultural University",
  "3rd International Congress of TJAF-ST (Sep 2023) – Turkey (Virtual)",
  "29th WAAVP International Conference (Aug 2023) – Chennai, India",
];

export function PublicationsSection() {
  return (
    <section id="publications" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Academic Output
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Publications & Conferences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed research contributions to veterinary and biomedical science
          </p>
        </div>

        {/* Journal Articles */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground">Peer-Reviewed Journal Articles</h3>
          </div>
          
          <div className="space-y-4">
            {journalArticles.map((article, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border/50 p-6 hover:shadow-card transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {article.isHighlight && (
                        <span className="px-2 py-0.5 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold rounded shadow-sm">
                          ⭐ Latest Achievement
                        </span>
                      )}
                      {article.isFirstAuthor && (
                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded">
                          First Author
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">{article.year}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {article.authors}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-foreground">{article.journal}</span>
                      {article.details && <span className="text-muted-foreground">, {article.details}</span>}
                    </p>
                    {article.pmid && (
                      <p className="text-xs text-muted-foreground mt-1">PMID: {article.pmid}</p>
                    )}
                  </div>
                  <a
                    href={article.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium flex-shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    DOI
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Proceedings */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Mic className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground">Conference Proceedings</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {conferences.map((conf, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border/50 p-5 hover:shadow-soft transition-all duration-300"
              >
                <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded mb-3">
                  {conf.type} • {conf.year}
                </span>
                <h4 className="font-semibold text-foreground text-sm mb-2">{conf.title}</h4>
                <p className="text-sm text-muted-foreground">{conf.venue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops & Training */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground">Conferences & Training</h3>
          </div>
          
          <div className="bg-card rounded-xl border border-border/50 p-6">
            <ul className="space-y-3">
              {workshops.map((workshop, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{workshop}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
