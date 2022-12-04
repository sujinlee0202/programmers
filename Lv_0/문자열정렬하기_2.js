const solution = (my_string) => {
  return my_string.toLowerCase().split('').sort().join('')
}

let my_string = 'heLLo'
console.log(solution(my_string))