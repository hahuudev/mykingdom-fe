import request from '../axios';
import type { IUploadFileResponse } from './types';

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
