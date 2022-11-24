const solution = (n) => {
  let arr = [];
  
  for(let i=2; i<=n; i++) {
    if(n%i === 0) {
      arr.push(i)
    }
  }
  
  let copyArr = arr.slice()

  for(let i=0; i<copyArr.length; i++) {
    for(let j=i+1; j<copyArr.length; j++) {
      if(copyArr[j]%copyArr[i] === 0) {
        if(arr.indexOf(copyArr[j]) < 0) {
          continue;
        }
        arr.splice(arr.indexOf(copyArr[j]), 1)
      }
    }
  }

  return arr;
}

let n = 420;
console.log(solution(n))