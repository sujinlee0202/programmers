const solution = (cipher, code) => {
  let answer = '';

  for(let i=1; i<Math.floor((cipher.length/code)+1); i++) {
    answer += cipher[code*i-1]
  }

  return answer;
}

let cipher = 'aa bb cc dd ee ff gg '
let code = 4;

console.log(solution(cipher, code))