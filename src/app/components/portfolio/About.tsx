import { motion } from "motion/react";
import { aboutData } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto">
              <img
                src={aboutData.image}
                alt="Working at laptop"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-accent rounded-full -z-10 opacity-50 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-primary rounded-full -z-10 opacity-50 blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              {aboutData.title}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {aboutData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
