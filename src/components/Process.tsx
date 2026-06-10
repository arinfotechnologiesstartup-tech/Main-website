import { motion } from "motion/react";
import { MessageSquare, Layout, Code, Bug, Rocket, Wrench } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Requirement Analysis", desc: "Understanding your vision, business goals, and defining technical requirements." },
  { icon: Layout, title: "Planning & Design", desc: "Creating wireframes, architectural setups, and premium UI/UX designs." },
  { icon: Code, title: "Development", desc: "Writing clean, scalable code using modern technologies and frameworks." },
  { icon: Bug, title: "Testing", desc: "Rigorous quality assurance, security checks, and performance optimization." },
  { icon: Rocket, title: "Deployment", desc: "Launching your product to live servers with zero downtime." },
  { icon: Wrench, title: "Support & Maintenance", desc: "Continuous monitoring, updates, and 24/7 technical support." }
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Process</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A battle-tested structured workflow designed to deliver premium quality solutions consistently.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-0 w-full h-1 bg-white/5 rounded-full" />
          <div className="hidden lg:block absolute top-[44px] left-0 w-[50%] h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center lg:mt-0"
              >
                {/* Connector Line (Mobile/Tablet) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-[44px] left-[50%] w-[2px] h-[calc(100%+32px)] bg-white/10 -z-10" />
                )}
                
                {/* Step Circle */}
                <div className="w-[88px] h-[88px] rounded-full bg-[#050816] border-4 border-white/5 flex items-center justify-center relative z-10 mb-6 group hover:border-purple-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">
                  <div className="absolute inset-2 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-colors" />
                  <step.icon size={28} className="text-slate-400 group-hover:text-white transition-colors" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-purple-500/50">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 w-full max-w-[200px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
