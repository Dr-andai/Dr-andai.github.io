import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    id: 1,
    title: "Evaluating Machine Learning Models in Predicting COVID-19 Vaccine Uptake in Kenya",
    authors: "Andai, D. et al.",
    journal: "J. Kenya Assoc. Physicians",
    year: "2026",
    doi: "https://doi.org/10.4314/jkap.v8i1.5"
  },
  {
    id: 2,
    title: "Depressive Symptoms Among Kenyan Health Care Workers",
    authors: "Aballa, A. et al.",
    journal: "JAMA Psychiatry",
    year: "2025",
    doi: "https://doi.org/10.1001/jamapsychiatry.2025.3727"
  },
  {
    id: 3,
    title: "Reforming pensions in Africa: Addressing coverage, payout disparities, and dementia outcomes",
    authors: "Mostert, C.M., Ajalo, C., & Andai, D.",
    journal: "Alzheimer's & Dementia",
    year: "2025",
    doi: "https://doi.org/10.1002/alz.70300"
  },
  {
    id: 4,
    title: "Investing in equitable healthy aging: Why Africa must reform social pension schemes",
    authors: "Mostert, C.M. et al.",
    journal: "Alzheimer's & Dementia",
    year: "2025",
    doi: "https://doi.org/10.1002/alz.14527"
  },
  {
    id: 5,
    title: "Preventable deaths from respiratory diseases in children in LMICs",
    authors: "Simba, J.M. et al.",
    journal: "European Respiratory Society",
    year: "2023",
    doi: "https://doi.org/10.1183/2312508X.10005022"
  }
];

export function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="publications" className="py-14 sm:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Selected Publications
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        <div 
          ref={ref}
          className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6"
        >
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-4 sm:p-6 md:p-8 rounded-xl flex flex-col md:flex-row gap-4 sm:gap-6 items-start hover-elevate transition-all duration-300 group"
            >
              <div className="flex-shrink-0 pt-1 text-primary/70">
                <BookText className="w-8 h-8" />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-accent/10 text-accent border border-accent/20">
                    {pub.journal}
                  </span>
                  <span className="text-muted-foreground font-mono text-sm">
                    {pub.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {pub.authors}
                </p>
                
                <Button variant="outline" size="sm" className="gap-2 bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    DOI Link
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}