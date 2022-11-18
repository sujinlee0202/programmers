
// index - startIndex 가 커질수록 많이 자르는 것, 결국 startIndex가 작아야 많이 자르는 것

/* Time over case ->
const solution = (arr) => {
  let answer = 0;
  let ham = arr.join('')

  for(let i=0; i<arr.length; i++) {
    if(!ham.includes('1231')) {
      return answer;
    } else {
      ham = ham.replace(/1231/, '')
      answer++;
    }
  }
}
*/

/* Programmers Pass
const solution = (arr) => {
  let answer = 0;
  let ham = arr.join('')
  let index = 0;

  for(let i=0; i<arr.length; i++) {
    if(!ham.includes('1231')) {
      return answer;
    } else {
      ham = ham.replace(/1231/, ' ')
      answer++;
      index = ham.indexOf(' ')
      ham = ham.replace(' ', '').substring(index-4)
    }
  }
}
*/

// 제일 짧은
// const solution = (arr) => {
//   let answer = 0, index = 0, startIndex = 0;
//   let ham = arr.join('')

//   for(let i=0; i<arr.length; i++) {
//     if (ham.includes('1231')) {
//       ham = ham.replace(/1231/, ' ')
//       index = ham.indexOf(' ')      
//       startIndex = Math.ceil((ham.length-index)/3+1)
//       ham = ham.replace(' ', '').substring(index - startIndex)
//       answer++;
//     } else {
//       return answer;
//     }
//   }
// }