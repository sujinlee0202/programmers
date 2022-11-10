const solution = (num) => {
  let answer = ''

  if (num%2 === 0) answer = 'Even'
  else answer = 'Odd' 

  return answer
}

// return num % 2 ? 'Odd' : 'Even'

let num = 3;
console.log(solution(num))