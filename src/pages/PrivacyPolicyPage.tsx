import { motion } from "motion/react";

export function PrivacyPolicyPage() {
  return (
    <section className="py-24 relative z-10 pt-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Policy</span>
          </h1>
          
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you use our website or services. This may include personal information such as your name, email address, phone number, and any other information you choose to provide.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. We do not sell your personal information to third parties.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Data Security</h2>
            <p>
              We implement reasonable security measures to protect the confidentiality and security of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@arinfotechnologies.online.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
