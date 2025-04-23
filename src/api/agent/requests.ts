import type { AgentSchema } from '@/modules/AgentDetailPage/libs/validators';
import request from '../axios';

export const getJudgeAgent = async () => {
  const { data } = await request({
    url: '/admin-portal/judge-agent',
    method: 'GET',
  });

  return data?.data;
};

export const getParentAgent = async () => {
  const { data } = await request({
    url: '/admin-portal/parent-agent',
    method: 'GET',
  });

  return data?.data;
};

export const getAgentById = async (agentId: string) => {
  const { data } = await request({
    url: '/admin-portal/agent/' + agentId,
    method: 'GET',
  });

  return data?.data;
};

export const updateAgent = async ({ formData, agentId }: { agentId: string; formData: AgentSchema }) => {
  const { data } = await request({
    url: '/admin-portal/update-agent/' + agentId,
    method: 'PUT',
    data: formData,
  });

  return data;
};

export const updateAgents = async (formData: AgentSchema) => {
  const { data } = await request({
    url: '/admin-portal/update-agent',
    method: 'POST',
    data: formData,
  });

  return data;
};
