import { create } from 'zustand'

const useStore = create((set) => ({
  inputNumber: 0,
  updateInputNumber: (num) => set({ inputNumber: num }),
}))