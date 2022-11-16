const solution = (hp) => {
  let answer = 0;

  answer =  Math.floor(hp/5)
  answer += Math.floor((hp%5)/3)
  answer += Math.floor((hp%5)%3)

  return answer;
  
}

let hp = 999
console.log(solution(hp))