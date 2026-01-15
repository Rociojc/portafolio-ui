import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects, Project } from "@/data/portfolio";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-8 xl:max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-primary mb-4">
            Mis Proyectos
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Una selección de mis trabajos recientes donde exploro soluciones
            creativas y funcionales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white px-6 py-2 border-2 border-white rounded-full font-bold hover:bg-white hover:text-brand-primary transition-colors flex items-center gap-2">
                    Ver Más <ExternalLink size={18} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-bold text-brand-secondary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-brand-primary mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
