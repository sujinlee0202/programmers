const solution = (dots) => {
  let answer = 0;
  
  if(dots[0] > 0 && dots[1] > 0) {
    answer = 1;
  } else if(dots[0] < 0 && dots[1] > 0) {
    answer = 2;
  } else if(dots[0] < 0 && dots[1] < 0) {
    answer = 3;
  } else if(dots[0] > 0 && dots[1] < 0) {
    answer = 4;
  }

  return answer;
}

const dots = [2, 4]
console.log(solution(dots))