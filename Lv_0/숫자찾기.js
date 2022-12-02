const solution = (num, k) => {
  if(num.toString().includes(k)) {
    return num.toString().indexOf(k)+1
  } else {
    return -1
  }
}

let num = 232443
let k = 4

console.log(solution(num, k))