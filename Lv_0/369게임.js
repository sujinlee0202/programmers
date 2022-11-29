const solution = (order) => order.toString().replace(/3|6|9/gi, ' ').split(' ').length-1

let order = 29423
console.log(solution(order))