import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const affiliations = [
  "Afiadata",
  "University of Cape Town",
  "MINDS",
  "Shock Lab",
  "Aga Khan University",
  "Brain and Mind Institute",
  "Jomo Kenyatta University of Agriculture and Technology",
  "UNICAF",
];

export function Affiliations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="affiliations" className="py-16 relative overflow-hidden bg-background border-t border-border/50 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-2xl font-bold tracking-tight text-foreground/80"
          >
            Affiliations
          </motion.h2>
        </div>

        <div 
          ref={ref}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-5xl mx-auto"
        >
          {affiliations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                color: "hsl(var(--primary))",
                borderColor: "hsl(var(--primary))",
                boxShadow: "0 0 20px rgba(8,90,100,0.3)"
              }}
              className="px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm rounded-full border border-border/50 bg-card/30 text-muted-foreground font-medium transition-all duration-300 cursor-default grayscale hover:grayscale-0"
            >
              {org}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}