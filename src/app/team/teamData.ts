export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Luis Sánchez",
    role: "CEO de los Xino Awards",
    description:
      "Fundador y CEO de los Xino Awards. Lidera la visión estratégica del evento y coordina todos los aspectos de producción y ejecución.",
    image: "/images/team/Team-Luis.webp",
  },
  {
    name: "Paúl Ramírez",
    role: "Scrum Master",
    description:
      "Pregunta ¿Cómo Vamos con el proyecto? cada vez que el CEO le recuerda que está chambeando.",
    image: "/images/team/Team-Paul.webp",
  },
  {
    name: "Cristian Juárez",
    role: "DevSecOps",
    description:
      "Ingeniero DevSecOps. Gestiona la infraestructura, CI/CD, seguridad y monitoreo de la plataforma para garantizar disponibilidad y protección.",
    image: "/images/team/Team-Cristian.webp",
  },
  {
    name: "Miuler Blas",
    role: "Desarrollador wek",
    description:
      "Desarrollador web full stack. Responsable del diseño y desarrollo de la plataforma digital de votación y gestión de los awards.",
    image: "/images/team/Team-Miuler.webp",
  },
];
