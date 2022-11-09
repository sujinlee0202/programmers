const solution = (arr) => {
    let answer = 0, index = 0, startIndex = 0;
    let ham = arr.join('')
  
    for(let i=0; i<arr.length; i++) {
      if(!ham.includes('1231')) {
          return answer;
      } else {
          index = ham.indexOf('1231')
          ham = ham.replace('1231', '')
          startIndex = Math.floor((ham.length - index)/3)
          ham = ham.substring(index - startIndex)
          answer++;
      }
    }
  }

const arr = [1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
console.log(solution(arr))


/* 
Programmers Pass But, 정확한 답이 아님.

const solution = (arr) => {
  let answer = 0;
  let ham = arr.join('')
  let index = 0;

  for(let i=0; i<arr.length; i++) {
    if(!ham.includes('1231')) {
        return answer;
    } else {
        index = ham.indexOf('1231')
        ham = ham.replace(/1231/, '')
        ham = ham.substring(index-4)
        answer++;
    }
  }
}
*/