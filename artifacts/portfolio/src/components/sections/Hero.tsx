import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { Download, Mail, ChevronDown, Award, BookOpen, Users, ShieldCheck, Brain, TrendingUp, Lightbulb } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const MINDS_LINKEDIN_URL = "https://www.linkedin.com/posts/mandela-institute-for-development-studies_mindsscholars-mindsafrica-panafricanleadership-activity-7440342407285534720-twBA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABzqBLYBF2WsHK8P3qUKKWcpKsYI-FSLp84";
const MY_LINKEDIN_URL = "https://www.linkedin.com/in/david-andai-md-msc-49a560116";
const HEADSHOT_PATH = "/headshot.jpg";

const BRAIN_TOPICS = [
  {
    label: "Brain Health Burden",
    icon: Brain,
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10949203/",
    description: "24% of global disease burden from MNS disorders",
    color: "from-rose-500/10 to-rose-500/5 border-rose-400/30 text-rose-600 dark:text-rose-400 hover:border-rose-400/60 hover:bg-rose-500/10",
    testId: "link-brain-health-burden",
  },
  {
    label: "Brain Health Determinants",
    icon: TrendingUp,
    href: "https://www.who.int/publications/i/item/9789240054561",
    description: "Modifiable risk & protective factors across the life course",
    color: "from-sky-500/10 to-sky-500/5 border-sky-400/30 text-sky-600 dark:text-sky-400 hover:border-sky-400/60 hover:bg-sky-500/10",
    testId: "link-brain-health-determinants",
  },
  {
    label: "Brain Capital",
    icon: Lightbulb,
    href: "https://www.mckinsey.com/mhi/our-insights/the-human-advantage-stronger-brains-in-the-age-of-ai#/",
    description: "Brain health + brain skills as an economic priority",
    color: "from-emerald-500/10 to-emerald-500/5 border-emerald-400/30 text-emerald-600 dark:text-emerald-400 hover:border-emerald-400/60 hover:bg-emerald-500/10",
    testId: "link-brain-capital",
  },
] as const;

function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
      className="relative flex items-center justify-center"
      data-testid="profile-photo-container"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#085a64]/40 via-[#a4d3df]/20 to-[#2f2145]/30 blur-2xl scale-110 pointer-events-none" />

      {/* Rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-12px] rounded-full border border-dashed border-[#a4d3df]/30 pointer-events-none"
      />

      {/* Static ring */}
      <div className="absolute inset-[-6px] rounded-full border border-[#085a64]/40 pointer-events-none" />

      {/* Photo circle */}
      <div
        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#085a64]/60 shadow-[0_0_40px_rgba(8,90,100,0.3)]"
        data-testid="profile-photo"
      >
        <img
          src={HEADSHOT_PATH}
          alt="Dr. David Andai"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Credential badge — floats bottom-right */}
      <a
        href={MINDS_LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-0 sm:bottom-4 sm:right-[-8px] bg-[#085a64]/90 backdrop-blur-md border border-[#a4d3df]/20 rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg hover:bg-[#085a64] hover:border-[#a4d3df]/40 transition-colors"
      >
        <p className="text-[8px] sm:text-[10px] font-mono text-[#a4d3df]/70 uppercase tracking-widest">MINDS Scholar</p>
        <p className="text-xs sm:text-sm font-bold text-[#f8f9fa]">2026</p>
      </a>
    </motion.div>
  );
}

export function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none dark:opacity-30">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[250px] h-[250px] rounded-full bg-secondary/20 blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* LEFT — Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex-1 text-center lg:text-left"
          >
            {/* Research focus topic buttons */}
            <motion.div variants={itemVariants} className="mb-5 sm:mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60 mb-2 sm:mb-3 text-left">
                Research Focus
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-3 justify-start">
                {BRAIN_TOPICS.map(({ label, icon: Icon, href, description, color, testId }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={testId}
                    title={description}
                    className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border bg-gradient-to-r text-[10px] sm:text-xs font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${color}`}
                  >
                    <Icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-4"
            >
              Brain Health <span className="text-[#a4d3df]">×</span> Brain Skills
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              Advancing brain capital in Africa through public health, neuroscience and machine learning intervention tools.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-6 mt-3 sm:mt-0">
              <p className="text-xs sm:text-base text-[#085a64] dark:text-[#a4d3df] mt-0 font-medium leading-relaxed">
                <a
                  href="https://neuroscience.uct.ac.za/mneurosc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                >
                  Master of Neuroscience at University of Cape Town 2026
                </a>
                <span className="opacity-50 mx-2">·</span>
                <a
                  href="https://minds-africa.org/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                >
                  The Mandela Institute for Development Studies (MINDS) 2026
                </a>
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start"
            >
              <Button
                size="sm"
                className="hover-elevate bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(164,211,223,0.4)] gap-1.5 group sm:size-lg sm:gap-2"
                asChild
                data-testid="button-download-cv"
              >
                <a href="/cv.pdf" download>
                  <Download className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform sm:w-4 sm:h-4" />
                  <span>Download CV</span>
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="hover-elevate gap-1.5 border-[#085a64]/50 text-[#085a64] dark:text-[#a4d3df] hover:bg-[#085a64]/10 sm:gap-2"
                asChild
                data-testid="link-medical-licence"
              >
                <a href="https://osp.kmpdc.go.ke/auth?type=practice_licence&id=7022c6025eb2fe6e46db24fd1aa9662e" target="_blank" rel="noopener noreferrer">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Medical Licence</span>
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="hover-elevate gap-1.5 sm:gap-2"
                asChild
                data-testid="link-neural-dome"
              >
                <a href="#projects">
                  <span>Neural Dome Projects</span>
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="hover-elevate gap-1.5 sm:gap-2"
                asChild
                data-testid="link-collaborate-email"
              >
                <a href="mailto:andaidavid8@gmail.com">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Collaborate</span>
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="hover-elevate gap-1.5 sm:gap-2"
                asChild
                data-testid="link-collaborate-linkedin"
              >
                <a href={MY_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Connect on LinkedIn</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-border/50 flex flex-wrap gap-x-6 gap-y-4 font-mono text-sm text-muted-foreground/80 items-center justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>MINDS Leadership Scholarship 2026</span>
              </div>
              <div className="hidden sm:block text-border/50">•</div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Early Career Researcher Award, AKU 2025</span>
              </div>
              <div className="hidden sm:block text-border/50">•</div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Peer-Reviewed Publications</span>
              </div>
              <div className="hidden md:block text-border/50">•</div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Co-founder, Afiadata</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Profile photo */}
          <div className="flex-shrink-0">
            <ProfilePhoto />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <a href="#skills" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
