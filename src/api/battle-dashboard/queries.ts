import { createQuery } from 'react-query-kit';
import { getBattleById, getBattles } from './requests';
import type { IBattle, IBattleQuery, IBattleResponse } from './types';

export const useBattles = createQuery<IBattleResponse, Partial<IBattleQuery>>({
  queryKey: ['/admin-portal/battles'],
  fetcher: (params) => getBattles(params),
});

export const useBattleById = createQuery<IBattle, string>({
  queryKey: ['/admin-portal/battles/detail'],
  fetcher: (params) => getBattleById(params),
});
