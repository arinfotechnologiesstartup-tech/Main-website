import { motion } from "motion/react";
import { Target, Eye, ShieldCheck, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              Who We Are
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Building The Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Generation</span> Of Digital Growth
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-8 leading-relaxed"
            >
              AR InfoTechnologies is a technology-driven startup focused on delivering innovative digital solutions including websites, software applications, mobile apps, branding assets, and enterprise business systems.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors"
              >
                <Target className="w-10 h-10 text-purple-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500 leading-relaxed">To engineer robust, scalable software that accelerates business growth and simplifies complex operations globally.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors"
              >
                <Eye className="w-10 h-10 text-purple-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Our Vision</h4>
                <p className="text-sm text-slate-500 leading-relaxed">To establish a global legacy of technological excellence, becoming the most trusted partner for digital transformation.</p>
              </motion.div>
            </div>
          </div>

          {/* Right Visual / Core Values */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-[#0b112c]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative z-10 overflow-hidden shadow-2xl">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <ShieldCheck className="text-purple-500" />
                Core Values
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <span className="text-purple-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Innovation First</h4>
                    <p className="text-sm text-slate-500">We constantly explore new technologies to build modern, future-proof architectures.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Quality Without Compromise</h4>
                    <p className="text-sm text-slate-500">Every line of code and pixel of design meets elite enterprise standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <span className="text-purple-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Client Success</h4>
                    <p className="text-sm text-slate-500">Your business growth is the ultimate metric of our technological success.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stat Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 z-20 shadow-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Users size={24} />
              </div>
              <div>
                <div className="text-white text-2xl font-bold tracking-tight">Dedicated</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Engineering Team</div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>

        {/* Founders Section */}
        <div className="mt-32 border-t border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">Our Founders</h3>
            <p className="text-slate-400">The visionary software developers driving AR InfoTechnologies forward.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors w-full max-w-sm text-center"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Mr. Ronit Singha</h4>
              <p className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">Founder & Software Developer</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Driving technical innovation and ensuring scalable, high-performance architecture for all our enterprise software solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors w-full max-w-sm text-center"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Md Awesh</h4>
              <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Founder & Software Developer</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bringing cutting-edge engineering practices and creative technical problem-solving to deliver premium digital products.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
