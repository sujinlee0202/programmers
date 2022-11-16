const solution = (my_string) => {
  let answer = ''
  const str_arr = [...new Set(my_string)]
  answer = str_arr.join('')

  return answer;
}

let my_string = 'people'
console.log(solution(my_string))