const solution = (array) => {
  const sliced = array.slice()

  array.sort((a, b) => b - a)

  return [array[0], sliced.indexOf(array[0])]
}

// Math.max(...array)

const array = [1, 8, 3]
console.log(solution(array))