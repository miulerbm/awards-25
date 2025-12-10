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

  // Sección 3: Sucesos del año
  {
    id: "espera-larga",
    title: "La Espera Más Larga del Año",
    description: "La espera más desesperante del año",
    slug: "espera-larga",
    order: 12,
    section: section3,
  },
  {
    id: "balto-momento",
    title: "El Balto Momento del Año",
    description: "El mejor momento protagonizado por Balto",
    slug: "balto-momento",
    order: 13,
    section: section3,
  },
  {
    id: "viajecito-ano",
    title: "Viajecito del año",
    description: "El mejor viaje del año",
    slug: "viajecito-ano",
    order: 14,
    section: section3,
  },
  {
    id: "enfado-ano",
    title: "El Enfado del Año",
    description: "El conflicto más memorable del año",
    slug: "enfado-ano",
    order: 15,
    section: section3,
  },
  {
    id: "debatin-ano",
    title: "Debatín del Año",
    description: "El debate más intenso del año",
    slug: "debatin-ano",
    order: 16,
    section: section3,
  },
  {
    id: "frase-ano",
    title: "Frase o Palabra del Año",
    description: "La frase más icónica del año",
    slug: "frase-ano",
    order: 17,
    section: section3,
  },
  {
    id: "inversion-ano",
    title: "La inversión del año",
    description: "La mejor (o peor) inversión del año",
    slug: "inversion-ano",
    order: 18,
    section: section3,
  },

  // Sección 4: Multimedia del año
  {
    id: "estado-ano",
    title: "El estado del año",
    description: "El mejor estado de WhatsApp del año",
    slug: "estado-ano",
    order: 19,
    section: section4,
  },
  {
    id: "audio-ano",
    title: "Audio del año",
    description: "El audio más memorable del año",
    slug: "audio-ano",
    order: 20,
    section: section4,
  },
  {
    id: "edit-ano",
    title: "Edit del año",
    description: "El mejor edit del año",
    slug: "edit-ano",
    order: 21,
    section: section4,
  },
  {
    id: "sticker-original",
    title: "Sticker Original del Año",
    description: "El mejor sticker original del año",
    slug: "sticker-original",
    order: 22,
    section: section4,
  },
  {
    id: "sticker-desperuanizado",
    title: "El sticker Desperuanizado del Año",
    description: "El mejor sticker desperuanizado del año",
    slug: "sticker-desperuanizado",
    order: 23,
    section: section4,
  },

  // Sección 5: Dateros, Colegiados, Chambeadores y Xino
  {
    id: "chamba-revelacion",
    title: "Chamba revelación del año",
    description: "La chamba más sorprendente del año",
    slug: "chamba-revelacion",
    order: 24,
    section: section5,
  },
  {
    id: "mejor-datazo",
    title: "Mejor Datazo",
    description: "El datazo más importante del año",
    slug: "mejor-datazo",
    order: 25,
    section: section5,
  },
  {
    id: "mas-explotado-chamba",
    title: "El más explotado en la Chamba",
    description: "El que más sufrió en el trabajo",
    slug: "mas-explotado-chamba",
    order: 26,
    section: section5,
  },
  {
    id: "menos-chambeador",
    title: "El menos chambeador del año",
    description: "El que menos chambea del grupo",
    slug: "menos-chambeador",
    order: 27,
    section: section5,
  },

  // Sección 6: Destacados del Año
  {
    id: "goty-ano",
    title: "GOTY Of The Year Del Año",
    description: "El mejor juego del año",
    slug: "goty-ano",
    order: 28,
    section: section6,
  },
  {
    id: "mejor-nickname",
    title: "Mejor Nickname",
    description: "El mejor nickname del grupo",
    slug: "mejor-nickname",
    order: 29,
    section: section6,
  },
  {
    id: "arrexino-ano",
    title: "El ArreXino del Año",
    description: "El más arrecho del año",
    slug: "arrexino-ano",
    order: 30,
    section: section6,
  },
  {
    id: "mecatronico-ano",
    title: "Mecatrónico del Año",
    description: "El mejor mecatrónico del año",
    slug: "mecatronico-ano",
    order: 31,
    section: section6,
  },
  {
    id: "datero-ano",
    title: "Datero del Año",
    description: "El mejor datero del año",
    slug: "datero-ano",
    order: 32,
    section: section6,
  },
  {
    id: "ausente-grupo",
    title: "El ausente del grupo",
    description: "El que más brilla por su ausencia",
    slug: "ausente-grupo",
    order: 33,
    section: section6,
  },
  {
    id: "integrante-destacado",
    title: "Integrante Destacado del Año",
    description: "El integrante más destacado del año",
    slug: "integrante-destacado",
    order: 34,
    section: section6,
  },
];

