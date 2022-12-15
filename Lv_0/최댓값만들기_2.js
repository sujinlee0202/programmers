const solution = (numbers) => {
  let arr = [];
  for(let i=0; i<numbers.length; i++) {
    for(let j=i+1; j<numbers.length; j++) {
      arr.push(numbers[i]*numbers[j])
    }
  }
  arr.sort((a, b) => b - a)
  
  return arr[0]
}

const numbers = [1, 2, -3, 4, -5]
console.log(solution(numbers)) // -3 * -5 = 15