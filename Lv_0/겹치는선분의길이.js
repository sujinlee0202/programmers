const solution = (lines) => {
  const spot = [];
  const obj = {};
  const arr = [];
  let result = 0;

  for(let i=0; i<lines.length; i++) {
    for(let j=0; j<=lines[i][1]-lines[i][0]; j=j+0.5) {
      console.log(lines[i][0]+j)
      spot.push(lines[i][0]+j)
    }
  }

  spot.sort((a, b) => a - b)

  spot.forEach((n) => {
    if(obj[n]) {
      ++obj[n]
    } else {
      obj[n] = 1
    }
  })

  for(let key in obj) {
    if(obj[key] >= 2) {
      arr.push([Number(key), obj[key]])
    }
  }

  arr.sort((a, b) => a[0] - b[0])

  for(let i=1; i<arr.length-1; i=i+2) {
    if(spot.includes(arr[i][0])) {
      result++
    }
  }

  return result
}

const lines = [[0, 5], [3, 9], [1, 10]]
console.log(solution(lines))