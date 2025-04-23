import { createQuery } from 'react-query-kit';
import type { ICommentQuery, ICommentResponse } from './types';
import { getListComments } from './requests';

export const useListComments = createQuery<ICommentResponse, Partial<ICommentQuery>>({
  queryKey: ['/api/comments'],
  fetcher: (params) => getListComments(params),
});
