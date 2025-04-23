import { createQuery } from 'react-query-kit';
import { getAgentById, getJudgeAgent, getParentAgent } from './requests';
import type { IAgent } from './types';

export const useJudgeAgent = createQuery<IAgent[], void>({
  queryKey: ['/admin-portal/judge-agent'],
  fetcher: (params) => getJudgeAgent(),
});

export const useParentAgent = createQuery<IAgent[], void>({
  queryKey: ['/admin-portal/parent-agent'],
  fetcher: (params) => getParentAgent(),
});

export const useAgentById = createQuery<IAgent, string>({
  queryKey: ['/admin-portal/parent-agent'],
  fetcher: (params) => getAgentById(params),
});
