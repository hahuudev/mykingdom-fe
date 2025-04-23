import type { SetBattleSchema } from '@/components/BattleForm/libs/validators';
import request from '../axios';
import type { IBattle, IBattleQuery, IUploadFileResponse } from './types';

export const getBattles = async (params: Partial<IBattleQuery>) => {
  const { data } = await request({
    url: '/admin-portal/battle',
    method: 'GET',
    params,
  });

  return data;
};

export const getBattleById = async (battleId: string) => {
  const { data } = await request({
    url: '/admin-portal/battle/' + battleId,
    method: 'GET',
  });

  return data?.data;
};

export const createBattle = async (formData: SetBattleSchema): Promise<IBattle> => {
  const { data } = await request({
    url: '/admin-portal/battle/create',
    method: 'POST',
    data: formData,
  });

  return data?.data;
};
export const modifyBattle = async ({ formData, battleId }: { formData: SetBattleSchema; battleId: string }): Promise<IBattle> => {
  const { data } = await request({
    url: '/admin-portal/battle/update/' + battleId,
    method: 'PUT',
    data: formData,
  });

  return data?.data;
};

export const uploadMultiFile = async (formData: FormData, onProgress?: (progress: number) => void): Promise<IUploadFileResponse[]> => {
  const { data } = await request({
    url: '/api/s3/upload-multiple-file',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progressEvent) => {
      if (onProgress) {
        const progress = Math.round((progressEvent.loaded / Number(progressEvent.total || 0)) * 100);
        onProgress(progress);
      }
    },
    data: formData,
  });

  return data?.data;
};
