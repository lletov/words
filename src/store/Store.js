import { create } from 'zustand'

const useCountStore = create((set) => ({
  count: 22,
  object: {},
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  setCount: (num) => set({ count: num }),
  setObjectGroup: (id, value) =>
    set((state) => ({
      objectD: {
        ...state.objectD,
        [id]: value
      },
    })),
}))

// const useCountStore = create((set) => ({
//   bears: 0,
//   mikky: {g: 6, d: 4},
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

export default useCountStore