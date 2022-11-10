const solution = (common) => {
  let difference = common[1]-common[0]
  let ratio = common[1]/common[0]

  if(difference === common[2]-common[1]) {
    answer = common[common.length-1]+difference
  } else {
    answer = common[common.length-1]*ratio
  }
  return answer
}

console.log(solution(common))