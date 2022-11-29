const solution = (sides) => {
  let answer = 0;

  sides.sort((a, b) => a - b)
  sides[2] >= sides[0] + sides[1] ? answer = 2 : answer = 1

  return answer
}

const sides = [199, 72, 222]
console.log(solution(sides))