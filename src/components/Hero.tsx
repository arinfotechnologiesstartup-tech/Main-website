import { motion } from "motion/react";
import { ArrowRight, Code2, Cpu, Database, LayoutTemplate, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Particles } from "./ui/Particles";

const techBadges = [
  "React", "Node.js", "Next.js", "MongoDB", "MySQL", "Tailwind", "Flutter", "Firebase"
];

const floatingIcons = [
  { icon: Code2, delay: 0, x: -50, y: -20 },
  { icon: Smartphone, delay: 1, x: 50, y: 30 },
  { icon: Database, delay: 2, x: 30, y: -60 },
  { icon: LayoutTemplate, delay: 0.5, x: -40, y: 50 },
  { icon: Cpu, delay: 1.5, x: 0, y: 40 },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-brand-black z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] mix-blend-screen mix-blend-lighten pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <Particles />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              </span>
              <span>Engineering The Digital Frontier</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Transforming Ideas Into <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Digital Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              We build modern websites, custom software, mobile applications, CRM systems, branding assets, and complete digital solutions that help businesses grow.
            </p>
            
            <div className="flex flex-wrap items-center space-x-6 pt-4">
              <Link 
                to="/contact"
                className="px-8 py-4 rounded-xl bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/20 flex items-center group transition-all hover:bg-purple-500"
              >
                Get Started
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
              >
                View Services
              </Link>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Card & Floating Elements */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center">
            
            {/* Center Glowing Logo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative z-20 w-80 h-80 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center cursor-default hover:border-purple-500/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl" />
              <div className="relative w-32 h-32 flex items-center justify-center bg-[#050816] border border-purple-500/50 rounded-2xl mb-6 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                <span className="font-black text-6xl text-white">AR</span>
              </div>
              <h3 className="relative text-2xl font-bold text-white text-center">AR InfoTechnologies</h3>
            </motion.div>

            {/* Floating Tech Badges */}
            {techBadges.map((tech, i) => {
              const angle = (i * 360) / techBadges.length;
              const radius = 220;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: 1, 
                    x, 
                    y,
                    transition: { duration: 1, delay: i * 0.1 }
                  }}
                  className="absolute z-10 px-4 py-2 rounded-lg glass border border-white/5 text-sm font-medium text-gray-300 backdrop-blur-xl shrink-0 whitespace-nowrap"
                >
                  {tech}
                </motion.div>
              );
            })}

            {/* Floating Orbiting Icons */}
            {floatingIcons.map((item, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [item.y, item.y - 15, item.y],
                  x: [item.x, item.x + 10, item.x],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + i,
                  delay: item.delay,
                  ease: "easeInOut",
                }}
                className="absolute z-30 p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/30 text-brand-purple-light backdrop-blur-md"
                style={{
                  top: `calc(50% + ${item.y * 2}px)`,
                  left: `calc(50% + ${item.x * 2}px)`,
                }}
              >
                <item.icon size={24} />
              </motion.div>
            ))}

          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-purple to-transparent" />
      </motion.div>
    </section>
  );
}
