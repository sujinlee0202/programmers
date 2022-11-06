const solution = (money) => {
  let answer = [];
  let icecoffee = 5500;

  answer.push(parseInt(money/icecoffee))
  answer.push(money%icecoffee)

  return answer;
}