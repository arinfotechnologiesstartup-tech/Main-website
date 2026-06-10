import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative bg-[#050816] border-t border-purple-500/20 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6 group cursor-pointer inline-flex">
              <img
                src="/logo.png"
                alt="AR InfoTechnologies"
                className="h-20 md:h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Engineering The Digital Frontier. We build modern websites, custom software, and enterprise applications for visionary brands globally.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 shadow-lg hover:shadow-purple-500/20 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 shadow-lg hover:shadow-purple-500/20 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 shadow-lg hover:shadow-purple-500/20 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/916204963147" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[#25D366]/20 transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6 text-purple-400">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">Portfolio</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">Our Services</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6 text-purple-400">Major Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">Website Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">Custom Software</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">Mobile App Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">Brand Identity Setup</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">CRM / ERP Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6 text-purple-400">Contact Details</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm font-medium">
                <span className="block text-white mb-1">Phone:</span>
                +91 6204963147<br />+91 9304203985
              </li>
              <li className="text-slate-400 text-sm font-medium">
                <span className="block text-white mb-1">Email:</span>
                info@arinfotechnologies.online
                arinfotechnologies.startup@gmail.com
              </li>
              <li className="text-slate-400 text-sm font-medium">
                <span className="block text-white mb-1">Website:</span>
                www.arinfotechnologies.online
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 AR InfoTechnologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
