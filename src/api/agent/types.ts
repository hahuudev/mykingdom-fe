export interface IAgent {
  id: string;
  name: string;
  age: string;
  metric_titles: string[];
  description: string;
  social_url: string;
  image_url: string;
  agent_type: string;
  created_at: string;
  updated_at: string;
  debate_count: number;
  win_count: number;
  rate: number;
  metrics: IMetric[];
}

export interface IMetric {
  id: string;
  agent_id: string;
  metric: string;
  title: string;
  properties: string;
  created_at: string;
  updated_at: string;
}
