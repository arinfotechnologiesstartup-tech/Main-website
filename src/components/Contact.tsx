import { motion } from "motion/react";
import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Project</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Ready to transform your ideas into reality? Contact us today for a free consultation and project quote.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#0b112c]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 h-full relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />

              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                <a href="tel:6204963147" className="flex items-center gap-4 text-slate-300 hover:text-white group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-1">Call Us Directly</div>
                    <div className="font-bold text-sm">+91 6204963147<br />+91 9304203985</div>
                  </div>
                </a>

                <a href="mailto:info@arinfotechnologies.online" className="flex items-center gap-4 text-slate-300 hover:text-white group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-1">Email Address</div>
                    <div className="font-bold text-sm">info@arinfotechnologies.online</div>
                    <div className="font-bold text-sm">arinfotechnologies.startup@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-1">Website</div>
                    <div className="font-bold text-sm">www.arinfotechnologies.online</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-1">Headquarters</div>
                    <div className="font-bold text-sm">Ranchi Jharkhand, INDIA</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-[#0b112c]/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col gap-6 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-white mb-2">Send an Inquiry</h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Service Required</label>
                  <select
                    className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-400 focus:outline-none focus:border-purple-500 transition-colors appearance-none font-medium"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="web" className="text-slate-900">Website Development</option>
                    <option value="software" className="text-slate-900">Custom Software</option>
                    <option value="mobile" className="text-slate-900">Mobile App</option>
                    <option value="brand" className="text-slate-900">Brand Identity</option>
                    <option value="crm" className="text-slate-900">CRM / ERP</option>
                    <option value="other" className="text-slate-900">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 transition-all"
              >
                Send Inquiry
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
