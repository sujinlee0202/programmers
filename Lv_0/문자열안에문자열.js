const solution = (str1, str2) => {
  if(str1.includes(str2)) return 1;
  else return 2;
}

let str1 = 'ppprrrogrammers'
let str2 = 'pppp'

console.log(solution(str1, str2))