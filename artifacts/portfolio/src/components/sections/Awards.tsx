import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, GraduationCap, Medal } from "lucide-react";

const awards = [
  {
    title: "Mandela Institute for Development Studies (MINDS) Scholarship",
    year: "2026",
    icon: GraduationCap,
    description: "Awarded for Pan-African Leadership in Development Studies."
  },
  {
    title: "Early Career Researcher Award",
    year: "2025",
    icon: Award,
    description: "Aga Khan University"
  },
  {
    title: "Computational Neuroscience & Linear Algebra for ML",
    year: "2025",
    icon: Medal,
    description: "Coursera Certification"
  }
];

export function Awards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="awards" className="py-24 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Awards & Certifications
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
          className="max-w-4xl mx-auto space-y-6"
        >
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-6 hover-elevate transition-all"
              >
                <div className="p-4 bg-primary/10 rounded-full text-primary flex-shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {award.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-mono font-bold border border-accent/20 whitespace-nowrap">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}