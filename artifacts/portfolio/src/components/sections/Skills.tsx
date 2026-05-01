import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileDown } from "lucide-react";


type CertCategory = "medicine" | "neuroscience" | "ml";

const certificates: { label: string; file: string; category: CertCategory }[] = [
  { label: "Behavioral Research Best Practices", file: "Behavioral Research Best Practices for Clinical Research.pdf", category: "medicine" },
  { label: "Biomedical Research", file: "Biomedical Research.pdf", category: "medicine" },
  { label: "Health Research", file: "health_research.jpg", category: "medicine" },
  { label: "ICT Certification", file: "ict.jpeg", category: "ml" },
  { label: "Research Modules (UNICAF)", file: "unicaf research modules.pdf", category: "medicine" },
  { label: "Computational Neuroscience", file: "computational_neuroscience.pdf", category: "neuroscience" },
  { label: "Neuroimaging & Sensors", file: "neuroimaging and sensors.pdf", category: "neuroscience" },
  { label: "Clinical Parkinson's", file: "clinical_parkinsons.pdf", category: "neuroscience" },
  { label: "Calculus for ML", file: "calculus for ml.pdf", category: "ml" },
  { label: "Linear Algebra for ML", file: "linear algebra for ml.pdf", category: "ml" },
];

const categoryStyles: Record<CertCategory, { badge: string; button: string; heading: string }> = {
  medicine: {
    badge: "bg-[#085a64]/15 border border-[#085a64]/40 text-[#085a64] dark:text-[#a4d3df]",
    button: "bg-[#085a64] hover:bg-[#085a64]/90 text-white shadow-[0_0_12px_rgba(8,90,100,0.3)] hover:shadow-[0_0_20px_rgba(8,90,100,0.5)]",
    heading: "text-[#085a64] dark:text-[#a4d3df]",
  },
  neuroscience: {
    badge: "bg-[#2f2145]/15 border border-[#2f2145]/40 text-[#2f2145] dark:text-[#c4b5e8]",
    button: "bg-[#2f2145] hover:bg-[#2f2145]/90 text-white shadow-[0_0_12px_rgba(47,33,69,0.4)] hover:shadow-[0_0_20px_rgba(47,33,69,0.6)]",
    heading: "text-[#2f2145] dark:text-[#c4b5e8]",
  },
  ml: {
    badge: "bg-[#a4d3df]/15 border border-[#a4d3df]/50 text-[#085a64] dark:text-[#a4d3df]",
    button: "bg-[#a4d3df] hover:bg-[#a4d3df]/90 text-[#0f1a2e] shadow-[0_0_12px_rgba(164,211,223,0.3)] hover:shadow-[0_0_20px_rgba(164,211,223,0.5)]",
    heading: "text-[#085a64] dark:text-[#a4d3df]",
  },
};

const categoryLabels: Record<CertCategory, string> = {
  medicine: "Medicine & Clinical Research",
  neuroscience: "Neuroscience",
  ml: "Machine Learning",
};

export function Skills() {
  const certRef = useRef(null);
  const certInView = useInView(certRef, { once: true, margin: "-80px" });

  const grouped = (["medicine", "neuroscience", "ml"] as CertCategory[]).map((cat) => ({
    category: cat,
    certs: certificates.filter((c) => c.category === cat),
  }));

  return (
    <section id="skills" className="py-14 sm:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Skills & Certifications */}
        <div ref={certRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={certInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Skills & Certifications
            </h3>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={certInView ? { opacity: 1, width: "60px" } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-primary mx-auto mt-4 rounded-full"
            />
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-10">
            {grouped.map(({ category, certs }, gi) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                animate={certInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.15 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full ${categoryStyles[category].badge}`}>
                    {categoryLabels[category]}
                  </span>
                  <div className="flex-1 h-px bg-border/40" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {certs.map((cert) => (
                    <motion.a
                      key={cert.file}
                      href={`/skills/${encodeURIComponent(cert.file)}`}
                      download={cert.label}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${categoryStyles[category].button}`}
                    >
                      <FileDown className="w-4 h-4 shrink-0" />
                      {cert.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
