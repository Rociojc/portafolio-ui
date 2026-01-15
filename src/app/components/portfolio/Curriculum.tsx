import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import previewImage from "@/assets/hero-image.jpeg";

export function Curriculum() {
  return (
    <section id="cv" className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-brand-light rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>

          <div className="w-full md:w-1/2 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Experiencia y Educación
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Como Diseñadora UX/UI Junior con un sólido perfil en Desarrollo
              Front-End, combino la investigación centrada en el usuario con la
              implementación técnica efectiva. Descarga mi CV para ver el
              detalle completo de mis habilidades y experiencia.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary shadow-sm shrink-0">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">Educación</h4>
                  <p className="text-sm text-gray-500">
                    Tech Developer | Digital House
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary shadow-sm shrink-0">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">Experiencia</h4>
                  <p className="text-sm text-gray-500">
                    Frontend Developer Jr | Infracommerce Latam
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="/cv-rocio-jimenez-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-secondary text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-brand-secondary/90 transition-all flex items-center gap-3 w-fit cursor-pointer"
            >
              <Download size={20} />
              Descargar Curriculum
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative z-10 flex justify-center"
          >
            {/* CV Preview Card */}
            <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-100">
              <div className="flex items-center gap-4 border-b pb-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={previewImage}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-20 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full bg-gray-100 rounded"></div>
                <div className="h-3 w-full bg-gray-100 rounded"></div>
                <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
                <div className="mt-6 h-32 bg-gray-50 rounded w-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300">
                  <FileText size={40} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
