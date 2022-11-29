const solution = (arr) => {
  const answer = [];
  for(let i=0; i<arr.length; i++) {
    answer.push(arr[i].length)
  }
  return answer
}

const strlist = ["We", "are", "the", "world!"]
console.log(solution(strlist))