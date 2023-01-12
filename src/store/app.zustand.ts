import create from "zustand";

interface AppState {
  user_id: string | null;
  sign_in: (id: string) => void;
}

const useAppStore = create<AppState>()((set) => ({
  user_id: null,
  sign_in: (id) => set((state) => ({ user_id: id })),
}));

const get_id = () => {
  const id = useAppStore((state) => state.user_id);
  return id;
};