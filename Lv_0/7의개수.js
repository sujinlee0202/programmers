const solution = (arr) => {
  let answer = 0;
  arr = arr.join('').split('')
  console.log(arr)
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === '7') answer++;
  }
  return answer
}

const arr = [7, 77, 17]
console.log(solution(arr))