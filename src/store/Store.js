import { create } from 'zustand'

const useCountStore = create((set) => ({
  count: 22,
  object: {},
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  setCount: (num) => set({ count: num }),
  setObjectField: (id, text) =>
    set((state) => ({
      object: {
        ...state.object,
        [id]: text 
      },
    })),
    updateObjectField: (id, text) =>
      set((state) => ({
        object: {...state.object, id: text}
      })),
}))

export default useCountStore