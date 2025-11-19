import { Category, Nominee } from "@/types";

// Sección 1: Lefteros del año
const section1 = "Sección 1: Lefteros del año";
// Sección 2: Integrantes del año
const section2 = "Sección 2: Integrantes del año";
// Sección 3: Sucesos del año
const section3 = "Sección 3: Sucesos del año";
// Sección 4: Multimedia del año
const section4 = "Sección 4: Multimedia del año";
// Sección 5: Dateros, Colegiados, Chambeadores y Xino
const section5 = "Sección 5: Dateros, Colegiados, Chambeadores y Xino";
// Sección 6: Destacados del Año
const section6 = "Sección 6: Destacados del Año";

export const mockCategories: Category[] = [
  // Sección 1: Lefteros del año
  {
    id: "mejor-jugador-left",
    title: "El mejor jugador de Left",
    description: "El jugador más destacado en Left 4 Dead 2",
    slug: "mejor-jugador-left",
    order: 1,
    section: section1,
  },
  {
    id: "mas-manco-left",
    title: "El más manco del Left",
    description: "El que más sufre jugando Left 4 Dead 2",
    slug: "mas-manco-left",
    order: 2,
    section: section1,
  },
  {
    id: "mas-odiado-left",
    title: "El más odiado del Left",
    description: "El más odiado por diversas razones en el Left",
    slug: "mas-odiado-left",
    order: 3,
    section: section1,
  },
  {
    id: "humero-left",
    title: "El humero del Left del año",
    description: "El que más quedadas incumplidas tiene",
    slug: "humero-left",
    order: 4,
    section: section1,
  },

  // Sección 2: Integrantes del año
  {
    id: "extranjero-ano",
    title: "El extranjero del año",
    description: "El integrante más internacional del grupo",
    slug: "extranjero-ano",
    order: 5,
    section: section2,
  },
  {
    id: "gymrat-ano",
    title: "El gymrat del Año",
    description: "El más dedicado al gimnasio",
    slug: "gymrat-ano",
    order: 6,
    section: section2,
  },
  {
    id: "mas-kbral",
    title: "El mas kbral del año",
    description: "El más kbral del grupo",
    slug: "mas-kbral",
    order: 7,
    section: section2,
  },
  {
    id: "duazo-ano",
    title: "El duazo de la ptmr del Año",
    description: "La mejor dupla del año",
    slug: "duazo-ano",
    order: 8,
    section: section2,
  },
  {
    id: "parejita-ano",
    title: "La Parejita del Año",
    description: "La mejor parejita del grupo",
    slug: "parejita-ano",
    order: 9,
    section: section2,
  },
  {
    id: "mas-amado",
    title: "El más amado del grupo",
    description: "El integrante más querido por todos",
    slug: "mas-amado",
    order: 10,
    section: section2,
  },
  {
    id: "mas-chistoso",
    title: "El más chistoso del grupo",
    description: "El que más hace reír al grupo",
    slug: "mas-chistoso",
    order: 11,
    section: section2,
  },
  {
    id: "supervisor-censadores",
    title: "El Supervisor de Censadores",
    description: "El mejor líder de censadores del año",
    slug: "supervisor-censadores",
    order: 12,
    section: section2,
  },

  // Sección 3: Sucesos del año
  {
    id: "espera-larga",
    title: "La Espera Más Larga del Año",
    description: "La espera más desesperante del año",
    slug: "espera-larga",
    order: 13,
    section: section3,
  },
  {
    id: "balto-momento",
    title: "El Balto Momento del Año",
    description: "El mejor momento protagonizado por Balto",
    slug: "balto-momento",
    order: 14,
    section: section3,
  },
  {
    id: "viajecito-ano",
    title: "Viajecito del año",
    description: "El mejor viaje del año",
    slug: "viajecito-ano",
    order: 15,
    section: section3,
  },
  {
    id: "enfado-ano",
    title: "El Enfado del Año",
    description: "El conflicto más memorable del año",
    slug: "enfado-ano",
    order: 16,
    section: section3,
  },
  {
    id: "debatin-ano",
    title: "Debatín del Año",
    description: "El debate más intenso del año",
    slug: "debatin-ano",
    order: 17,
    section: section3,
  },
  {
    id: "frase-ano",
    title: "Frase o Palabra del Año",
    description: "La frase más icónica del año",
    slug: "frase-ano",
    order: 18,
    section: section3,
  },
  {
    id: "inversion-ano",
    title: "La inversión del año",
    description: "La mejor (o peor) inversión del año",
    slug: "inversion-ano",
    order: 19,
    section: section3,
  },

  // Sección 4: Multimedia del año
  {
    id: "estado-ano",
    title: "El estado del año",
    description: "El mejor estado de WhatsApp del año",
    slug: "estado-ano",
    order: 20,
    section: section4,
  },
  {
    id: "audio-ano",
    title: "Audio del año",
    description: "El audio más memorable del año",
    slug: "audio-ano",
    order: 21,
    section: section4,
  },
  {
    id: "edit-ano",
    title: "Edit del año",
    description: "El mejor edit del año",
    slug: "edit-ano",
    order: 22,
    section: section4,
  },
  {
    id: "sticker-original",
    title: "Sticker Original del Año",
    description: "El mejor sticker original del año",
    slug: "sticker-original",
    order: 23,
    section: section4,
  },
  {
    id: "sticker-desperuanizado",
    title: "El sticker Desperuanizado del Año",
    description: "El mejor sticker desperuanizado del año",
    slug: "sticker-desperuanizado",
    order: 24,
    section: section4,
  },

  // Sección 5: Dateros, Colegiados, Chambeadores y Xino
  {
    id: "chamba-revelacion",
    title: "Chamba revelación del año",
    description: "La chamba más sorprendente del año",
    slug: "chamba-revelacion",
    order: 25,
    section: section5,
  },
  {
    id: "mejor-datazo",
    title: "Mejor Datazo",
    description: "El datazo más importante del año",
    slug: "mejor-datazo",
    order: 26,
    section: section5,
  },
  {
    id: "mas-explotado-chamba",
    title: "El más explotado en la Chamba",
    description: "El que más sufrió en el trabajo",
    slug: "mas-explotado-chamba",
    order: 27,
    section: section5,
  },
  {
    id: "menos-chambeador",
    title: "El menos chambeador del año",
    description: "El que menos chambea del grupo",
    slug: "menos-chambeador",
    order: 28,
    section: section5,
  },

  // Sección 6: Destacados del Año
  {
    id: "goty-ano",
    title: "GOTY Of The Year Del Año",
    description: "El mejor juego del año",
    slug: "goty-ano",
    order: 29,
    section: section6,
  },
  {
    id: "mejor-nickname",
    title: "Mejor Nickname",
    description: "El mejor nickname del grupo",
    slug: "mejor-nickname",
    order: 30,
    section: section6,
  },
  {
    id: "arrexino-ano",
    title: "El ArreXino del Año",
    description: "El más arrecho del año",
    slug: "arrexino-ano",
    order: 31,
    section: section6,
  },
  {
    id: "mecatronico-ano",
    title: "Mecatrónico del Año",
    description: "El mejor mecatrónico del año",
    slug: "mecatronico-ano",
    order: 32,
    section: section6,
  },
  {
    id: "datero-ano",
    title: "Datero del Año",
    description: "El mejor datero del año",
    slug: "datero-ano",
    order: 33,
    section: section6,
  },
];

