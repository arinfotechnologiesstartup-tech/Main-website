import { motion } from "motion/react";

const techCategories = [
  {
    title: "Frontend Development",
    techs: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Framer Motion"]
  },
  {
    title: "Backend Engine",
    techs: ["Node.js", "Express.js", "PHP", "Python", "REST APIs", "GraphQL"]
  },
  {
    title: "Database & Cloud",
    techs: ["MySQL", "MongoDB", "Firebase", "PostgreSQL", "AWS", "Google Cloud"]
  },
  {
    title: "DevOps & Tools",
    techs: ["GitHub", "Figma", "VS Code", "Postman", "Docker", "Vercel"]
  }
];

export function Technologies() {
  return (
    <section id="technologies" className="py-24 relative border-y border-white/5">
      <div className="absolute inset-0 bg-[#0a0f25]/50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Future-Proof <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We utilize enterprise-grade technologies to build secure, scalable, and high-performance digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-purple-500" />
                <h3 className="text-xl font-bold text-white tracking-widest uppercase text-sm">
                  {cat.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {cat.techs.map((tech, i) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.5)" }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-widest transition-colors cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
