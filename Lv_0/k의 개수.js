const solution = (i, j, k) => {
  let arr = [];

  for(let start=i; start<=j; start++) {
    arr.push(start)
  }
  
  return arr.join('').split(k).length-1
}

let i = 10;
let j = 50; 
let k = 5;
console.log(solution(i, j, k))