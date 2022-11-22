const solution = (n) => {
  let count1 = 1, count2 = 1, fact = 1;

  while(1) {
    count1 = count2
    fact = 1
    for(let i=count1; i>1; i--) {
      fact = fact * count1
      count1--
    }
    if(n<fact) {
      return count2-1
    }
    count2++;
  }
}

let n = 3628800
console.log(solution(n))