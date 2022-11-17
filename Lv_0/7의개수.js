const solution = (arr) => {
  let answer = 0;
  arr = arr.join('').split('')
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === '7') answer++;
  }
  return answer
}

// arr.join('').split('7').length-1;

const arr = [7, 77, 17]
console.log(solution(arr))