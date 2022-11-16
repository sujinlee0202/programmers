const solution = (age) => {
  let answer = '';
  let strAge = age.toString()

  return answer = strAge.replace(/0/gi, 'a').replace(/1/gi, 'b').replace(/2/gi, 'c').replace(/3/gi, 'd').replace(/4/gi, 'e').replace(/5/gi, 'f').replace(/6/gi, 'g').replace(/7/gi, 'h').replace(/8/gi, 'i').replace(/9/gi, 'j')
}

const solution2 = (age) => {
  let answer='';
  const eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  age = age.toString();

  for(let i=0; i<age.length; i++) {
    answer += eng[age[i]]
  }

  return answer;
}

let age = 23;
console.log(solution(age))
console.log(solution2(age))

// 0 1 2 3 4 5 6 7 8 9 -> 인덱스
// a b c d e f g h i j