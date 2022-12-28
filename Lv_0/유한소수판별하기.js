const solution = (a, b) => {
  let gcd = 1;
  const brr = [];

  for(let i=2; i<=Math.min(a, b); i++) {
    if(a%i === 0 && b%i === 0) {
      gcd = i;
    }
  }

  b = b/gcd;

  for(let i=2; i<=b; i++) {
    if(b%i === 0) {
      brr.push(i)
    }
  }
  
  let copyBrr = brr.slice()

  for(let i=0; i<copyBrr.length; i++) {
    for(let j=i+1; j<copyBrr.length; j++) {
      if(copyBrr[j]%copyBrr[i] === 0) {
        if(brr.indexOf(copyBrr[j]) < 0) {
          continue;
        }
        brr.splice(brr.indexOf(copyBrr[j]), 1)
      }
    }
  }
  
  for(let i=0; i<brr.length; i++) {
    if(brr[i] === 2 || brr[i] === 5) {
      continue;
    } else {
      return 2;
    }
  }

  return 1
}

let a = 12;
let b = 21;
console.log(solution(a, b))