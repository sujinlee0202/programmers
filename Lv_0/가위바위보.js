const solution = (rsp) => {
  const arr = rsp.split('')

  for(let i=0; i<arr.length; i++) {
    if(arr[i] === '2') {
      arr[i] = '0'
    } else if(arr[i] === '0') {
      arr[i] = '5'
    } else if(arr[i] === '5') {
      arr[i] = '2'
    }
  }

  return arr.join('');
}

let rsp = '205'
console.log(solution(rsp))