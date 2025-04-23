import type { IUser } from '@/api/auth/types';
import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface IUserStore {
  user: IUser;
  isVerifiedUser: boolean | undefined;
  isWalletConnected: boolean | undefined;
  verifyToken: string;

  setUser: (data: IUser) => void;
  setIsVerifiedUser: (data: boolean) => void;
  setIsWalletConnected: (data: boolean) => void;
  setVerifyToken: (data: string) => void;
  logout: () => void;
}

const useBaseUserStore = create<IUserStore>()(
  persist(
    (set) => ({
      verifyToken: '',
      isVerifiedUser: false,
      isWalletConnected: false,
      user: {} as IUser,
      setUser: (data) => set((state) => ({ ...state, user: data })),
      setVerifyToken: (data) => set((state) => ({ ...state, verifyToken: data })),
      setIsVerifiedUser: (data) => set((state) => ({ ...state, isVerifiedUser: data })),
      setIsWalletConnected: (data) => set((state) => ({ ...state, isWalletConnected: data })),
      logout: () =>
        set(() => ({ accessToken: '', verifyToken: '', user: {} as IUser, isWalletConnected: false, isVerifiedUser: undefined })),
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useUserStore = createSelectorFunctions(useBaseUserStore);
