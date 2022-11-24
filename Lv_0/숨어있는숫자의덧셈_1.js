const solution = (str) => {
  const strArr = str.replace(/[^0-9]/gi, '').split('').map(item => Number(item))
  let answer = 0;

  for(x of strArr) {
    answer += x
  }

  return answer
}

// reduce 사용 가능
// .reduce((a, b) => Number(a) + Number(b))

let my_string = 'aAb1B2cC34oOp'
console.log(solution(my_string))