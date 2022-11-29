const solution = (n) => {
  let count = 0, answer = 0;
  for(let i=1; i<n+1; i++) {
    count = 0;
    for(let j=1; j<n+1; j++) {
      if(i%j === 0) count++;
    }
    if(count>=3) answer++;
  }
  return answer
}

let n = 10;
console.log(solution(n))