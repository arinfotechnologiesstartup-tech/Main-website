import { motion } from "motion/react";

export function TermsOfServicePage() {
  return (
    <section className="py-24 relative z-10 pt-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Service</span>
          </h1>
          
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on AR InfoTechnologies' website for personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Disclaimer</h2>
            <p>
              The materials on AR InfoTechnologies' website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall AR InfoTechnologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AR InfoTechnologies' website.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
