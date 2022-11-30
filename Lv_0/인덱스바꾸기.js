const solution = (str, num1, num2) => {
  const arr = str.split('')
  let first = arr[num1]
  let second = arr[num2]
  
  arr.splice(num1, 1, second)
  arr.splice(num2, 1, first)

  return arr.join('')
}

// str = str.split('');
// [str[num1], str[num2]] = [str[num2], str[num1]];
// return str.join('');

let my_string = 'i love you'
let num1 = 3;
let num2 = 6;

console.log(solution(my_string, num1, num2))