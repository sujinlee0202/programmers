const solution = (arr) => {
  let answer = [];

  for(let i=0; i<arr.length; i++) {
    for(let j=1; j<arr.length; j++) {
      if(i !== j) {
        answer.push(arr[i] + arr[j])
      } else {
        continue;
      }
    }
  }

  answer = [...new Set(answer)]
  answer = answer.sort((a, b) => a - b)

  return answer;
}

const arr = [5, 0, 2, 7]
console.log(solution(arr))