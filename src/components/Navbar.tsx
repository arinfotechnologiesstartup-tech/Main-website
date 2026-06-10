import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", href: "/", gradient: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(109,40,217,0.1) 50%, rgba(76,29,149,0) 100%)", hoverColor: "group-hover:text-purple-400" },
  { name: "Services", href: "/services", gradient: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(37,99,235,0.1) 50%, rgba(29,78,216,0) 100%)", hoverColor: "group-hover:text-blue-400" },
  { name: "Portfolio", href: "/portfolio", gradient: "radial-gradient(circle, rgba(236,72,153,0.25) 0%, rgba(219,39,119,0.1) 50%, rgba(157,23,77,0) 100%)", hoverColor: "group-hover:text-pink-400" },
  { name: "Technologies", href: "/technologies", gradient: "radial-gradient(circle, rgba(34,197,94,0.25) 0%, rgba(22,163,74,0.1) 50%, rgba(21,128,61,0) 100%)", hoverColor: "group-hover:text-green-400" },
  { name: "About", href: "/about", gradient: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(234,88,12,0.1) 50%, rgba(194,65,12,0) 100%)", hoverColor: "group-hover:text-orange-400" },
  { name: "Contact", href: "/contact", gradient: "radial-gradient(circle, rgba(20,184,166,0.25) 0%, rgba(13,148,136,0.1) 50%, rgba(15,118,110,0) 100%)", hoverColor: "group-hover:text-teal-400" },
];

// 3D flip animation variants
const flipFront: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};
const flipBack: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};
const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.4, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};
const flipTransition = { type: "spring" as const, stiffness: 100, damping: 20, duration: 0.5 };

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-[#0b112c]/80 backdrop-blur-md border border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-in-out",
            scrolled ? "h-20" : "h-52"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group h-full">
            <img
              src="/logo.png"
              alt="AR InfoTechnologies"
              className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                className="relative rounded-xl overflow-visible group"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                {/* Radial gradient glow on hover */}
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                  variants={glowVariants}
                  style={{ background: link.gradient, opacity: 0 }}
                />
                {/* Front face */}
                <motion.div
                  variants={flipFront}
                  transition={flipTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "relative z-10 block px-4 py-2 rounded-xl transition-colors",
                      link.hoverColor,
                      location.pathname === link.href ? "text-white font-bold" : "text-slate-400"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
                {/* Back face (flip reveal) */}
                <motion.div
                  className="absolute inset-0"
                  variants={flipBack}
                  transition={flipTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center top", transform: "rotateX(90deg)" }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "relative z-10 flex items-center justify-center h-full px-4 py-2 rounded-xl font-semibold transition-colors",
                      link.hoverColor,
                      location.pathname === link.href ? "text-white" : "text-slate-400"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Get Quote
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-purple-600 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:bg-purple-500 transition-all inline-flex items-center gap-2"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-white",
                    location.pathname === link.href ? "text-purple-400 font-bold" : "text-gray-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-white/10 my-2" />
              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-3 rounded-xl border border-white/10 text-center font-bold text-white hover:bg-white/5 transition-colors"
                >
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-center font-bold shadow-lg shadow-purple-500/20 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
