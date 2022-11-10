const solution = (str) => {
  let arr = str.split('')
  let answer = '';

  for(let i=0; i<str.length-4; i++) arr[i] = '*'
  
  return answer = arr.join('')
}

// str.replace(/\d(?=\d{4})/g, "*")


let str = '027778888'
console.log(solution(str))
