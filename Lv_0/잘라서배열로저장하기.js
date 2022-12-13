const solution = (my_str, n) => {
  let answer = [];
  let content = '';
  let i=0;

  while(1) {
    content = my_str.slice(n*i, n*(i+1))
    answer.push(content)
    i++;

    if(answer[answer.length-1] === '') {
      answer.pop();
    }

    if(n*i > my_str.length) {
      return answer;
    }
  }
}


// str.substr(startIndex, count) 사용한 case
// const solution = (my_str, n) => {
//   let answer = [];

//   for(let i=0; i<my_str.length; i+= n) {
//     answer.push(my_str.substr(i, n))
//   }

//   return answer;
// }


// str.substring(startIndex, endIndex) 사용한 case
// const solution = (my_str, n) => {
//   let answer = [];

//   for(let i=0; i<my_str.length; i+= n) {
//     answer.push(my_str.substring(i, i+n))
//   }

//   return answer;
// }
