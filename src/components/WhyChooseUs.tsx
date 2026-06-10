import { motion } from "motion/react";
import { Zap, DollarSign, Clock, Maximize, Headset, Shield, Settings, Rocket } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Modern Technologies", desc: "Built with the latest tech stack for peak performance." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium enterprise quality at competitive rates." },
  { icon: Clock, title: "Fast Delivery", desc: "Rapid development cycles without compromising quality." },
  { icon: Maximize, title: "Scalable Solutions", desc: "Architecture designed to grow seamlessly with your business." },
  { icon: Headset, title: "Dedicated Support", desc: "24/7 technical support and maintenance team at your service." },
  { icon: Shield, title: "Secure Architecture", desc: "Bank-grade security protocols to protect your sensitive data." },
  { icon: Settings, title: "Custom Development", desc: "100% tailor-made solutions specific to your business needs." },
  { icon: Rocket, title: "Future Ready", desc: "Forward-thinking designs and code meant to last." }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Why Industry Leaders Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">AR InfoTechnologies</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We don't just write code; we engineer premium digital experiences. Our commitment to excellence, modern architecture, and client success sets us apart from the rest.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 text-3xl font-bold">100%</div>
                  <div className="text-sm text-slate-400 font-medium">In-house development<br/>No outsourcing</div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 text-3xl font-bold">QA</div>
                  <div className="text-sm text-slate-400 font-medium">Rigorous testing<br/>for bug-free delivery</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="mb-4 text-purple-500 group-hover:text-purple-400 transition-colors group-hover:scale-110 transform origin-left duration-300">
                  <item.icon size={28} />
                </div>
                <h4 className="text-white font-bold mb-2 tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
