import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    project: "Custom Software Development",
    review: "AR InfoTechnologies delivered our enterprise CRM ahead of schedule. The code architecture is pristine, and the UI is exactly the premium SaaS look we requested.",
    rating: 5
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Founder, Elevate Retail",
    project: "E-Commerce Mobile App",
    review: "The mobile app they built transformed our business. Smooth animations, instant loading times, and a flawless checkout process that boosted our sales by 40%.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    project: "Corporate Branding & Website",
    review: "A truly world-class team. From the logo redesign to the incredible next-gen website, they elevated our entire corporate identity to compete with industry giants.",
    rating: 5
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-purple-500/5 mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Success Stories</span>
          </h2>
          <p className="text-slate-400 text-lg">
            See what industry leaders and visionaries say about our engineering and design excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="bg-[#0b112c]/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 relative text-center shadow-2xl"
            >
              <Quote className="absolute top-8 left-8 w-16 h-16 text-white/5" />
              
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-500 text-purple-500" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium mb-10 relative z-10">
                "{testimonials[current].review}"
              </p>
              
              <div className="flex flex-col items-center">
                <div className="text-purple-400 font-bold text-lg">
                  {testimonials[current].name}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1 mb-2 font-bold">
                  {testimonials[current].role}
                </div>
                <div className="inline-flex px-3 py-1 bg-white/5 rounded-full text-[11px] font-bold tracking-widest uppercase text-slate-400 border border-white/5">
                  Project: {testimonials[current].project}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-600 hover:shadow-lg shadow-purple-500/20 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    current === i ? "w-8 bg-purple-500" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-600 hover:shadow-lg shadow-purple-500/20 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
