import heroImage from "@/assets/hero-image.jpeg";
import aboutMeImage from "@/assets/about-me-image.jpeg";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  url: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  title: string;
  description: string[];
  image: string;
}

export const heroData: HeroData = {
  greeting: "Hola, soy",
  name: "Rocio Jiménez",
  role: "Diseñadora UX/UI Junior",
  description:
    "Creo experiencias digitales funcionales y estéticas, con atención al detalle y capacidad técnica para dar vida a proyectos digitales.",
  image: heroImage,
};

export const aboutData: AboutData = {
  title: "Acerca de mí",
  description: [
    "Soy Diseñadora UX/UI Junior con una fuerte motivación por crear experiencias digitales claras, útiles y centradas en las personas. Vengo del mundo del desarrollo Frontend, lo que me permitió entender cómo se construyen los productos por dentro, y hoy aplico ese conocimiento para diseñar soluciones más completas, funcionales y viables.",
    "Me apasiona resolver problemas reales, organizar ideas complejas y convertirlas en interfaces simples que cualquier persona pueda usar sin esfuerzo. Disfruto especialmente las etapas de investigación, porque creo que un buen diseño siempre empieza escuchando, observando y comprendiendo a los usuarios.",
    "Trabajo con herramientas como Figma, FigmaMake y metodologías centradas en el usuario, y estoy en constante aprendizaje para fortalecer mis habilidades in investigación, arquitectura de información, prototipado y diseño visual.",
    "Cuando diseño, busco que cada decisión tenga un propósito y que el producto final no solo se vea bien, sino que genere una experiencia significativa.",
  ],
  image: aboutMeImage,
};

export const projects: Project[] = [
  {
    id: 1,
    title: "EcoTrack Mobile App",
    category: "UX/UI Design",
    description:
      "Una aplicación móvil para ayudar a los usuarios a reducir su huella de carbono mediante el seguimiento de hábitos diarios.",
    longDescription:
      "EcoTrack es una solución integral diseñada para empoderar a los individuos en la lucha contra el cambio climático. A través de una interfaz intuitiva y gamificada, los usuarios pueden registrar sus actividades diarias, recibir consejos personalizados para reducir su consumo y visualizar su impacto ambiental positivo a lo largo del tiempo. El proyecto incluyó investigación de usuarios, wireframing, prototipado de alta fidelidad y pruebas de usabilidad.",
    image:
      "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjB1aXxlbnwxfHx8fDE3NjgzMjM5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Figma", "Prototyping", "User Research"],
    url: "https://dribbble.com",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    category: "UI Design",
    description:
      "Diseño de un panel de control para visualización de datos complejos en tiempo real para una empresa SaaS.",
    longDescription:
      "Este dashboard fue creado para una empresa SaaS que necesitaba simplificar la visualización de métricas complejas para sus clientes empresariales. El desafío principal fue organizar grandes volúmenes de datos en una estructura jerárquica clara sin abrumar al usuario. Utilicé un esquema de color oscuro para reducir la fatiga visual y destaqué las métricas clave con colores de acento vibrantes.",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbiUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc2ODMxNDU3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Dashboard", "Data Viz", "Dark Mode"],
    url: "https://behance.net",
  },
  {
    id: 3,
    title: "Modern Portfolio Web",
    category: "Web Design",
    description:
      "Diseño de sitio web personal para un fotógrafo, enfocándose en la presentación visual y tipografía.",
    longDescription:
      "Un sitio web minimalista y elegante diseñado para destacar el trabajo fotográfico del cliente. La interfaz pasa a un segundo plano, permitiendo que las imágenes sean las protagonistas. Se implementó una navegación fluida y animaciones sutiles para crear una experiencia de usuario inmersiva y sofisticada.",
    image:
      "https://images.unsplash.com/photo-1760008486593-a85315610136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbGFuZGluZyUyMHBhZ2UlMjBkZXNpZ258ZW58MXx8fHwxNzY4MzIzOTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Web", "Responsive", "Minimalist"],
    url: "https://github.com",
  },
];
