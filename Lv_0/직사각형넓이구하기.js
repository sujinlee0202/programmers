const solution = (arr) => {
  let answer = 0;
  let height = [];
  let weight = [];

  for(let i=0; i<arr.length; i++) {
    weight.push(arr[i][0])
    height.push(arr[i][1])
  }

  let setHeight = [...new Set(height)];
  let setWeight = [...new Set(weight)];
  
  setWeight.sort((a, b) => a - b)
  setHeight.sort((a, b) => a - b)

  answer = (setWeight[1] - setWeight[0]) * (setHeight[1] - setHeight[0])

  return answer;
}