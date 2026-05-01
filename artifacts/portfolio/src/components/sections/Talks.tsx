import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mic, Presentation, Users, MonitorPlay } from "lucide-react";

const talks = [
  {
    title: "MINDS Scholars Feature: Pan-African Leadership in Development Studies",
    icon: Users,
    type: "Feature"
  },
  {
    title: "CME Sessions on Mental Health in the Workplace (Equity Afia)",
    icon: Presentation,
    type: "Presentation"
  },
  {
    title: "Virtual Training on Data Tools for Brain Health Stakeholders",
    icon: MonitorPlay,
    type: "Training",
    org: "Global Brain Health Institute"
  },
  {
    title: "Undergraduate Mentorship in Medical Research & Data Science",
    icon: Mic,
    type: "Mentorship"
  }
];

export function Talks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="talks" className="py-14 sm:py-24 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Talks & Thought Leadership
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {talks.map((talk, index) => {
            const Icon = talk.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 sm:p-6 rounded-xl flex items-start gap-3 sm:gap-4 hover-elevate group"
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-accent mb-1 block uppercase tracking-wider">{talk.type}</span>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {talk.title}
                  </h3>
                  {talk.org && (
                    <p className="text-sm text-muted-foreground mt-2">{talk.org}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}