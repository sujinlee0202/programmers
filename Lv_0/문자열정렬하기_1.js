const solution = (str) => {
  str = str.replace(/[a-z]/gi, '').split('').sort((a, b) => a - b).map(x => Number(x))
  console.log(str)
}

let my_string = 'hi12392'
console.log(solution(my_string))