import type { IPagination } from '@/types';
export interface IAgent {
  id: string;
  name: string;
  age: number;
  metric_titles: string;
  description: string;
  social_url: string;
  image_url: string;
  agent_type: string;
}

export interface IDocument {
  id: number;
  document_url: string;
  document_type: string;
  document_size: number;
  document_name: string;
  unique_name: string;
}
export interface IBattle {
  id: string;
  topic: string;
  agent1_id: string;
  agent2_id: string;
  start_at: string;
  public_at: string;
  duration: number;
  agent1_bet_count: number;
  agent2_bet_count: number;
  agent1_total_bet_amount: number;
  agent2_total_bet_amount: number;
  judge_votes_agent1: number[];
  judge_votes_agent2: number[];
  winner_id: string;
  created_at: number;
  updated_at: number;
  agent1: IAgent;
  agent2: IAgent;
  description: string;
  content: string;
  documents: IDocument[];
  platform_fee: number;
  status: string;
}

export interface IBattleResponse {
  pagination: IPagination;
  data: IBattle[];
}

export interface IBattleQuery {
  page: number;
  limit: number;
  time_type: string;
}

export interface IUploadFileResponse {
  file_name: string;
  unique_name: string;
  url: string;
  content_type: string;
  size: number;
}
