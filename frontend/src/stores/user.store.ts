import { IUser } from "@/types/model";
import { create } from "zustand";

type State = {
  user: IUser | null;
};

type Action = {
  login: (payload: State["user"]) => void;
  logout: () => void;
};

export const useUserStore = create<State & Action>((set) => ({
  user: null,
  login: (payload: State["user"]) => set(() => ({ user: payload })),
  logout: () => set(() => ({ user: null })),
}));
