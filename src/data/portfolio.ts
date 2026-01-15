import heroImage from "@/assets/hero-image.jpeg";
import aboutMeImage from "@/assets/about-me-image.jpeg";
import laComarcaImage from "@/assets/home_la_comarca.png";
import rentMeUpImage from "@/assets/home_rent_me_up.jpg";
import dataConsultoresImage from "@/assets/home_data_consultores.png";
import rutinasGimnasioImage from "@/assets/home_rutinas_gimnasio.png";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  url?: string;
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
  role: "Diseñadora UX/UI",
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
    title: "La Comarca",
    category: "UX/UI Design",
    description:
      "Rediseño de la experiencia digital para un desarrollo residencial sostenible, enfocado en conversión y usabilidad.",
    longDescription:
      "La Comarca es el proyecto más reciente en mi trayectoria, donde realicé un rediseño integral de su plataforma digital. El objetivo principal fue optimizar el flujo de navegación para potenciales usuarios. Desarrollé prototipos interactivos de alta fidelidad. Apliqué principios de diseño emocional para conectar los valores de sostenibilidad de la marca con la interfaz visual, logrando una estructura limpia y moderna.",
    image: laComarcaImage,
    tags: ["Figma", "Prototyping", "html", "css", "react"],
    url: "https://la-comarca-web.netlify.app/",
  },
  {
    id: 2,
    title: "Rent Me Up",
    category: "Web Development",
    description:
      "Proyecto integrador desarrollado como parte del programa de certificación en Desarrollo Front-End en Digital House.",
    longDescription:
      "Participé como desarrolladora front-end, implementando la interfaz y funcionalidad principal del sitio web de reservas. Desarrollé la aplicación utilizando React.js, con estilos en Styled Components y consumo de API REST. Apliqué buenas prácticas de diseño responsive, asegurando una experiencia consistente en diferentes dispositivos. Colaboré con el equipo de backend en la integración de la API (Java + Spring Security + JWT + MySQL). Participé en la documentación UML y organización de la base de datos bajo Metodologías Ágiles (Scrum).",
    image: rentMeUpImage,
    tags: ["html", "css", "react"],
  },
  {
    id: 3,
    title: "Data Consultores",
    category: "Web Design",
    description:
      "Diseño y desarrollo de sitio web institucional para consultoría empresarial, enfocado en jerarquía visual.",
    longDescription:
      "Diseñé y desarrollé la página web institucional para Data Consultores S.A.S, una empresa de consultoría, con el objetivo de fortalecer mi experiencia en desarrollo web y diseño visual. El proceso comenzó con la creación de mockups y prototipos de alta fidelidad en Figma, aplicando una composición moderna y limpia. Posteriormente, desarrollé el frontend utilizando HTML y CSS nativo, asegurando un diseño totalmente responsivo que se adapta perfectamente a dispositivos móviles y de escritorio. Durante el desarrollo, apliqué principios básicos de estructura y jerarquía visual para optimizar la presentación de los servicios y mejorar la navegación del usuario final.",
    image: dataConsultoresImage,
    tags: ["Figma", "Prototyping", "html", "css"],
    url: "https://data-consultores.netlify.app/",
  },
  {
    id: 4,
    title: "Rutinas de Gimnasio",
    category: "Web Design",
    description:
      "Desarrollo de un sitio web informativo masivo con rutinas personalizadas y contenido multimedia.",
    longDescription:
      "Durante este proyecto desarrollé un sitio web informativo integral para un gimnasio local, con el objetivo de practicar mis habilidades en desarrollo web y diseño visual de gran escala. El desafío incluyó el diseño de mockups y prototipos en Figma, respetando y potenciando el branding existente (logos, paleta de colores e imágenes). Desarrollé un sistema de 24 páginas HTML con estilos CSS responsivos, organizando rutinas de entrenamiento diferenciadas por días y género, cada una con descripciones detalladas, imágenes de apoyo y videos explicativos. Este proyecto marcó mi primer acercamiento al diseño digital de forma autodidacta, implementando principios fundamentales de estructura visual y usabilidad.",
    image: rutinasGimnasioImage,
    tags: ["Figma", "Prototyping", "html", "css"],
    url: "https://rutinas-de-gimnasio.netlify.app/",
  },
];
