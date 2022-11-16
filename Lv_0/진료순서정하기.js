const solution = (emergency) => {
  let sorted = emergency.slice().sort((a, b) => b - a);
  console.log(sorted)
  const answer = emergency.map(x => sorted.indexOf(x) + 1)

  return answer;
}

const emergency = [30, 10, 23, 6, 100]
console.log(solution(emergency))