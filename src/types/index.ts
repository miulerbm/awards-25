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
  section?: string;
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

// Voting API Types
export interface VoteRequest {
  body: {
    userId: string;
    categoryId: string;
    nomineeId: string;
  };
}

export interface VoteResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    userId: string;
    categoryId: string;
    nomineeId: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface UserVote {
  id: string;
  votedAt: string;
  nomineeId: string;
  categoryId: string;
}

export interface UserVotesResponse {
  success: boolean;
  data: {
    userId: string;
    totalVotes: number;
    votes: UserVote[];
  };
}
