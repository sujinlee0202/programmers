const solution = (balls, share) => {
  let numerator = 1;
  let denominator1 = 1, denominator2 = 1;

  for(let i=balls; i>0; i--) {
    numerator = numerator * i
  }

  for(let i=(balls-share); i>0; i--) {
    denominator1 = denominator1 * i
  }

  for(let i=share; i>0; i--) {
    denominator2 = denominator2 * i
  }

  return Math.round(numerator / (denominator1 * denominator2))
}

let balls = 30
let share = 2
console.log(solution(balls, share))