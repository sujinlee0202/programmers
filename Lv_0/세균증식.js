const solution = (n, t) => {
  for(let i=0; i<t; i++) {
    n = n*2
  }
  
  return n
}

let n = 7;
let t = 15;

console.log(solution(n, t))