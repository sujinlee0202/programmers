const solution = (n, numlist) => numlist.filter((item) => item%n === 0)

let n = 5;
const numlist = [1, 9, 3, 10, 13, 5]

console.log(solution(n, numlist))