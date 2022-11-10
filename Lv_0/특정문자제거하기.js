const solution = (str, c) => {
  let answer = '';

  let replaceChar = new RegExp(c, 'g')
  answer = str.replace(replaceChar, '')
  // str.split(c).join('')

  return answer;
}