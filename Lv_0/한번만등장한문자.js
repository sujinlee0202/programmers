const solution = (str) => {
  const arr = str.split('')
  let obj = {}
  let answer = [];

  arr.forEach((n) => {
    if(obj[n]) {
      ++obj[n]
    } else {
      obj[n] = 1
    }
  })

  for(let key in obj) {
    if(obj[key] === 1) {
      console.log(key)
      answer.push(key)
    }
  }

  return answer.sort().join('')
}

let str = 'abcabcadcefg'
console.log(solution(str))
// result : d