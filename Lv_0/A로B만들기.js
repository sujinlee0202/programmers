const solution = (before, after) => {
  let beforeObj = {}, afterObj = {};
  let beforeArr = [], afterArr = [];

  before = before.split('')
  after = after.split('')

  before.forEach((n) => {
    if(beforeObj[n]) {
      ++beforeObj[n]
    } else {
      beforeObj[n] = 1
    }
  })

  after.forEach((n) => {
    if(afterObj[n]) {
      ++afterObj[n]
    } else {
      afterObj[n] = 1
    }
  })

  beforeArr = Object.entries(beforeObj).sort()
  afterArr = Object.entries(afterObj).sort()

  if(beforeArr.toString() === afterArr.toString()) {
    return 1
  } else {
    return 0
  }
}

// 순서를 바꾼다!
// before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;

let before = 'happy'
let after = 'ppahy'
console.log(solution(before, after))