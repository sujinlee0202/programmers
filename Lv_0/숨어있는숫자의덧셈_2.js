const solution = (my_string) => {
  const arr = my_string.replace(/[a-z]/gi, ' ').split(' ')
  let answer = 0;

  console.log(arr)

  for(let i=0; i<arr.length; i++) {
    answer += Number(arr[i])
  }

  return answer
}

let my_string = '1a2b3c4d123Z'
console.log(solution(my_string))