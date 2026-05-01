import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Youtube, Monitor, Brain, CodeXml, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Afiadata Kenya",
    role: "Co-founder",
    description: "Medical data science community building capacity in health data science across Africa.",
    link: "https://afiadata.org/",
    icon: Users,
  },
  {
    title: "Afiadata YouTube",
    role: "Creator",
    description: "Educational content on data science in health, R, Python, and public health research methods.",
    link: "https://www.youtube.com/@AfiadataKe",
    icon: Youtube,
  },
  {
    title: "PPB Kenya Recalls Dataset",
    role: "Dataset Author",
    description: "Open pharmacovigilance dataset of drug recalls issued by Kenya's Pharmacy and Poisons Board, published on Hugging Face.",
    link: "https://huggingface.co/datasets/AfiadataKe/ppb-kenya-recalls-dataset",
    icon: Database,
  },
  {
    title: "Shock Lab",
    role: "MSc student",
    description: "Research and innovation focused on brain health imaging in low-resource settings.",
    link: "https://shocklab.net/students/david-andai/",
    icon: Monitor,
  },
  {
    title: "Neuroscience Blog",
    role: "Writer",
    description: "Insights on brain health and computational neuroscience methods",
    link: "https://andaidavid.medium.com/",
    icon: Brain,
  },
  {
    title: "Data Blog",
    role: "Writer",
    description: "Technical writing on R, Python, data visualisation, and open health data science.",
    link: "https://afiadata.org/posts",
    icon: CodeXml,
  },
];

export function SideProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="community" className="py-14 sm:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Community Contribution
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 sm:p-6 rounded-xl flex flex-col h-full hover-elevate group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm font-mono text-accent">{project.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Visit
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
