const solution = (str) => {
  let answer = 0;

  const arr = str.split(' ')

  for(let i=0; i<arr.length; i++) {
    if(i%2 !== 0 && arr[i] === '-') {
      arr[i+1] = arr[i+1] * -1
    }

    if(i%2 === 0) {
      answer = answer + Number(arr[i])
    }
  }

  return answer;
}

console.log(solution("3 + 4"))

