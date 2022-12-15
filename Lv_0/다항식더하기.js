const solution = (polynomial) => {
  const arr = polynomial.split('+')
  const nArr = [];

  const xArr = arr.filter(item => {
    if(item.includes('x')) return item
    else nArr.push(item)
  })

  for(let i=0; i<xArr.length; i++) {
    if(xArr[i].replace(/\s/g,'') === 'x') {
      xArr[i] = '1x'
    }
  }

  let xNum = 0;
  const splitArr = xArr.join('').split('x')
  for(let i=0; i<splitArr.length; i++) {
    xNum += Number(splitArr[i])
  }

  if(xNum === 1) {
    xNum = ''
  }

  let nNum = 0;
  for(let i=0; i<nArr.length; i++) {
    nNum += Number(nArr[i])
  }

  if(xNum === 0) {
    return nNum.toString()
  } else if(nNum === 0) {
    return xNum + 'x'
  } else {
    return xNum + 'x' + ' + ' + nNum
  }
}

let polynomial = 'x + 0'
console.log(solution(polynomial))