import { create } from 'zustand'

const useCountStore = create((set) => ({
  count: 22,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  setCount: (num) => set({ count: num }),
}))

export default useCountStore