export const mockNominees: Nominee[] = [
  // Sección 1: Lefteros del año
  {
    id: "left-1-1",
    categoryId: "mejor-jugador-left",
    title: "Mattos - Cuando está calmado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mejor%20jugador%20de%20Left%20-%20Mattos.jpg",
    order: 1,
  },
  {
    id: "left-1-2",
    categoryId: "mejor-jugador-left",
    title: "Ñeñe - Cuando no está jugando",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mejor%20jugador%20de%20Left%20-%20Nene.jpg",
    order: 2,
  },

  {
    id: "left-2-1",
    categoryId: "mas-manco-left",
    title: "Mattos - Enojado con su Team",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20manco%20del%20Left%20-%20Mattos.jpg",
    order: 1,
  },
  {
    id: "left-2-2",
    categoryId: "mas-manco-left",
    title: "Columba - Siempre",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20manco%20del%20Left%20-%20Columna.jpg",
    order: 2,
  },

  {
    id: "left-3-1",
    categoryId: "mas-odiado-left",
    title: "Jack - No crea sala de left",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20odiado%20del%20Left%20-%20Jack%20x1.jpg",
    order: 1,
  },
  {
    id: "left-3-2",
    categoryId: "mas-odiado-left",
    title: "Jack x2 - Ya no es el mismo que antes :c",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20odiado%20del%20Left%20-%20Jack%20x2.jpg",
    order: 2,
  },
  {
    id: "left-3-3",
    categoryId: "mas-odiado-left",
    title: "Balto - Que no ingresa al left",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20odiado%20del%20Left%20-%20Balto.jpg",
    order: 3,
  },
  {
    id: "left-3-4",
    categoryId: "mas-odiado-left",
    title: "El Ñeñe - Cuando entra Balto se va xd",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20odiado%20del%20Left%20-%20Nene.jpg",
    order: 4,
  },

  {
    id: "left-4-1",
    categoryId: "humero-left",
    title: "Jack - No crea sala desde Altamar",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20humero%20del%20Left%20del%20ano%20-%20Jack.jpg",
    order: 1,
  },
  {
    id: "left-4-2",
    categoryId: "humero-left",
    title: "Balto - Pone hora y fecha, pero no ingresa",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20humero%20del%20Left%20del%20ano%20-%20Balto.jpg",
    order: 2,
  },
  {
    id: "left-4-3",
    categoryId: "humero-left",
    title: "Convocatorias Don Ñeñito - Convoca y se va",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20humero%20del%20Left%20del%20ano%20-%20Nene.jpg",
    order: 3,
  },

  // Sección 2: Integrantes del año
  {
    id: "int-1-1",
    categoryId: "extranjero-ano",
    title: "Paul - Du Brasil",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20extranjero%20del%20ano%20-%20Paul.jpg",
    order: 1,
  },
  {
    id: "int-1-2",
    categoryId: "extranjero-ano",
    title: "Cristian - Du Brasil",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20extranjero%20del%20ano%20-%20Cristian.jpg",
    order: 2,
  },
  {
    id: "int-1-3",
    categoryId: "extranjero-ano",
    title: "Orbegoso - Ciudadano del mundo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20extranjero%20del%20ano%20-%20Orbegoso.jpg",
    order: 3,
  },
  {
    id: "int-1-4",
    categoryId: "extranjero-ano",
    title: "Xino Pucallpino Puñetino - Pucallpa",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20extranjero%20del%20ano%20-%20Angel.jpg",
    order: 4,
  },
  {
    id: "int-1-5",
    categoryId: "extranjero-ano",
    title: "Loxo - Huamasexo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20extranjero%20del%20ano%20-%20Luis.jpg",
    order: 5,
  },

  {
    id: "int-2-1",
    categoryId: "gymrat-ano",
    title: "Ángel Turrones de MAF - Xino",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20gymrat%20del%20Ano%20-%20Angel.jpg",
    order: 1,
  },
  {
    id: "int-2-2",
    categoryId: "gymrat-ano",
    title: "Mattos - Roomie de Xino",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20gymrat%20del%20Ano%20-%20Mattos.jpg",
    order: 2,
  },
  {
    id: "int-2-3",
    categoryId: "gymrat-ano",
    title: "Andy Rojas - El Baki Provinciano",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20gymrat%20del%20Ano%20-%20Andy.jpg",
    order: 3,
  },
  {
    id: "int-2-4",
    categoryId: "gymrat-ano",
    title: "Loxo Sánchez - Hanayama Peruano",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20gymrat%20del%20Ano%20-%20Luis.jpg",
    order: 4,
  },
  {
    id: "int-2-5",
    categoryId: "gymrat-ano",
    title: "Cristian Juárez - Ex Xuxi",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20gymrat%20del%20Ano%20-%20Cristian.jpg",
    order: 5,
  },

  {
    id: "int-3-1",
    categoryId: "mas-kbral",
    title: "Xino Turrones",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20kbral%20del%20ano%20-%20Angel%20x1.jpg",
    order: 1,
  },
  {
    id: "int-3-2",
    categoryId: "mas-kbral",
    title: "Xino Turrones - X2",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20kbral%20del%20ano%20-%20Angel%20x2.jpg",
    order: 2,
  },
  {
    id: "int-3-3",
    categoryId: "mas-kbral",
    title: "Xino Turrones - X3",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20kbral%20del%20ano%20-%20Angel%20x3.jpg",
    order: 3,
  },
  {
    id: "int-3-4",
    categoryId: "mas-kbral",
    title: "Paul - Fan de Jason Momoa en Tanga",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20kbral%20del%20ano%20-%20Paul.jpg",
    order: 4,
  },
  {
    id: "int-3-5",
    categoryId: "mas-kbral",
    title: "Luxo - Fan de marchas LGTB",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20kbral%20del%20ano%20-%20Luis.jpg",
    order: 5,
  },

  {
    id: "int-4-1",
    categoryId: "duazo-ano",
    title: "El Nero y el Nero José - Hijo y Padre",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20duazo%20de%20la%20ptmr%20del%20Ano%20-%20Miuler%20y%20Jose.jpg",
    order: 1,
  },
  {
    id: "int-4-2",
    categoryId: "duazo-ano",
    title: "Paul y Jason Momoa en Tanga - Fetiche",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20duazo%20de%20la%20ptmr%20del%20Ano%20-%20Paul%20y%20Momoa.jpg",
    order: 2,
  },
  {
    id: "int-4-3",
    categoryId: "duazo-ano",
    title: "Xino y Mattos - Roomies",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20duazo%20de%20la%20ptmr%20del%20Ano%20-%20Angel%20y%20Mattos.jpg",
    order: 3,
  },

  {
    id: "int-5-1",
    categoryId: "parejita-ano",
    title: "Parejita Feminista: Cristian y su waifu",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20parejita%20del%20ano%20-%20Cristian.jpg",
    order: 1,
  },
  {
    id: "int-5-2",
    categoryId: "parejita-ano",
    title: "Luxo y su trans de la Victoria",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20parejita%20del%20ano%20-%20Luis%20y%20Trans.jpg",
    order: 2,
  },
  {
    id: "int-5-3",
    categoryId: "parejita-ano",
    title: "Andys y su otaku",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20parejita%20del%20ano%20-%20Andy%20y%20Otaku.jpg",
    order: 3,
  },
  {
    id: "int-5-4",
    categoryId: "parejita-ano",
    title: "Jack el marinero y su flaquita",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20parejita%20del%20ano%20-%20Jack.jpg",
    order: 4,
  },
  {
    id: "int-5-5",
    categoryId: "parejita-ano",
    title: "Gym Roomies: Xino y Mattos",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20parejita%20del%20ano%20-%20Xino%20y%20Mattos.jpg",
    order: 5,
  },
  {
    id: "int-5-6",
    categoryId: "parejita-ano",
    title: "Aldo y su Huamachuquina",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20parejita%20del%20ano%20-%20Aldo.jpg",
    order: 6,
  },
  {
    id: "int-5-7",
    categoryId: "parejita-ano",
    title: "Xorlos y su flaquita",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20parejita%20del%20ano%20-%20Chorlos.jpg",
    order: 7,
  },
  {
    id: "int-5-8",
    categoryId: "parejita-ano",
    title: "Xino y Claudia",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20parejita%20del%20ano%20-%20Xino%20y%20Claudia.jpg",
    order: 8,
  },

  {
    id: "int-6-1",
    categoryId: "mas-amado",
    title: "Loxo - Yo mismo me Nominé",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20amado%20del%20grupo%20-%20Luis.jpg",
    order: 1,
  },
  {
    id: "int-6-2",
    categoryId: "mas-amado",
    title: "Jack - Ya no es el mismo de antes :c",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20amado%20del%20grupo%20-%20Jack.jpg",
    order: 2,
  },
  {
    id: "int-6-3",
    categoryId: "mas-amado",
    title: "Mauricio Blanco - Nada que decir",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20amado%20del%20grupo%20-%20Mauricio%20Whites.jpg",
    order: 3,
  },

  {
    id: "int-7-1",
    categoryId: "mas-chistoso",
    title: "Xino - Cada que escribe en el grupo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20chistoso%20del%20grupo%20-%20Angel.jpg",
    order: 1,
  },
  {
    id: "int-7-2",
    categoryId: "mas-chistoso",
    title: 'Milver - Según él da risa empezar las palabras con "kk"',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20chistoso%20del%20grupo%20-%20Miuler.jpg",
    order: 2,
  },
  {
    id: "int-7-3",
    categoryId: "mas-chistoso",
    title: 'Milver - Según él si le agrega "god" a cada palabra es gracioso',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20chistoso%20del%20grupo%20-%20Miuler%20x2.jpg",
    order: 3,
  },
  {
    id: "int-7-4",
    categoryId: "mas-chistoso",
    title: "Balto - Hablando con sticker una vez al mes",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20chistoso%20del%20grupo%20-%20Balto.jpg",
    order: 4,
  },
  {
    id: "int-7-5",
    categoryId: "mas-chistoso",
    title: "El Xo - Simplemente Xo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20chistoso%20del%20grupo%20-%20Xo.jpg",
    order: 5,
  },
  {
    id: "int-7-6",
    categoryId: "mas-chistoso",
    title: 'JC Beka - Solo envía monos xingando, dice "cabrón"',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20chistoso%20del%20grupo%20-%20BK.jpg",
    order: 6,
  },

  // Sección 3: Sucesos del año
  {
    id: "suc-1-1",
    categoryId: "espera-larga",
    title: "Los Awards 2024",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20Espera%20Mas%20Larga%20del%20Ano%20-%20Dinawards.jpg",
    order: 1,
  },
  {
    id: "suc-1-2",
    categoryId: "espera-larga",
    title: "Boxo Yendo a comprar sus pastillas",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20Espera%20Mas%20Larga%20del%20Ano%20-%20Luis.jpg",
    order: 2,
  },

  {
    id: "suc-2-1",
    categoryId: "balto-momento",
    title: '"Se fue el internet de Movistar"',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20Balto%20Momento%20del%20Ano%20-%20Internet.jpg",
    order: 1,
  },
  {
    id: "suc-2-2",
    categoryId: "balto-momento",
    title: '"Censar me elevó a otro plano existencial"',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20Balto%20Momento%20del%20Ano%20-%20Censo.jpg",
    order: 2,
  },
  {
    id: "suc-2-3",
    categoryId: "balto-momento",
    title: 'Ñeñe: "1 vs 1 Balto, ¿qué dices?" Balto: "sera 1 vs 0 entonces"',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20Balto%20Momento%20del%20Ano%20-%20Balto%20y%20Nene.jpg",
    order: 3,
  },

  // {
  //   id: "suc-3-1",
  //   categoryId: "viajecito-ano",
  //   title: "Chorlos llevando a su flaquita a conocer a su ex en Cuzco",
  //   imageUrl: "",
  //   order: 1,
  // },
  {
    id: "suc-3-2",
    categoryId: "viajecito-ano",
    title: "Reno y su flaquita en Cusco",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Viajecito%20del%20ano%20-%20Todos.jpg",
    order: 2,
  },
  {
    id: "suc-3-3",
    categoryId: "viajecito-ano",
    title: "Luxo y su Ex en Huaral",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Viajecito%20del%20ano%20-%20Todos.jpg",
    order: 3,
  },
  {
    id: "suc-3-4",
    categoryId: "viajecito-ano",
    title: "Tzino y Rocha en su Full Day",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Viajecito%20del%20ano%20-%20Todos.jpg",
    order: 4,
  },

  {
    id: "suc-4-1",
    categoryId: "enfado-ano",
    title: "Mauricio White vs Miuler",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20Enfado%20del%20Ano%20-%20Miuler%20y%20Mauricio.jpg",
    order: 1,
  },
  {
    id: "suc-4-2",
    categoryId: "enfado-ano",
    title: "Ñeñe vs Reno - Se putearon en el lec",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20Enfado%20del%20Ano%20-%20Renzo%20y%20Nene.jpg",
    order: 2,
  },
  {
    id: "suc-4-3",
    categoryId: "enfado-ano",
    title: "Tzino Puñetino vs Mattos - Creyó que insultó a su viejita xd",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20Enfado%20del%20Ano%20-%20Mattos%20y%20Xino.jpg",
    order: 3,
  },

  {
    id: "suc-5-1",
    categoryId: "debatin-ano",
    title: "Xino vs Mattos y Paul - Rojos vs Porky",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Debatin%20del%20Ano%20-%20Xino%20y%20Paul%20por%20Porky.jpg",
    order: 1,
  },
  {
    id: "suc-5-2",
    categoryId: "debatin-ano",
    title: "Xino vs Renzo - Consejos para que Din campeone",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Debatin%20del%20Ano%20-%20Coachs%20de%20Din.jpg",
    order: 2,
  },
  {
    id: "suc-5-3",
    categoryId: "debatin-ano",
    title: "Mauricio Blanco vs El Grupo - Cada que habla Mauricio",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Debatin%20del%20Ano%20-%20Mauricio%20vs%20Todos.jpg",
    order: 3,
  },
  {
    id: "suc-5-4",
    categoryId: "debatin-ano",
    title: "Xino vs Cristian - ¿Xino debería cobrar por la Mesa?",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Debatin%20del%20Ano%20-%20Xino%20y%20Cristian.jpg",
    order: 4,
  },

  {
    id: "suc-6-1",
    categoryId: "frase-ano",
    title: '"No es para tanto bro" - Din',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Frase%20o%20Palabra%20del%20Ano%20-%20Todos.jpg",
    order: 1,
  },
  {
    id: "suc-6-2",
    categoryId: "frase-ano",
    title: '"A ver tu brazo Renzo" - Xino Turrones',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Frase%20o%20Palabra%20del%20Ano%20-%20Todos.jpg",
    order: 2,
  },
  {
    id: "suc-6-3",
    categoryId: "frase-ano",
    title: '"Quiero ver la de Adrian" - Xino Turrones',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Frase%20o%20Palabra%20del%20Ano%20-%20Todos.jpg",
    order: 3,
  },

  {
    id: "suc-7-1",
    categoryId: "inversion-ano",
    title: "Las Mesas del Xino Turrones",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20inversion%20del%20ano%20-%20Mesas%20del%20Xino.jpg",
    order: 1,
  },
  {
    id: "suc-7-2",
    categoryId: "inversion-ano",
    title: "Las Pesas del Xino Turrones",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20inversion%20del%20ano%20-%20Pesas%20del%20Xino.jpg",
    order: 2,
  },
  {
    id: "suc-7-3",
    categoryId: "inversion-ano",
    title: "La colegiatura de Colugna",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20inversion%20del%20ano%20-%20Colegiatura.jpg",
    order: 3,
  },
  {
    id: "suc-7-4",
    categoryId: "inversion-ano",
    title: "El Mouse de Balto",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20inversion%20del%20ano%20-%20Mouse%20de%20Balto.jpg",
    order: 4,
  },
  {
    id: "suc-7-5",
    categoryId: "inversion-ano",
    title: "Xino comprando dólares y vendiendo cuando baja su precio",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/La%20inversion%20del%20ano%20-%20Xino%20Dolares.jpg",
    order: 5,
  },

  // Sección 4: Multimedia del año
  {
    id: "mult-1-1",
    categoryId: "estado-ano",
    title: "Baltito preguntando si hay internet",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20estado%20del%20ano%20-%20Balto%20Internet.jpg",
    order: 1,
  },
  {
    id: "mult-1-2",
    categoryId: "estado-ano",
    title: "Mauricio Blacks subiendo fotos con sus hijastros",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20estado%20del%20ano%20-%20Blacks.jpg",
    order: 2,
  },
  {
    id: "mult-1-3",
    categoryId: "estado-ano",
    title: "JK y los Leoncitos FC",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20estado%20del%20ano%20-%20JK.jpg",
    order: 3,
  },
  {
    id: "mult-1-4",
    categoryId: "estado-ano",
    title: "El Xo y sus Amiguitas",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20estado%20del%20ano%20-%20Xo.jpg",
    order: 4,
  },

  {
    id: "mult-2-1",
    categoryId: "audio-ano",
    title: '"Noooo, ¿por atras?" - Milver',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/media/Audio%20del%20ano%20-%20Miuler%20por%20atras.mpeg",
    order: 1,
  },
  {
    id: "mult-2-2",
    categoryId: "audio-ano",
    title: '"Te voy a meter un panzaso" - Maurice White a Milver',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/media/audio-ano-otros.ogg",
    order: 2,
  },
  {
    id: "mult-2-3",
    categoryId: "audio-ano",
    title: '"Bueno ya entró balto me quito yo" - Bin',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/media/Audio%20del%20Ano%20-%20LLego%20Balto%20me%20quito.ogg",
    order: 3,
  },
  {
    id: "mult-2-4",
    categoryId: "audio-ano",
    title: '"Hace tiempo no escucho tu voz, ah" - Ñeñe',
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/media/audio-ano-otros.ogg",
    order: 4,
  },

  {
    id: "mult-3-1",
    categoryId: "edit-ano",
    title: "Las Desperuanizaciones - Hechos por Pol y Loxo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Edit%20del%20ano%20-%20Desperuanizaciones.jpg",
    order: 1,
  },
  {
    id: "mult-3-2",
    categoryId: "edit-ano",
    title: "Lucho saliendo de su casa como boomer - Hecho por Xino",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/media/Edit%20del%20ano%20-%20Luxo%20Boomer.mp4",
    order: 2,
  },
  {
    id: "mult-3-3",
    categoryId: "edit-ano",
    title: "Xino Shipibo (su ropa de todos los dias) - Hecho por Luxo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Edit%20del%20ano%20-%20Xino%20Selva.jpg",
    order: 3,
  },

  {
    id: "mult-4-2",
    categoryId: "sticker-original",
    title: "Las Desperuanizaciones - Hechos por Pol y Loxo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Sticker%20Original%20del%20Ano%20-%20Desperuanizaciones.jpg",
    order: 2,
  },
  {
    id: "mult-4-3",
    categoryId: "sticker-original",
    title: "Tzino el Hamburguesero - Hecho por Luxo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Sticker%20Original%20del%20Ano%20-%20Xino%20Hamburguesa.jpg",
    order: 3,
  },
  {
    id: "mult-4-4",
    categoryId: "sticker-original",
    title: "Mauricio Whites Modo Luxo - Hecho por Anónimo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Sticker%20Original%20del%20Ano%20-%20White%20modo%20Luxo.jpg",
    order: 4,
  },

  {
    id: "mult-5-1",
    categoryId: "sticker-desperuanizado",
    title: "Columba Desperuanizado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20sticker%20Desperuanizado%20del%20Ano%20-%20Columba.jpg",
    order: 1,
  },
  {
    id: "mult-5-2",
    categoryId: "sticker-desperuanizado",
    title: "Miuler Desperuanizado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20sticker%20Desperuanizado%20del%20Ano%20-%20Miuler.jpg",
    order: 2,
  },
  {
    id: "mult-5-3",
    categoryId: "sticker-desperuanizado",
    title: "Paul Desperuanizado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20sticker%20Desperuanizado%20del%20Ano%20-%20Paul.jpg",
    order: 3,
  },
  {
    id: "mult-5-4",
    categoryId: "sticker-desperuanizado",
    title: "Chorlos Desperuanizado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20sticker%20Desperuanizado%20del%20Ano%20-%20Carlos.jpg",
    order: 4,
  },
  {
    id: "mult-5-5",
    categoryId: "sticker-desperuanizado",
    title: "Xino Desperuanizado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20sticker%20Desperuanizado%20del%20Ano%20-%20Xino.jpg",
    order: 5,
  },
  {
    id: "mult-5-6",
    categoryId: "sticker-desperuanizado",
    title: "Mauricio Blacks Desperuanizado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20sticker%20Desperuanizado%20del%20Ano%20-%20Mauricio.jpg",
    order: 6,
  },
  {
    id: "mult-5-7",
    categoryId: "sticker-desperuanizado",
    title: "Arek Juárez Desperuanizado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20sticker%20Desperuanizado%20del%20Ano%20-%20Xuxi.jpg",
    order: 7,
  },

  // Sección 5: Dateros, Colegiados, Chambeadores y Xino
  {
    id: "dat-1-1",
    categoryId: "chamba-revelacion",
    title: "Censador",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Chamba%20revelacion%20del%20ano%20-%20Censista.jpg",
    order: 1,
  },
  {
    id: "dat-1-2",
    categoryId: "chamba-revelacion",
    title: "Supervisor de Censadores",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Chamba%20revelacion%20del%20ano%20-%20Supervisor%20de%20Censistas.jpg",
    order: 2,
  },

  {
    id: "dat-2-1",
    categoryId: "mejor-datazo",
    title: "Loxo se fue a Huamasexo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mejor%20Datazo%20-%20Luxo.jpg",
    order: 1,
  },
  {
    id: "dat-2-2",
    categoryId: "mejor-datazo",
    title: "Las 999+ Obras de Porky",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mejor%20Datazo%20-%20Pol%20x%20Porky.jpg",
    order: 2,
  },
  {
    id: "dat-2-3",
    categoryId: "mejor-datazo",
    title: "Xino couch del din para que se infle",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mejor%20Datazo%20-%20Angel%20Coach.jpg",
    order: 3,
  },

  {
    id: "dat-3-1",
    categoryId: "mas-explotado-chamba",
    title: "Balto Censando en Conos",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20explotado%20en%20la%20Chamba%20-%20Balto%20Censista.jpg",
    order: 1,
  },
  {
    id: "dat-3-2",
    categoryId: "mas-explotado-chamba",
    title: "Luxo en Pacasmayo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20explotado%20en%20la%20Chamba%20-%20Luxo.jpg",
    order: 2,
  },
  {
    id: "dat-3-3",
    categoryId: "mas-explotado-chamba",
    title: "Balto en cualquier chamba",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20mas%20explotado%20en%20la%20Chamba%20-%20Balto%20Todo%20Trabajo.jpg",
    order: 3,
  },

  {
    id: "dat-4-1",
    categoryId: "menos-chambeador",
    title: "Loxo/Reno/Cristian - Trío de Dateros",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20menos%20chambeador%20del%20ano%20-%20Luxo%20Reno%20Xuxi.jpg",
    order: 1,
  },
  {
    id: "dat-4-2",
    categoryId: "menos-chambeador",
    title: "Columba - El Colegiado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20menos%20chambeador%20del%20ano%20-%20Columba.jpg",
    order: 2,
  },
  {
    id: "dat-4-3",
    categoryId: "menos-chambeador",
    title: "Loxo - En cualquier chamba",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20menos%20chambeador%20del%20ano%20-%20Luxo%20Cualquier%20Chamba.jpg",
    order: 3,
  },
  {
    id: "dat-4-4",
    categoryId: "menos-chambeador",
    title: "Xino - Desempleado en MAF",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20menos%20chambeador%20del%20ano%20-%20Xino.jpg",
    order: 4,
  },

  // Sección 6: Destacados del Año
  {
    id: "dest-1-1",
    categoryId: "goty-ano",
    title: "L4D2 - Siempre en los corazones",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/GOTY%20Of%20The%20Year%20Del%20Ano%20-%20L4D2.jpg",
    order: 1,
  },
  {
    id: "dest-1-2",
    categoryId: "goty-ano",
    title: "Counter Strike 2 - Crea Sala Reno",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/GOTY%20Of%20The%20Year%20Del%20Ano%20-%20Counter%20Strike.jpg",
    order: 2,
  },
  {
    id: "dest-1-3",
    categoryId: "goty-ano",
    title: "Destiny Rising - Discriminadores en Calamidad",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/GOTY%20Of%20The%20Year%20Del%20Ano%20-%20Destiny.jpg",
    order: 3,
  },
  {
    id: "dest-1-4",
    categoryId: "goty-ano",
    title: "Peak - Simplemente Peak",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/GOTY%20Of%20The%20Year%20Del%20Ano%20-%20Peak.jpg",
    order: 4,
  },

  {
    id: "dest-2-1",
    categoryId: "mejor-nickname",
    title: "Camposol",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mejor%20Nickname%20-%20Todos.jpg",
    order: 1,
  },
  {
    id: "dest-2-2",
    categoryId: "mejor-nickname",
    title: "Xeppa",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mejor%20Nickname%20-%20Todos.jpg",
    order: 2,
  },
  {
    id: "dest-2-3",
    categoryId: "mejor-nickname",
    title: "Arek",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mejor%20Nickname%20-%20Todos.jpg",
    order: 3,
  },
  {
    id: "dest-2-4",
    categoryId: "mejor-nickname",
    title: "Solitario de Sayán",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mejor%20Nickname%20-%20Todos.jpg",
    order: 4,
  },
  {
    id: "dest-2-5",
    categoryId: "mejor-nickname",
    title: "Puñetino",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mejor%20Nickname%20-%20Todos.jpg",
    order: 5,
  },

  {
    id: "dest-3-1",
    categoryId: "arrexino-ano",
    title: "Marcos Becerro - Cieneguilla",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ArreXino%20del%20Ano%20-%20Marco.jpg",
    order: 1,
  },
  {
    id: "dest-3-2",
    categoryId: "arrexino-ano",
    title: "Xino - Tetas y Culo",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ArreXino%20del%20Ano%20-%20Xino.jpg",
    order: 2,
  },
  {
    id: "dest-3-3",
    categoryId: "arrexino-ano",
    title: "Jotasex - Pidiendo IG",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ArreXino%20del%20Ano%20-%20Jsex.jpg",
    order: 3,
  },
  {
    id: "dest-3-4",
    categoryId: "arrexino-ano",
    title: "Din - En cualquier contexto",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ArreXino%20del%20Ano%20-%20Din.jpg",
    order: 4,
  },
  {
    id: "dest-3-5",
    categoryId: "arrexino-ano",
    title: "Mauricio Blacks - Con la madre de sus hijastros",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ArreXino%20del%20Ano%20-%20Mauricio.jpg",
    order: 5,
  },

  {
    id: "dest-4-1",
    categoryId: "mecatronico-ano",
    title: "Columba - El Colegiado",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mecatronico%20del%20Ano%20-%20Columba.jpg",
    order: 1,
  },
  {
    id: "dest-4-2",
    categoryId: "mecatronico-ano",
    title: "Xino Terrones - El que no termina el colegio",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mecatronico%20del%20Ano%20-%20Xino.jpg",
    order: 2,
  },
  {
    id: "dest-4-3",
    categoryId: "mecatronico-ano",
    title: "Balto Censos - Automatizador de Censos",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Mecatronico%20del%20Ano%20-%20Balto.jpg",
    order: 3,
  },

  {
    id: "dest-5-1",
    categoryId: "datero-ano",
    title: "Dayner - Data Engineer",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Datero%20del%20Ano%20-%20Nene.jpg",
    order: 1,
  },
  {
    id: "dest-5-2",
    categoryId: "datero-ano",
    title: "Loxo - Data Scientist",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Datero%20del%20Ano%20-%20Luxo.jpg",
    order: 2,
  },
  {
    id: "dest-5-3",
    categoryId: "datero-ano",
    title: "Paul - Data Engineer",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Datero%20del%20Ano%20-%20Paul.jpg",
    order: 3,
  },
  {
    id: "dest-5-4",
    categoryId: "datero-ano",
    title: "Xuxi - Data Engineer",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Datero%20del%20Ano%20-%20Xuxi.jpg",
    order: 4,
  },
  {
    id: "dest-5-5",
    categoryId: "datero-ano",
    title: "Xino - Data Scientist",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Datero%20del%20Ano%20-%20Xino.jpg",
    order: 5,
  },
  {
    id: "dest-5-6",
    categoryId: "datero-ano",
    title: "Reno - Data Scientist",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Datero%20del%20Ano%20-%20Reno.jpg",
    order: 6,
  },
  {
    id: "dest-5-7",
    categoryId: "datero-ano",
    title: "Mattos - Data Engineer",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Datero%20del%20Ano%20-%20Bryan.jpg",
    order: 7,
  },

  {
    id: "dest-6-1",
    categoryId: "ausente-grupo",
    title: "Juárez - Está Jugando Dota 2",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ausente%20del%20grupo%20-%20David.jpg",
    order: 1,
  },
  {
    id: "dest-6-2",
    categoryId: "ausente-grupo",
    title: "Balto - Está Censando en Tangamandapio",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ausente%20del%20grupo%20-%20Balto.jpg",
    order: 2,
  },
  {
    id: "dest-6-3",
    categoryId: "ausente-grupo",
    title: "El Andy Firme Chinchaihuara - ¿Donde está?",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ausente%20del%20grupo%20-%20Andy.jpg",
    order: 3,
  },
  {
    id: "dest-6-4",
    categoryId: "ausente-grupo",
    title: "El Andy Bamba - Ta en el Gym",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ausente%20del%20grupo%20-%20Chinchaihuara.jpg",
    order: 4,
  },
  {
    id: "dest-6-5",
    categoryId: "ausente-grupo",
    title: "El Ingeniero Bel - Automatizando en el VRAEM",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/El%20ausente%20del%20grupo%20-%20Bel.jpg",
    order: 5,
  },

  {
    id: "dest-7-1",
    categoryId: "integrante-destacado",
    title: "Mauricio Whites - Edgy",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Integrante%20Destacado%20del%20Ano%20-%20Mauricio.jpg",
    order: 1,
  },
  {
    id: "dest-7-2",
    categoryId: "integrante-destacado",
    title: "Loxo Zote - A dieta",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Integrante%20Destacado%20del%20Ano%20-%20Luxo.jpg",
    order: 2,
  },
  {
    id: "dest-7-3",
    categoryId: "integrante-destacado",
    title: "TzinoTurrones - En esteroides",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Integrante%20Destacado%20del%20Ano%20-%20Xino.jpg",
    order: 3,
  },
  {
    id: "dest-7-4",
    categoryId: "integrante-destacado",
    title: "Marco ¿Becerra? o Toro - Arrecho en instagram",
    imageUrl:
      "https://okxiwlwzunrupqlpthwt.supabase.co/storage/v1/object/public/assets/images/Integrante%20Destacado%20del%20Ano%20-%20Marco.jpg",
    order: 4,
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
