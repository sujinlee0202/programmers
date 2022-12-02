const solution = (quiz) => {
  let answer = [];

  for(let i=0; i<quiz.length; i++) {
    eval(quiz[i].split('=')[0]) === 
    eval(quiz[i].split('=')[1])
    ? answer.push('O')
    : answer.push('X')
  }

  return answer
}

const quiz = ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2", "100 - 5 = 95"]
console.log(solution(quiz))

/*
다른 풀이

for(let i=0; i<quiz.length; i++) {
  eval(quiz[i].split('').splice(0, quiz[i].indexOf('=')).join('')) === 
  Number(quiz[i].split('').splice(quiz[i].indexOf('=')+2).join(''))
  ? answer.push('O')
  : answer.push('X')
}
*/