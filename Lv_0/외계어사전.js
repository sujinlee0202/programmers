const solution = (spell, dic) => {
  let count = 0;
  const countArr = [];
  for(let i=0; i<dic.length; i++) {
    for(let j=0; j<spell.length; j++) {
      if(dic[i].split(spell[j]).length === 2) {
        count++
      }
    }
    countArr.push(count)
    count = 0;
  }
  if(countArr.includes(spell.length)) {
    return 1;
  } else {
    return 2;
  }
}