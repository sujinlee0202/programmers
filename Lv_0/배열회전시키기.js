const solution = (num, dir) => {
  let addNum = 0;

  if(dir === 'right') {
    addNum = num.pop()
    num.splice(0, 0, addNum)
  } else {
    addNum = num.slice(0, 1).join()
    num.splice(0, 1)
    num.push(Number(addNum))
  }

  return num;
}

// shift, unshift를 사용할 수도 있다.

const numbers = [4, 455, 6, 4, -1, 45, 6]
let direction = 'left'
console.log(solution(numbers, direction))