import { Mail, Phone, Linkedin, Instagram, Dribbble } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="bg-brand-primary text-white py-20">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Contacto</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a
            href="mailto:ennarociojc@gmail.com"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-full transition-colors backdrop-blur-sm border border-white/20"
          >
            <Mail className="text-brand-accent" />
            <span>ennarociojc@gmail.com</span>
          </a>
          <a
            href="https://wa.me/573024391651"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-full transition-colors backdrop-blur-sm border border-white/20"
          >
            <Phone className="text-brand-accent" />
            <span>+57 302 439 1651</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rocio-jc/"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-full transition-colors backdrop-blur-sm border border-white/20"
          >
            <Linkedin className="text-brand-accent" />
            <span>rocio-jc</span>
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-sm opacity-60">
          <p>
            © {new Date().getFullYear()} Rocio Jiménez. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
