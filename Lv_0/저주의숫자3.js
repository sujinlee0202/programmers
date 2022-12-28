const solution = (n) => {
  let answer = 0;
  for(let i=1; i<=n; i++) {
    if(i%3 === 0 || i.toString().includes('3')) {
      i=i+1;
      n=n+1;
      while(i%3 === 0 || i.toString().includes('3')) {
        i=i+1;
        n=n+1;
      }
    }
    answer = i
  }
  return answer
}

let n = 15
console.log(solution(n))
// n : 5 -> 7, 15 -> 25, 10 -> 16