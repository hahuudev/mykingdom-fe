import request from '../axios';
import type { IComment, ICommentQuery, ICommentResponse, INewComment, IReactionComment } from './types';

export const getListComments = async (params?: Partial<ICommentQuery>): Promise<ICommentResponse> => {
  const { data } = await request({
    url: '/api/comments',
    method: 'GET',
    params,
  });

  return data;
};

export const newComment = async (formData: INewComment): Promise<IComment> => {
  const { data } = await request({
    url: '/api/comments',
    method: 'POST',
    data: formData,
  });

  return data?.data;
};

export const reactionComment = async (formData: IReactionComment) => {
  const { data } = await request({
    url: '/api/comment/reaction',
    method: 'POST',
    data: formData,
  });

  return data?.data;
};
