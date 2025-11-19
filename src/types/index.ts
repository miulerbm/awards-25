export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  slug: string;
  order: number;
}

export interface Nominee {
  id: string;
  categoryId: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  publisher?: string;
  developer?: string;
  order: number;
}

export interface Vote {
  id: string;
  userId: string;
  categoryId: string;
  nomineeId: string;
  createdAt: string;
  updatedAt?: string;
}

export interface VoteStats {
  categoryId: string;
  nomineeId: string;
  voteCount: number;
  percentage: number;
}
