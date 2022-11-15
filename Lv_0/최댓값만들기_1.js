const solution = (arr) => {
  arr.sort((a, b) => b - a)
  return arr[0]*arr[1]
}

const arr = [0, 31, 24, 10, 1, 9]
console.log(solution(arr))