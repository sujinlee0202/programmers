const solution = (numbers, k) => {
  return numbers[(k - 1) * 2 % numbers.length];
}
const numbers = [1, 2, 3, 4]
let k = 8

console.log(solution(numbers, k))
