const solution = (arr) => {
  let answer = 0;
  let height = [];
  let weight = [];

  console.log(arr[0], arr[1], arr[2], arr[3])

  for(let i=0; i<arr.length; i++) {
    weight.push(arr[i][0])
    height.push(arr[i][1])
  }

  let setHeight = [...new Set(height)];
  let setWeight = [...new Set(weight)];

  console.log(weight, height)
  console.log(setWeight, setHeight)
  
  setWeight.sort((a, b) => a - b)
  setHeight.sort((a, b) => a - b)

  console.log(setWeight[0], setWeight[1])
  console.log(setHeight[0], setHeight[1])

  answer = (setWeight[1] - setWeight[0]) * (setHeight[1] - setHeight[0])
 
  // answer = weight*height

  return answer;
}

 console.log(solution([[1, 5], [100, 5], [1, -1], [100, -1]]))