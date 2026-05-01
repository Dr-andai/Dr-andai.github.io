import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#a4d3df] underline underline-offset-2 decoration-[#a4d3df]/40 hover:decoration-[#a4d3df] transition-colors"
    >
      {children}
    </a>
  );
}

const workExperiences = [
  {
    title: "Research Assistant",
    organization: "Brain & Mind Institute, Aga Khan University",
    location: "Nairobi, Kenya",
    period: "Jul 2024 – Jan 2026",
    bullets: [
      <>Supported <Link href="https://www.aku.edu/bmi/research/Pages/uzima-ds.aspx">UZIMA</Link> study, a mental health data science project, using wearable data to predict mental health outcomes in Kenyan Healthcare Workers.</>,
      <>Contributed to the <Link href="https://www.aku.edu/bmi/research/Pages/brk.aspx">BRK</Link> study, examining how lifestyle, environment, and social determinants shape long-term brain health.</>,
      <>Participant recruitment for the <Link href="https://www.aku.edu/bmi/research/Pages/FemBER-AFRICA.aspx">FemBER Africa</Link> study, exploring hormonal influences on neurological outcomes in African women.</>,
    ],
  },
  {
    title: "Research Data Analyst Intern",
    organization: "Brain & Mind Institute, Aga Khan University",
    location: "Nairobi, Kenya",
    period: "Feb 2024 – Jun 2024",
    bullets: [
      <>Built a demo suicide prevention surveillance dashboard in <Link href="https://public.tableau.com/views/Befrienders2/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link">Tableau</Link> for Befrienders Kenya to track suicide trends.</>,
      <>Data analysis for mental health outcomes from structured clinical datasets, informing early intervention strategies.</>,
    ],
  },
  {
    title: "Medical Officer Resident",
    organization: "Equity Afia Clinic",
    location: "Nairobi, Kenya",
    period: "Sep 2023 – Jan 2024",
    bullets: [
      "Delivered primary and preventive outpatient care across a high-volume urban clinic, managing chronic disease, acute presentations, and mental health cases.",
      "Facilitated CME sessions on mental health in the workplace, building capacity among clinical and non-clinical staff.",
    ],
  },
  {
    title: "Medical Officer Intern",
    organization: "Kerugoya County Referral Hospital",
    location: "Kenya",
    period: "Jul 2022 – Jul 2023",
    bullets: [
      "Completed supervised rotations in internal medicine, surgery, obstetrics & gynaecology, paediatrics, and community health.",
      "Gained hands-on experience managing complex cases in a county-level referral hospital serving rural and peri-urban Kenya.",
    ],
  },
];

const education = [
  {
    degree: "MSc Neuroscience (ongoing)",
    institution: "University of Cape Town",
    year: "2026 – Present",
    note: "Research focus on neurodegeneration, brain aging, and ML-assisted methods in neuroscience.",
  },
  {
    degree: "MSc International Public Health",
    institution: "Liverpool John Moores University / UNICAF",
    year: "2025",
    note: "Community based intervention programs for optimising brain health determinants in Africa.",
  },
  {
    degree: "MBChB (Bachelor of Medicine & Bachelor of Surgery)",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    year: "2022",
    note: "Foundation in human anatomy, clinical medicine, biomedical sciences and health research.",
  },
];

export function Experience() {
  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Experience & Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Work experience timeline */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:hidden" />

          <div className="space-y-12">
            {workExperiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mt-20" ref={eduRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={eduInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <GraduationCap className="w-6 h-6 text-primary shrink-0" />
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
            <div className="flex-1 h-px bg-border/40" />
          </motion.div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={eduInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-4 hover-elevate transition-all duration-300"
              >
                <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2 hidden sm:block" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <span className="text-base font-bold text-foreground">{edu.degree}</span>
                    <span className="text-xs font-mono text-primary/70">{edu.year}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#085a64] dark:text-[#a4d3df] mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

type WorkExp = { title: string; organization: string; location: string; period: string; bullets: React.ReactNode[] };

function TimelineItem({ experience, index }: { experience: WorkExp; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  const card = (
    <div className="glass-card p-6 rounded-xl hover-elevate transition-all duration-300">
      <div className="flex items-center gap-2 mb-2 text-primary">
        <Briefcase className="w-4 h-4" />
        <span className="text-sm font-mono">{experience.period}</span>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-1">{experience.title}</h3>
      <h4 className="text-sm font-semibold text-[#085a64] dark:text-[#a4d3df] mb-3">
        {experience.organization} · {experience.location}
      </h4>
      <ul className="space-y-1.5">
        {experience.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Center dot */}
      <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 mt-6" />

      <div className={`w-full md:w-1/2 pl-16 md:pl-0 py-2 ${isEven ? "md:pl-12 md:pr-4" : "md:pr-12 md:pl-4"}`}>
        {card}
      </div>

      <div className="w-full md:w-1/2 hidden md:block" />
    </motion.div>
  );
}
