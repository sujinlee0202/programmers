const solution = (arr, n) => {
  let answer = 0;

  arr.map((item) => { if (item === n) answer++ })

  return answer;
}

const arr = [0, 2, 3, 4];
let n = 1;

console.log(solution(arr, n))