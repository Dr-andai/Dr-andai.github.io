import { useRef, useState, MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { BrainCircuit, BarChart2, Database, FlaskConical, Scan, Map, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Neuroexposome Modeling",
    status: "Ongoing",
    icon: BrainCircuit,
    description: "Scoping review for my MNeuroSc thesis examining computational models that capture the neuroepidemiology of neurodegenerative diseases, mapping how the external exposome affects Brain Health",
    link: null,
  },
  {
    title: "Dementia Risk Data Cards",
    status: "Ongoing",
    icon: BarChart2,
    description: "Linking Sub-Saharan dementia risk factors and management approaches to IHME epidemiology trends, visualised as interactive data cards to support brain health education.",
    link: null,
  },
  {
    title: "Africa Exposome Data Repository",
    status: "Ongoing",
    icon: Database,
    description: "Data cards showing annual percentage changes, policy context, and sources for key exposome variables: air pollution, green spaces, climate disasters, GDP, gender equality, and migration.",
    link: null,
  },
  {
    title: "Modeling Hub",
    status: "Ongoing",
    icon: FlaskConical,
    description: "Studying computational models from first principles. GAMs, Variational methods, etc., alongside machine learning approaches including brain age gap estimation, LLMs and graph networks for brain health.",
    link: null,
  },
  {
    title: "Brain Age Gap",
    status: "Completed",
    icon: Scan,
    description: "Implementing a brain age prediction model using 3D MRI volumes and a ResNet architecture. The model estimates a subject's brain age from T1-weighted scans and computes the Brain Age Gap (BAG) as a marker of neurological ageing.",
    link: "https://github.com/Dr-andai/oasis_resnet",
  },
  {
    title: "Shifting the Narrative",
    status: "Completed",
    icon: Map,
    description: "The African Brain Health Network dashboard presents publicly available country-level epidemiological data on brain health across Africa, making regional evidence accessible for researchers and policymakers.",
    link: "https://brain-health.shinyapps.io/dashboard1/",
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Neural Dome Portfolio
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          These projects focus on understanding neuroepidemiology in Africa,
          the exposome factors across the life course and applying data science methods.
        </motion.p>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((e.clientY - rect.top - centerY) / centerY) * -10);
    setRotateY(((e.clientX - rect.left - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = project.icon;
  const isCompleted = project.status === "Completed";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ perspective: 1000 }}
      className="h-full relative group"
    >
      <div className="glass-card h-full p-6 rounded-xl flex flex-col transition-all duration-300 border-b-2 border-b-transparent hover:border-b-primary group-hover:shadow-[0_10px_30px_rgba(8,90,100,0.2)]">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-primary/10 rounded-lg text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <span className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full border ${
            isCompleted
              ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
              : "bg-[#a4d3df]/15 text-[#085a64] dark:text-[#a4d3df] border-[#a4d3df]/30"
          }`}>
            {project.status}
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>

        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {isCompleted && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#085a64] dark:text-[#a4d3df] hover:underline underline-offset-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
}
