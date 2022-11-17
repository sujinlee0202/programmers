const solution = (array, n) => {
  let nearCount = 0;
  const arrayCount = [];
  let answer = 0;

  array.sort((a, b) => a - b)

  for(let i=0; i<array.length; i++) {
    nearCount = Math.abs(array[i] - n)
    arrayCount.push(nearCount)
  }

  const copyArray = arrayCount.slice();
  arrayCount.sort((a, b) => a - b)

  answer = array[copyArray.indexOf(arrayCount[0])]

  return answer;
}

const array = [3, 28, 10, 12, 12]
let n = 20

console.log(solution(array, n))