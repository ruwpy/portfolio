import { create } from "zustand";

interface MouseStoreProps {
  overButton: boolean;
  setOverButton: (isOver: boolean) => void;
}

export const useMouseStore = create<MouseStoreProps>()((set) => ({
  overButton: false,
  setOverButton: (isOver) => set({ overButton: isOver }),
}));
