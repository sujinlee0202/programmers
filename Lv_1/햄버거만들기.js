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