export const mockNominees: Nominee[] = [
  // Sección 1: Lefteros del año
  {
    id: "left-1-1",
    categoryId: "mejor-jugador-left",
    title: "Mattos - Cuando está calmado",
    imageUrl: "",
    order: 1,
  },
  {
    id: "left-1-2",
    categoryId: "mejor-jugador-left",
    title: "Ñeñe - Cuando no está jugando",
    imageUrl: "",
    order: 2,
  },

  {
    id: "left-2-1",
    categoryId: "mas-manco-left",
    title: "Mattos - Enojado con su Team",
    imageUrl: "",
    order: 1,
  },
  {
    id: "left-2-2",
    categoryId: "mas-manco-left",
    title: "Columba - Siempre",
    imageUrl: "",
    order: 2,
  },

  {
    id: "left-3-1",
    categoryId: "mas-odiado-left",
    title: "Jack - No crea sala de left",
    imageUrl: "",
    order: 1,
  },
  {
    id: "left-3-2",
    categoryId: "mas-odiado-left",
    title: "Jack x2 - Ya no es el mismo que antes :c",
    imageUrl: "",
    order: 2,
  },
  {
    id: "left-3-3",
    categoryId: "mas-odiado-left",
    title: "Balto - Que no ingresa al left",
    imageUrl: "",
    order: 3,
  },
  {
    id: "left-3-4",
    categoryId: "mas-odiado-left",
    title: "El Ñeñe - Cuando entra Balto se va xd",
    imageUrl: "",
    order: 4,
  },

  {
    id: "left-4-1",
    categoryId: "humero-left",
    title: "Jack - No crea sala desde Altamar",
    imageUrl: "",
    order: 1,
  },
  {
    id: "left-4-2",
    categoryId: "humero-left",
    title: "Balto - Pone hora y fecha, pero no ingresa",
    imageUrl: "",
    order: 2,
  },
  {
    id: "left-4-3",
    categoryId: "humero-left",
    title: "Convocatorias Don Ñeñito - Convoca y se va",
    imageUrl: "",
    order: 3,
  },

  // Sección 2: Integrantes del año
  {
    id: "int-1-1",
    categoryId: "extranjero-ano",
    title: "Paul - Du Brasil",
    imageUrl: "",
    order: 1,
  },
  {
    id: "int-1-2",
    categoryId: "extranjero-ano",
    title: "Cristian - Du Brasil",
    imageUrl: "",
    order: 2,
  },
  {
    id: "int-1-3",
    categoryId: "extranjero-ano",
    title: "Orbegoso - Ciudadano del mundo",
    imageUrl: "",
    order: 3,
  },
  {
    id: "int-1-4",
    categoryId: "extranjero-ano",
    title: "Xino Pucallpino Puñetino - Pucallpa",
    imageUrl: "",
    order: 4,
  },
  {
    id: "int-1-5",
    categoryId: "extranjero-ano",
    title: "Loxo - Huamasexo",
    imageUrl: "",
    order: 5,
  },

  {
    id: "int-2-1",
    categoryId: "gymrat-ano",
    title: "Ángel Turrones de MAF - Xino",
    imageUrl: "",
    order: 1,
  },
  {
    id: "int-2-2",
    categoryId: "gymrat-ano",
    title: "Mattos - Roomie de Xino",
    imageUrl: "",
    order: 2,
  },
  {
    id: "int-2-3",
    categoryId: "gymrat-ano",
    title: "Andy Rojas - El Baki Provinciano",
    imageUrl: "",
    order: 3,
  },
  {
    id: "int-2-4",
    categoryId: "gymrat-ano",
    title: "Loxo Sánchez - Hanayama Peruano",
    imageUrl: "",
    order: 4,
  },
  {
    id: "int-2-5",
    categoryId: "gymrat-ano",
    title: "Cristian Juárez - Ex Xuxi",
    imageUrl: "",
    order: 5,
  },

  {
    id: "int-3-1",
    categoryId: "mas-kbral",
    title: "Xino Turrones",
    imageUrl: "",
    order: 1,
  },
  {
    id: "int-3-2",
    categoryId: "mas-kbral",
    title: "Xino Turrones - X2",
    imageUrl: "",
    order: 2,
  },
  {
    id: "int-3-3",
    categoryId: "mas-kbral",
    title: "Xino Turrones - X3",
    imageUrl: "",
    order: 3,
  },
  {
    id: "int-3-4",
    categoryId: "mas-kbral",
    title: "Paul - Fan de Jason Momoa en Tanga",
    imageUrl: "",
    order: 4,
  },
  {
    id: "int-3-5",
    categoryId: "mas-kbral",
    title: "Luxo - Fan de marchas LGTB",
    imageUrl: "",
    order: 5,
  },

  {
    id: "int-4-1",
    categoryId: "duazo-ano",
    title: "El Nero y el Tino (Dupla de terror)",
    imageUrl: "",
    order: 1,
  },
  {
    id: "int-4-2",
    categoryId: "duazo-ano",
    title: "Columba y Jack - Tío y Sobrino",
    imageUrl: "",
    order: 2,
  },
  {
    id: "int-4-3",
    categoryId: "duazo-ano",
    title: "El Ñeñe y Balto - Los Nenes",
    imageUrl: "",
    order: 3,
  },
  {
    id: "int-4-4",
    categoryId: "duazo-ano",
    title: "Xino y Mattos - Los Huéspedes",
    imageUrl: "",
    order: 4,
  },

  {
    id: "int-5-1",
    categoryId: "parejita-ano",
    title: "Orbegoso y su esposa",
    imageUrl: "",
    order: 1,
  },
  {
    id: "int-5-2",
    categoryId: "parejita-ano",
    title: "Mattos y El Ñeñe - Los 2M",
    imageUrl: "",
    order: 2,
  },
  {
    id: "int-5-3",
    categoryId: "parejita-ano",
    title: "Ñeñe y Jack - Los Desaparecidos",
    imageUrl: "",
    order: 3,
  },
  {
    id: "int-5-4",
    categoryId: "parejita-ano",
    title: "Xino y Din",
    imageUrl: "",
    order: 4,
  },

  {
    id: "int-6-1",
    categoryId: "mas-amado",
    title: "El Ñeñe - El Padrino",
    imageUrl: "",
    order: 1,
  },
  {
    id: "int-6-2",
    categoryId: "mas-amado",
    title: "Xuxi - La Mamá del grupo",
    imageUrl: "",
    order: 2,
  },
  {
    id: "int-6-3",
    categoryId: "mas-amado",
    title: "Dayner - El que nunca habla mal de nadie",
    imageUrl: "",
    order: 3,
  },

  {
    id: "int-7-1",
    categoryId: "mas-chistoso",
    title: "Jack - El borracho",
    imageUrl: "",
    order: 1,
  },
  {
    id: "int-7-2",
    categoryId: "mas-chistoso",
    title: "Orbegoso - El Piqueo",
    imageUrl: "",
    order: 2,
  },
  {
    id: "int-7-3",
    categoryId: "mas-chistoso",
    title: "Din - El que no sabe donde está parado",
    imageUrl: "",
    order: 3,
  },
  {
    id: "int-7-4",
    categoryId: "mas-chistoso",
    title: "Mattos - El Tiktoker",
    imageUrl: "",
    order: 4,
  },

  {
    id: "int-8-1",
    categoryId: "supervisor-censadores",
    title: "Jack - El jefe de jefes",
    imageUrl: "",
    order: 1,
  },
  {
    id: "int-8-2",
    categoryId: "supervisor-censadores",
    title: "Balto - El que da la cara",
    imageUrl: "",
    order: 2,
  },
  {
    id: "int-8-3",
    categoryId: "supervisor-censadores",
    title: "Dayner - El más capo",
    imageUrl: "",
    order: 3,
  },

  // Sección 3: Sucesos del año
  {
    id: "suc-1-1",
    categoryId: "espera-larga",
    title: "El Tino del Año",
    imageUrl: "",
    order: 1,
  },
  {
    id: "suc-1-2",
    categoryId: "espera-larga",
    title: "La espera del Left",
    imageUrl: "",
    order: 2,
  },
  {
    id: "suc-1-3",
    categoryId: "espera-larga",
    title: "La espera de la casa de Dayner",
    imageUrl: "",
    order: 3,
  },

  {
    id: "suc-2-1",
    categoryId: "balto-momento",
    title: "La borrachera de Balto en el cumple de Jack",
    imageUrl: "",
    order: 1,
  },
  {
    id: "suc-2-2",
    categoryId: "balto-momento",
    title: "Balto censando en cono norte sin saber donde está",
    imageUrl: "",
    order: 2,
  },
  {
    id: "suc-2-3",
    categoryId: "balto-momento",
    title: "Balto en la cancha de Pacasmayo",
    imageUrl: "",
    order: 3,
  },

  {
    id: "suc-3-1",
    categoryId: "viajecito-ano",
    title: "Fiesta de Jack en Ica",
    imageUrl: "",
    order: 1,
  },
  {
    id: "suc-3-2",
    categoryId: "viajecito-ano",
    title: "La ida de Dayner a la casa del Ñeñe",
    imageUrl: "",
    order: 2,
  },
  {
    id: "suc-3-3",
    categoryId: "viajecito-ano",
    title: "El viaje de Xino a Pucallpa",
    imageUrl: "",
    order: 3,
  },

  {
    id: "suc-4-1",
    categoryId: "enfado-ano",
    title: "La molestas de Balto con Jack",
    imageUrl: "",
    order: 1,
  },
  {
    id: "suc-4-2",
    categoryId: "enfado-ano",
    title: "La ofendida del Ñeñe y Balto",
    imageUrl: "",
    order: 2,
  },
  {
    id: "suc-4-3",
    categoryId: "enfado-ano",
    title: "El Enfado de Mattos con el Ñeñe",
    imageUrl: "",
    order: 3,
  },

  {
    id: "suc-5-1",
    categoryId: "debatin-ano",
    title: "El debate de las 999+ Obras de Porky",
    imageUrl: "",
    order: 1,
  },
  {
    id: "suc-5-2",
    categoryId: "debatin-ano",
    title: "El debate de la vida fitness",
    imageUrl: "",
    order: 2,
  },
  {
    id: "suc-5-3",
    categoryId: "debatin-ano",
    title: "El debate de la vida Datera",
    imageUrl: "",
    order: 3,
  },

  {
    id: "suc-6-1",
    categoryId: "frase-ano",
    title: "Xino - Pucallpino Puñetino",
    imageUrl: "",
    order: 1,
  },
  {
    id: "suc-6-2",
    categoryId: "frase-ano",
    title: "Luxo - Huamasexo",
    imageUrl: "",
    order: 2,
  },
  {
    id: "suc-6-3",
    categoryId: "frase-ano",
    title: "Jack - El chupasangre",
    imageUrl: "",
    order: 3,
  },

  {
    id: "suc-7-1",
    categoryId: "inversion-ano",
    title: "La inversión de Dayner en su casa",
    imageUrl: "",
    order: 1,
  },
  {
    id: "suc-7-2",
    categoryId: "inversion-ano",
    title: "La inversión de Xuxi en su moto",
    imageUrl: "",
    order: 2,
  },
  {
    id: "suc-7-3",
    categoryId: "inversion-ano",
    title: "La inversión de Reno en su PC",
    imageUrl: "",
    order: 3,
  },

  // Sección 4: Multimedia del año
  {
    id: "mult-1-1",
    categoryId: "estado-ano",
    title: "El estado de Jack con su ex",
    imageUrl: "",
    order: 1,
  },
  {
    id: "mult-1-2",
    categoryId: "estado-ano",
    title: "El estado del Ñeñe en el hospital",
    imageUrl: "",
    order: 2,
  },
  {
    id: "mult-1-3",
    categoryId: "estado-ano",
    title: "El estado de Xino con su gym",
    imageUrl: "",
    order: 3,
  },

  {
    id: "mult-2-1",
    categoryId: "audio-ano",
    title: "Audio de Xino sobre la 'kbraldad'",
    imageUrl: "",
    order: 1,
  },
  {
    id: "mult-2-2",
    categoryId: "audio-ano",
    title: "Audio de Mattos en el Left 4 Dead 2",
    imageUrl: "",
    order: 2,
  },
  {
    id: "mult-2-3",
    categoryId: "audio-ano",
    title: "Audio de Luxo que nadie le entiende",
    imageUrl: "",
    order: 3,
  },

  {
    id: "mult-3-1",
    categoryId: "edit-ano",
    title: "Edit de Xino vs Mattos",
    imageUrl: "",
    order: 1,
  },
  {
    id: "mult-3-2",
    categoryId: "edit-ano",
    title: "Edit de la boda de Jack",
    imageUrl: "",
    order: 2,
  },
  {
    id: "mult-3-3",
    categoryId: "edit-ano",
    title: "Edit de la caída de Balto",
    imageUrl: "",
    order: 3,
  },

  {
    id: "mult-4-1",
    categoryId: "sticker-original",
    title: "Sticker de Xino 'Pucallpino Puñetino'",
    imageUrl: "",
    order: 1,
  },
  {
    id: "mult-4-2",
    categoryId: "sticker-original",
    title: "Sticker del Ñeñe 'El Padrino'",
    imageUrl: "",
    order: 2,
  },
  {
    id: "mult-4-3",
    categoryId: "sticker-original",
    title: "Sticker de Dayner 'Data Engineer'",
    imageUrl: "",
    order: 3,
  },

  {
    id: "mult-5-1",
    categoryId: "sticker-desperuanizado",
    title: "Sticker de Jack 'El chupasangre'",
    imageUrl: "",
    order: 1,
  },
  {
    id: "mult-5-2",
    categoryId: "sticker-desperuanizado",
    title: "Sticker de Balto 'El Datero'",
    imageUrl: "",
    order: 2,
  },
  {
    id: "mult-5-3",
    categoryId: "sticker-desperuanizado",
    title: "Sticker de Luxo 'Huamasexo'",
    imageUrl: "",
    order: 3,
  },

  // Sección 5: Dateros, Colegiados, Chambeadores y Xino
  {
    id: "dat-1-1",
    categoryId: "chamba-revelacion",
    title: "Jack - El Supervisor de Censadores",
    imageUrl: "",
    order: 1,
  },

  {
    id: "dat-2-1",
    categoryId: "mejor-datazo",
    title: "Loxo se fue a Huamasexo",
    imageUrl: "",
    order: 1,
  },
  {
    id: "dat-2-2",
    categoryId: "mejor-datazo",
    title: "Las 999+ Obras de Porky",
    imageUrl: "",
    order: 2,
  },
  {
    id: "dat-2-3",
    categoryId: "mejor-datazo",
    title: "Xino couch del din para que se infle",
    imageUrl: "",
    order: 3,
  },

  {
    id: "dat-3-1",
    categoryId: "mas-explotado-chamba",
    title: "Balto Censando en Conos",
    imageUrl: "",
    order: 1,
  },
  {
    id: "dat-3-2",
    categoryId: "mas-explotado-chamba",
    title: "Luxo en Pacasmayo",
    imageUrl: "",
    order: 2,
  },
  {
    id: "dat-3-3",
    categoryId: "mas-explotado-chamba",
    title: "Balto en cualquier chamba",
    imageUrl: "",
    order: 3,
  },

  {
    id: "dat-4-1",
    categoryId: "menos-chambeador",
    title: "Loxo/Reno/Cristian - Trío de Dateros",
    imageUrl: "",
    order: 1,
  },
  {
    id: "dat-4-2",
    categoryId: "menos-chambeador",
    title: "Columba - El Colegiado",
    imageUrl: "",
    order: 2,
  },
  {
    id: "dat-4-3",
    categoryId: "menos-chambeador",
    title: "Loxo - En cualquier chamba",
    imageUrl: "",
    order: 3,
  },
  {
    id: "dat-4-4",
    categoryId: "menos-chambeador",
    title: "Xino - Desempleado en MAF",
    imageUrl: "",
    order: 4,
  },

  // Sección 6: Destacados del Año
  {
    id: "dest-1-1",
    categoryId: "goty-ano",
    title: "L4D2 - Siempre en los corazones",
    imageUrl: "",
    order: 1,
  },
  {
    id: "dest-1-2",
    categoryId: "goty-ano",
    title: "Counter Strike 2 - Crea Sala Reno",
    imageUrl: "",
    order: 2,
  },
  {
    id: "dest-1-3",
    categoryId: "goty-ano",
    title: "Destiny Rising - Discriminadores en Calamidad",
    imageUrl: "",
    order: 3,
  },
  {
    id: "dest-1-4",
    categoryId: "goty-ano",
    title: "Peak - Simplemente Peak",
    imageUrl: "",
    order: 4,
  },

  {
    id: "dest-2-1",
    categoryId: "mejor-nickname",
    title: "Camposol",
    imageUrl: "",
    order: 1,
  },
  {
    id: "dest-2-2",
    categoryId: "mejor-nickname",
    title: "Xeppa",
    imageUrl: "",
    order: 2,
  },
  {
    id: "dest-2-3",
    categoryId: "mejor-nickname",
    title: "Arek",
    imageUrl: "",
    order: 3,
  },
  {
    id: "dest-2-4",
    categoryId: "mejor-nickname",
    title: "Solitario de Sayán",
    imageUrl: "",
    order: 4,
  },
  {
    id: "dest-2-5",
    categoryId: "mejor-nickname",
    title: "Puñetino",
    imageUrl: "",
    order: 5,
  },

  {
    id: "dest-3-1",
    categoryId: "arrexino-ano",
    title: "Marcos Becerro - Cieneguilla",
    imageUrl: "",
    order: 1,
  },
  {
    id: "dest-3-2",
    categoryId: "arrexino-ano",
    title: "Xino - Tetas y Culo",
    imageUrl: "",
    order: 2,
  },
  {
    id: "dest-3-3",
    categoryId: "arrexino-ano",
    title: "Jotasex - Pidiendo IG",
    imageUrl: "",
    order: 3,
  },
  {
    id: "dest-3-4",
    categoryId: "arrexino-ano",
    title: "Din - En cualquier contexto",
    imageUrl: "",
    order: 4,
  },
  {
    id: "dest-3-5",
    categoryId: "arrexino-ano",
    title: "Mauricio Blacks - Con la madre de sus hijastros",
    imageUrl: "",
    order: 5,
  },

  {
    id: "dest-4-1",
    categoryId: "mecatronico-ano",
    title: "Columba - El Colegiado",
    imageUrl: "",
    order: 1,
  },
  {
    id: "dest-4-2",
    categoryId: "mecatronico-ano",
    title: "Xino Terrones - El que no termina el colegio",
    imageUrl: "",
    order: 2,
  },
  {
    id: "dest-4-3",
    categoryId: "mecatronico-ano",
    title: "Balto Censos - Automatizador de Censos",
    imageUrl: "",
    order: 3,
  },

  {
    id: "dest-5-1",
    categoryId: "datero-ano",
    title: "Dayner - Data Engineer",
    imageUrl: "",
    order: 1,
  },
  {
    id: "dest-5-2",
    categoryId: "datero-ano",
    title: "Loxo - Data Scientist",
    imageUrl: "",
    order: 2,
  },
  {
    id: "dest-5-3",
    categoryId: "datero-ano",
    title: "Paul - Data Engineer",
    imageUrl: "",
    order: 3,
  },
  {
    id: "dest-5-4",
    categoryId: "datero-ano",
    title: "Xuxi - Data Engineer",
    imageUrl: "",
    order: 4,
  },
  {
    id: "dest-5-5",
    categoryId: "datero-ano",
    title: "Xino - Data Scientist",
    imageUrl: "",
    order: 5,
  },
  {
    id: "dest-5-6",
    categoryId: "datero-ano",
    title: "Reno - Data Scientist",
    imageUrl: "",
    order: 6,
  },
  {
    id: "dest-5-7",
    categoryId: "datero-ano",
    title: "Mattos - Data Engineer",
    imageUrl: "",
    order: 7,
  },
];

// Helper functions (mantienen su función, solo se cambia el source)
export const getCategoryById = (id: string): Category | undefined => {
  return mockCategories.find((category) => category.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return mockCategories.find((category) => category.slug === slug);
};

export const getNomineesByCategory = (categoryId: string): Nominee[] => {
  return mockNominees.filter((nominee) => nominee.categoryId === categoryId);
};

export const getAllNominees = (): Nominee[] => {
  return mockNominees;
};

export const getAllCategories = (): Category[] => {
  return mockCategories;
};
