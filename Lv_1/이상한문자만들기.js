const solution = (str) => {
  let answer = '';
  let arr = str.split(' ') 
  let newArr = [];

  for(let i=0; i<arr.length; i++) {
    answer = '';
    for(let j=0; j<arr[i].length; j++) {
      if(j%2 === 0) {
        answer = answer + arr[i][j].toUpperCase()
      } else {
        answer = answer + arr[i][j].toLowerCase()
      }
    }
    newArr.push(answer)
    console.log(newArr)
  }

  answer = newArr.join(' ')

  return answer;
}