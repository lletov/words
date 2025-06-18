import useTestStore from './../store/Store';

const state = useTestStore.getState();
const statisticOn = state.statisticOn;
const setStatisticOn = state.setStatisticOn;

export function setWordStatistic(word, status) {
    const statistic = JSON.parse(localStorage.getItem('statistic'));
    if (statisticOn === 'true') {
        statistic[word] 
            ? statistic[word].show += 1
            : statistic[word] = {show: 1, correct: 0}
        if (status)
            {statistic[word].correct += 1;}
        localStorage.setItem('statistic', JSON.stringify(statistic))
    }
}

export function getWordStatistic(word, state, statistic) {
 if (state === 'true' && statistic && statistic[word]) {
    return Math.round(statistic[word].correct/statistic[word].show * 100) + '%'
 }
}