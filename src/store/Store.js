import { create } from 'zustand'

const useTestStore = create((set) => ({
  bears: 9,
  mikky: {},
  testVariants: [3,5,10],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))

export default useTestStore