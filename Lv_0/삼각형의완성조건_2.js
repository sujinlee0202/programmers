const solution = (sides) => {
  let arr = [];
  let count = 0;

  for(let i=1; i<=sides[0]+sides[1]; i++) {
    arr = [sides[0], sides[1], i]
    arr.sort((a, b) => b - a)
    if(arr[0] < arr[1] + arr[2]) {
      count++
    }
  }

  return count
}

const sides = [3, 6]
console.log(solution(sides))