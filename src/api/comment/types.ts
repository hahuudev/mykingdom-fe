import type { IPagination } from '@/types';

export interface IComment {
  id: string;
  user_id: string;
  parent_id: string;
  comment: string;
  battle_id: string;
  status: string;
  user: {
    id: string;
    username: string;
    avatar: string;
  };
  created_at: string;
  chill_count: number;
  reaction_count: number;
  user_reaction_type: string;
}

export interface ICommentQuery {
  page: number;
  limit: number;
  sort_key: string;
  sort_type: string;
}

export interface ICommentResponse {
  pagination: IPagination;
  data: IComment[];
}

export interface INewComment {
  comment: string;
  parent_id?: string;
}

export interface IReactionComment {
  comment_id: string;
  reaction: 'LOVE' | 'LIKE' | 'SAD';
}
