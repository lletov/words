const statistic = JSON.parse(localStorage.getItem('statistic'));

export function setWordStatistic(word, status) {
    statistic[word] 
      ? statistic[word].show += 1
      : statistic[word] = {show: 1, correct: 0}
    if (status)
      {statistic[word].correct += 1;}

    localStorage.setItem('statistic', JSON.stringify(statistic))
}

export function getWordStatistic(word) {
 if (statistic && statistic[word]) {
    return statistic[word].correct/statistic[word].show * 100 + '%'
 }
}