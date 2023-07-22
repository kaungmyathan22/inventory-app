import { create } from "zustand";

type State = {
  query: string;
};

type Action = {
  setSearchKeyword: (payload: State["query"]) => void;
};

export const useSearchStore = create<State & Action>((set) => ({
  query: "",
  setSearchKeyword: (text: State["query"]) => set(() => ({ query: text })),
}));
