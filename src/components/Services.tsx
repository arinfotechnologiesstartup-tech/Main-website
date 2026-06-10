import { motion } from "motion/react";
import { 
  Globe, 
  CodeSquare, 
  Smartphone, 
  Palette, 
  FileText, 
  IdCard, 
  Database, 
  Cloud 
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Website Development",
    icon: Globe,
    description: "Modern, responsive, and high-performance websites built for ultimate digital presence.",
    features: ["Business Websites", "Portfolio Websites", "Corporate Websites", "E-commerce", "Landing Pages"],
  },
  {
    id: "02",
    title: "Custom Software",
    icon: CodeSquare,
    description: "Scalable software solutions tailored to solve your complex business challenges.",
    features: ["ERP Solutions", "CRM Systems", "Management Software", "Automation", "Custom Dashboards"],
  },
  {
    id: "03",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications that users love to engage with.",
    features: ["Android Apps", "iOS Apps", "Hybrid Apps", "Business Apps"],
  },
  {
    id: "04",
    title: "Logo & Brand Identity",
    icon: Palette,
    description: "Distinctive branding packages that make your company stand out in the market.",
    features: ["Logo Design", "Brand Guidelines", "Social Media Branding"],
  },
  {
    id: "05",
    title: "Corporate Stationery",
    icon: FileText,
    description: "Professional print designs to maintain a cohesive corporate identity everywhere.",
    features: ["Letter Pads", "Business Cards", "Invoice Templates", "Company Profiles"],
  },
  {
    id: "06",
    title: "ID & Corporate Design",
    icon: IdCard,
    description: "Secure and premium identity designs for your employees and corporate access.",
    features: ["Employee ID Cards", "Access Cards", "Corporate Materials"],
  },
  {
    id: "07",
    title: "CRM / ERP Solutions",
    icon: Database,
    description: "Enterprise resource planning and customer relationship management tools.",
    features: ["Real Estate CRM", "School ERP", "Lead Management", "Sales Automation"],
  },
  {
    id: "08",
    title: "Hosting & Domains",
    icon: Cloud,
    description: "Reliable, secure web hosting and premium domain registration services.",
    features: ["Domain Registration", "Web Hosting", "Business Emails", "SSL Security"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span>Capabilities</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Premium Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            We provide end-to-end digital engineering and creative design services, helping enterprises and visionaries scale with world-class technology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all flex flex-col h-full relative overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Top corner gradient highlight */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                    <service.icon size={20} />
                  </div>
                  <span className="font-bold text-xl text-white/10 group-hover:text-white/20 transition-colors">
                    {service.id}
                  </span>
                </div>
                
                <h3 className="font-bold text-white uppercase text-sm tracking-widest mb-3">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-400 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-[11px] font-bold text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mr-2 group-hover:bg-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-4 border-t border-white/5 transition-colors">
                  <button className="text-[11px] font-bold text-purple-400 flex items-center group/btn uppercase tracking-widest">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
