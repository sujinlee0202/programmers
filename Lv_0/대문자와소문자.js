const solution = (my_string) => {
  let answer = '';

  for(let i=0; i<my_string.length; i++) {
    console.log(i)
    if(my_string[i].toUpperCase() === my_string[i]) {
      answer += my_string[i].toLowerCase();
    } else {
      answer += my_string[i].toUpperCase();
    }
  }

  return answer;
}

let my_string = 'cccCCC'
console.log(solution(my_string))