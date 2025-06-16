import { create } from 'zustand'

const useTestStore = create((set) => ({
  tests: {
    "5": {
      url: "5",
      img: 'star',
      title: "5",
      subtitle: "Случайные 5 слов",
      wordsCounter: 5,
      time: 2
    },
    // "50": {
    //   url: "50",
    //   img: 'star',
    //   title: "50",
    //   subtitle: "Случайные 50 слов",
    //   wordsCounter: 50,
    //   time: 2
    // },
    // "100": {
    //   url: "100",
    //   img: 'star',
    //   title: "100",
    //   subtitle: "Случайные 100 слов",
    //   wordsCounter: 100,
    //   time: 4
    // }
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