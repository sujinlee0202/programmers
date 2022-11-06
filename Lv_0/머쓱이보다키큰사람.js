const solution = (arr, height) => {
  let answer = 0;

  for(let i=0; i<arr.length; i++) {
    if(arr[i]>height) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([180, 120, 110], 190))