const solution = (str) => str.replace(/[a-z]/gi, '').split('').sort((a, b) => a - b).map(x => Number(x))

let my_string = 'hi12392'
console.log(solution(my_string))