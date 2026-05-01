import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Let's connect.
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-6" />
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Open to collaboration on brain health research, health data science, artificial intelligence and machine learning projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground hover-elevate transition-all" asChild>
                    <a href="mailto:andaidavid8@gmail.com">
                      <Mail className="w-4 h-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 bg-background/50 hover-elevate transition-all" asChild>
                    <a href="mailto:info@afiadata.org">
                      <Mail className="w-4 h-4" />
                      Email Afiadata
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:andaidavid8@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-accent/10 hover:border-accent/30 transition-all group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-muted-foreground mb-1 uppercase tracking-wider">Email</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">andaidavid8@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/david-andai-md-msc-49a560116" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-accent/10 hover:border-accent/30 transition-all group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-muted-foreground mb-1 uppercase tracking-wider">LinkedIn</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">David Andai</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/Dr-andai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-accent/10 hover:border-accent/30 transition-all group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-muted-foreground mb-1 uppercase tracking-wider">GitHub</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">@Dr-andai</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}