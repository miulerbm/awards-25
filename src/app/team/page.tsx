import Image from "next/image";
import { teamMembers } from "./teamData";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-awards-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestro Equipo
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Conoce a las personas que hacen posible esta plataforma. Un equipo
            multidisciplinario comprometido con crear la mejor experiencia de
            votación.
          </p>
        </div>

        {/* Team Description */}
        <div className="mb-16">
          <div className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quiénes Somos
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Somos un equipo diverso de profesionales dedicados a celebrar la
              excelencia los kktrónicos en todas sus formas. Nuestra misión es
              proporcionar una plataforma justa, transparente y accesible donde
              las voces de la comunidad puedan ser escuchadas.
            </p>
            <p className="text-white/80 leading-relaxed">
              Con experiencia en tecnología, diseño, contenido y análisis de
              datos, trabajamos juntos para garantizar que cada voto cuente y
              que la experiencia sea inolvidable para todos los participantes.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 bg-secondary-700/50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
