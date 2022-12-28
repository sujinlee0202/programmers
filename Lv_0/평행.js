const solution = (dots) => {
  const arr = [];
  let gradient = 0;

  for(let i=0; i<dots.length; i++) {
    for(let j=i+1; j<dots.length; j++) {
      gradient = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0])
      if(arr.includes(gradient)) return 1
      arr.push(gradient)
    }
  }

  return 0
}

const dots = [[1, 4], [9, 2], [3, 8], [11, 6]]
console.log(solution(dots))