const solution = (str) => {
  let answer = 0;
  const arr = str.split(' ')
  const temp = [];

  for(let i=0; i<arr.length; i++) {
    temp.push(arr[i])

    if(temp[temp.length-1] === 'Z') {
      temp.pop()
      answer -= Number(temp[temp.length-1])
      temp.pop()
    } else {
      answer += Number(temp[temp.length-1])
    }
  }
  return answer;
}

let string = '10 20 30 Z Z Z 40 50'
console.log(solution(string))