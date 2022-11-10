const solution = (n, k) => {
  let answer = 0;
  const  lambPrice = 12000, drinkPrice = 2000;
  let totalLambPrice = 0, totalDrinkPrice = 0, service = 0;

  totalLambPrice = lambPrice*n;
  service = Math.floor(n/10)
  totalDrinkPrice = (k - service)*drinkPrice;
  answer = totalDrinkPrice + totalLambPrice

  // answer = n*12000 + (k-Math.floor(n/10))*2000

  return answer;
}