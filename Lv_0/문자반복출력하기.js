const solution = (str, num) => {
  let answer = ''

  /* 다른 풀이
  for(let i=0; i<str.length; i++) {
    for(let j=0; j<num; j++) {
      answer = answer + str[i]
    }
  }
  */

  for(let i=0; i<str.length; i++) {
    answer += str[i].repeat(num)
  }

  return answer;
}