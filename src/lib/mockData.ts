import { Category, Nominee } from "@/types";

export const mockCategories: Category[] = [
  {
    id: "game-of-year",
    title: "GAME OF THE YEAR",
    description:
      "Recognizing a game that delivers the absolute best experience across all creative and technical fields.",
    slug: "game-of-the-year",
    order: 1,
  },
  {
    id: "best-game-direction",
    title: "BEST GAME DIRECTION",
    description:
      "For outstanding creative and technical achievement in game direction.",
    slug: "best-game-direction",
    order: 2,
  },
  {
    id: "best-narrative",
    title: "BEST NARRATIVE",
    description:
      "For outstanding storytelling achievement in an interactive entertainment experience.",
    slug: "best-narrative",
    order: 3,
  },
  {
    id: "best-art-direction",
    title: "BEST ART DIRECTION",
    description:
      "For outstanding creative and artistic achievement in art direction.",
    slug: "best-art-direction",
    order: 4,
  },
  {
    id: "best-score-music",
    title: "BEST SCORE AND MUSIC",
    description:
      "For outstanding music and original score composed for a game.",
    slug: "best-score-music",
    order: 5,
  },
  {
    id: "best-audio-design",
    title: "BEST AUDIO DESIGN",
    description:
      "For excellence in sound effects, audio implementation and/or technical sound design.",
    slug: "best-audio-design",
    order: 6,
  },
];

export const mockNominees: Nominee[] = [
  // Game of the Year
  {
    id: "ff7-rebirth",
    categoryId: "game-of-year",
    title: "Final Fantasy VII Rebirth",
    subtitle: "Square Enix",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    publisher: "Square Enix",
    developer: "Square Enix",
    order: 1,
  },
  {
    id: "astro-bot",
    categoryId: "game-of-year",
    title: "Astro Bot",
    subtitle: "Sony Interactive Entertainment",
    imageUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
    publisher: "Sony Interactive Entertainment",
    developer: "Team Asobi",
    order: 2,
  },
  {
    id: "metaphor",
    categoryId: "game-of-year",
    title: "Metaphor: ReFantazio",
    subtitle: "Atlus",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    publisher: "Atlus",
    developer: "Studio Zero",
    order: 3,
  },
  {
    id: "elden-ring-dlc",
    categoryId: "game-of-year",
    title: "Elden Ring: Shadow of the Erdtree",
    subtitle: "Bandai Namco",
    imageUrl:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
    publisher: "Bandai Namco",
    developer: "FromSoftware",
    order: 4,
  },
  {
    id: "balatro",
    categoryId: "game-of-year",
    title: "Balatro",
    subtitle: "Playstack",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    publisher: "Playstack",
    developer: "LocalThunk",
    order: 5,
  },
  {
    id: "black-myth",
    categoryId: "game-of-year",
    title: "Black Myth: Wukong",
    subtitle: "Game Science",
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    publisher: "Game Science",
    developer: "Game Science",
    order: 6,
  },

  // Best Game Direction
  {
    id: "ff7-rebirth-direction",
    categoryId: "best-game-direction",
    title: "Final Fantasy VII Rebirth",
    subtitle: "Square Enix",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    publisher: "Square Enix",
    developer: "Square Enix",
    order: 1,
  },
  {
    id: "astro-bot-direction",
    categoryId: "best-game-direction",
    title: "Astro Bot",
    subtitle: "Sony Interactive Entertainment",
    imageUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
    publisher: "Sony Interactive Entertainment",
    developer: "Team Asobi",
    order: 2,
  },
];

// Helper functions para obtener datos mock
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
