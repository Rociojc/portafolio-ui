import { Mail, Phone, Linkedin, Instagram, Dribbble } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="bg-brand-primary text-white py-20">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Hablemos</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
          ¿Tienes un proyecto en mente o simplemente quieres saludar? ¡Me
          encantaría saber de ti!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a
            href="mailto:hola@mariaui.com"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-full transition-colors backdrop-blur-sm border border-white/20"
          >
            <Mail className="text-brand-accent" />
            <span>hola@mariaui.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-full transition-colors backdrop-blur-sm border border-white/20"
          >
            <Phone className="text-brand-accent" />
            <span>+34 123 456 789</span>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="p-3 bg-white text-brand-primary rounded-full hover:bg-brand-accent hover:text-white transition-all transform hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-white text-brand-primary rounded-full hover:bg-brand-accent hover:text-white transition-all transform hover:-translate-y-1"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="p-3 bg-white text-brand-primary rounded-full hover:bg-brand-accent hover:text-white transition-all transform hover:-translate-y-1"
          >
            <Dribbble size={24} />
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-sm opacity-60">
          <p>
            © {new Date().getFullYear()} María González. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
