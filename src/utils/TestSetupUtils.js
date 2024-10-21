export function generareRandomList(arr, n){
    // generate random list with n elements from input array arr, with no repeated elements
    let result = [];
    for (let i = 0; i < n; i++){
      let word = arr[Math.floor(Math.random() * arr.length)];
        while (result.includes(word)){
          word = arr[Math.floor(Math.random() * arr.length)]
        }
      result[i] = word
    }
    return result
  }

export function shuffle(array) {
    // shuffle inputed array
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

export function generateTestObject(arr){
    // generate test object
    let testArr = [];
    for (let i = 0; i < arr.length; i++){
      let id = i;
      let refArr = arr.filter((word) => word !== arr[i])
      let additionalArr = generareRandomList(refArr, 3)
      let variants = [arr[i]].concat(additionalArr);
      shuffle(variants);
      let correctIndex = variants.indexOf(arr[i])
      let elem = {
        id: id,
        correctIndex: correctIndex,
        variants: variants
      }
      testArr.push(elem)
    }
    return testArr
  }

