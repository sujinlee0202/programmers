const solution = (arr) => {
  let answer = [];
  let even = 0, odd = 0;

  arr.map((item) => {
    if (item %2 === 0) even++;
    else odd++;
  })

  /* 다른 case
  for(let i=0; i<arr.length; i++) {
    if(arr[i]%2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  */

  answer.push(even)
  answer.push(odd)

  return answer;
}