import heroImage from '@/assets/hero-image.jpeg';

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
  stats: Stat[];
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
    "Soy una apasionada diseñadora UX/UI con un enfoque en crear interfaces limpias, accesibles y emocionalmente resonantes. Mi viaje en el diseño comenzó con una fascinación por cómo las personas interactúan con la tecnología.",
    "Me especializo en transformar problemas complejos en soluciones simples y elegantes. Creo firmemente que el buen diseño no solo se ve bien, sino que funciona a la perfección para el usuario final.",
    "Cuando no estoy diseñando, me encontrarás explorando nuevas cafeterías, aprendiendo sobre psicología cognitiva o simplemente disfrutando de un buen libro.",
  ],
  image:
    "https://images.unsplash.com/photo-1519337364444-c5eeec430101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya2luZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjgzMjM5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  stats: [
    { value: "2+", label: "Años de Exp." },
    { value: "15+", label: "Proyectos" },
    { value: "100%", label: "Dedicación" },
  ],
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
