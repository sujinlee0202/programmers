const solution = (arr) => {
  let answer = 0,sum = 0;

  arr.map(item => sum += item)
  answer = sum/arr.length

  return answer;
}