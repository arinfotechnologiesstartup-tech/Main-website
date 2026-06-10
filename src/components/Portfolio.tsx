import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Website Projects", "Software Projects", "Mobile Apps", "Branding Projects"];

const projects = [
  {
    id: 1,
    title: "Enterprise CRM Platform",
    category: "Software Projects",
    desc: "A comprehensive real estate CRM with advanced analytics and lead management.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "AI Health & Fitness Tracker",
    category: "Mobile Apps",
    desc: "Smart fitness companion with real-time heart rate monitoring, AI-driven workout plans, and calorie tracking.",
    tech: ["React Native", "TensorFlow", "Firebase"],
    img: "/health-fitness-app.png"
  },
  {
    id: 3,
    title: "SaaS Marketing Website",
    category: "Website Projects",
    desc: "High-converting animated landing page for a modern AI startup.",
    tech: ["Next.js", "Tailwind CSS", "Framer"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Global Logistics ERP",
    category: "Software Projects",
    desc: "End-to-end supply chain management software handling international fleets.",
    tech: ["React", "Express", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "E-Commerce Mobile App",
    category: "Mobile Apps",
    desc: "Seamless shopping experience with 3D product previews and fast checkout.",
    tech: ["React Native", "GraphQL", "AWS"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Nexus Tech Rebrand",
    category: "Branding Projects",
    desc: "Complete visual identity overhaul including logo, typography, and stationery.",
    tech: ["Figma", "Illustrator", "Photoshop"],
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

import { Link } from "react-router-dom";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Our Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Works</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Explore our portfolio of premium web applications, enterprise software, and stunning brand identities.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20" 
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 shadow-2xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-[#050816]/80 backdrop-blur-md text-xs font-bold uppercase tracking-tight text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-bold text-purple-400">
                          #{t}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-purple-600 group-hover:border-purple-600 shadow-lg group-hover:shadow-purple-500/20 transition-all">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/50 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/20 font-bold transition-all">
            Start Your Project
          </Link>
        </div>

      </div>
    </section>
  );
}
