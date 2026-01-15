import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroData } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative bg-gradient-to-br from-brand-light to-white"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-brand-accent/20 text-brand-secondary font-bold mb-4">
            {heroData.greeting}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary mb-6 leading-tight">
            {heroData.name.split(" ")[0]} <br /> {heroData.name.split(" ")[1]}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {heroData.role}
          </p>
          <p className="text-gray-500 mb-8 max-w-lg leading-relaxed">
            {heroData.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-colors flex items-center gap-2"
            >
              Ver Proyectos <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-brand-primary text-brand-primary rounded-full font-bold hover:bg-brand-primary/5 transition-colors"
            >
              Contactame
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={heroData.image}
              alt={`Portrait of ${heroData.name}`}
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          {/* Back accent */}
          <div className="absolute top-10 right-10 w-full h-full bg-brand-secondary rounded-[2rem] -z-10 opacity-20 transform rotate-6"></div>
        </motion.div>
      </div>
    </section>
  );
}
