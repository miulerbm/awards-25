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
    image: "/images/team/member1.jpg",
  },
  {
    name: "Paúl Ramírez",
    role: "Scrum Master",
    description:
      "Scrum Master del proyecto. Facilita la metodología ágil, coordina al equipo y asegura la entrega continua de valor en cada sprint.",
    image: "/images/team/member3.jpg",
  },
  {
    name: "Cristian Juárez",
    role: "DevSecOps",
    description:
      "Ingeniero DevSecOps. Gestiona la infraestructura, CI/CD, seguridad y monitoreo de la plataforma para garantizar disponibilidad y protección.",
    image: "/images/team/member4.jpg",
  },
  {
    name: "Miuler Blas",
    role: "Desarrollador wek",
    description:
      "Desarrollador web full stack. Responsable del diseño y desarrollo de la plataforma digital de votación y gestión de los awards.",
    image: "/images/team/member2.jpg",
  },
];
