import { create } from 'zustand'

const useTestStore = create((set) => ({
  tests: {
    "5": {
      url: "5",
      title: "Title 5",
      subtitle: "Subtitle 5",
      wordsCounter: 5,
      time: 10
    },
    "10": {
      url: "10",
      title: "Title 10",
      subtitle: "Subtitle 10",
      wordsCounter: 10,
      time: 15
    }
  },
  testArray: null,
  questionNumber: 0,
  testWordsNumber: 0,
  startTime: null,
  endTime: null, 
  result: [],

  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),

  setTestArray: (arr) => set({ testArray: arr }),
  setQuestionNumber: (n) => set({ questionNumber: n }),
  resetQuestionNumber: () => set({ questionNumber: 0 }),
  increaseQuestionNumber: () => set((state) => ({ questionNumber: state.questionNumber + 1 })),
  setTestWordsNumber: (n) => set({ testWordsNumber: n }),
  setStartTime: () => set({ startTime: new Date()}),
  setEndTime: () => set({ endTime: new Date()}),
  addResult: (el) => set((state) => ({ result: [...state.result, el] })),
  resetResult: (el) => set((state) => ({ result: [] })),
}))

export default useTestStore