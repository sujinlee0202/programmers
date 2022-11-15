const solution = (n) => {
  let string = '';
  let answer = 0;

  string = n.toString()

  for(let i=0; i<string.length; i++) {
    answer += Number(string[i])
  }

  return answer;
}

let n = 930211
console.log(solution(n))