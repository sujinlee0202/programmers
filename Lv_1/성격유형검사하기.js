const survey = ['AN', 'CF', 'MJ', 'RT', 'NA', 'AN']
const choice = [5, 3, 2, 7, 5, 7]

const solution = (survey, choice) => {
  let answer = '';
  let object = {};
  for(let i=0; i<survey.length; i++) {
    object[survey[i]] = choice[i]
  }
  console.log(object)

  let object2 = {};

  for(let i=0; i<survey.length; i++) {
    switch(survey[i]) {
      case 'RT' :
        console.log('RT', object[survey[i]])
        if(object[survey[i]] === 1) {
          object2.R = 3
        } else if(object[survey[i]] === 2) {
          object2.R = 2
        } else if(object[survey[i]] === 3) {
          object2.R = 1
        } else if(object[survey[i]] === 4) {
          object2.X = 0
        } else if(object[survey[i]] === 5) {
          object2.T = 1
        } else if(object[survey[i]] === 6) {
          object2.T = 2
        } else if(object[survey[i]] === 7) {
          object2.T = 3
        }
        console.log(object2)
        break;
      case 'TR' :
        console.log('TR', object[survey[i]])
        if(object[survey[i]] === 1) {
          object2.T = 3
        } else if(object[survey[i]] === 2) {
          object2.T = 2
        } else if(object[survey[i]] === 3) {
          object2.T = 1
        } else if(object[survey[i]] === 4) {
          object2.X = 0
        } else if(object[survey[i]] === 5) {
          object2.R = 1
        } else if(object[survey[i]] === 6) {
          object2.R = 2
        } else if(object[survey[i]] === 7) {
          object2.R = 3
        }
        console.log(object2)
        break;
      case 'CF' :
        console.log('CF', object[survey[i]])
        if(object[survey[i]] === 1) {
          object2.C = 3
        } else if(object[survey[i]] === 2) {
          object2.C = 2
        } else if(object[survey[i]] === 3) {
          object2.C = 1
        } else if(object[survey[i]] === 4) {
          object2.X = 0
        } else if(object[survey[i]] === 5) {
          object2.F = 1
        } else if(object[survey[i]] === 6) {
          object2.F = 2
        } else if(object[survey[i]] === 7) {
          object2.F = 3
        }
        console.log(object2)
        break;
      case 'FC' :
        console.log('FC', object[survey[i]])
        if(object[survey[i]] === 1) {
          object2.F = 3
        } else if(object[survey[i]] === 2) {
          object2.F = 2
        } else if(object[survey[i]] === 3) {
          object2.F = 1
        } else if(object[survey[i]] === 4) {
          object2.X = 0
        } else if(object[survey[i]] === 5) {
          object2.C = 1
        } else if(object[survey[i]] === 6) {
          object2.C = 2
        } else if(object[survey[i]] === 7) {
          object2.C = 3
        }
        console.log(object2)
        break;
      case 'JM' :
        console.log('JM', object[survey[i]])
        if(object[survey[i]] === 1) {
          object2.J = 3
        } else if(object[survey[i]] === 2) {
          object2.J = 2
        } else if(object[survey[i]] === 3) {
          object2.J = 1
        } else if(object[survey[i]] === 4) {
          object2.X = 0
        } else if(object[survey[i]] === 5) {
          object2.M = 1
        } else if(object[survey[i]] === 6) {
          object2.M = 2
        } else if(object[survey[i]] === 7) {
          object2.M = 3
        }
        console.log(object2)
        break;
      case 'MJ' :
        console.log('MJ', object[survey[i]])
        if(object[survey[i]] === 1) {
          object2.M = 3
        } else if(object[survey[i]] === 2) {
          object2.M = 2
        } else if(object[survey[i]] === 3) {
          object2.M = 1
        } else if(object[survey[i]] === 4) {
          object2.X = 0
        } else if(object[survey[i]] === 5) {
          object2.J = 1
        } else if(object[survey[i]] === 6) {
          object2.J = 2
        } else if(object[survey[i]] === 7) {
          object2.J = 3
        }
        console.log(object2)
        break;
      case 'AN' :
        console.log('AN', object[survey[i]])
        if(object[survey[i]] === 1) {
          object2.A = 3
        } else if(object[survey[i]] === 2) {
          object2.A = 2
        } else if(object[survey[i]] === 3) {
          object2.A = 1
        } else if(object[survey[i]] === 4) {
          object2.X = 0
        } else if(object[survey[i]] === 5) {
          object2.N = 1
        } else if(object[survey[i]] === 6) {
          object2.N = 2
        } else if(object[survey[i]] === 7) {
          object2.N = 3
        }
        console.log(object2)
        break;
      case 'NA' :
        console.log('NA', object[survey[i]])
        if(object[survey[i]] === 1) {
          object2.N = 3
        } else if(object[survey[i]] === 2) {
          object2.N = 2
        } else if(object[survey[i]] === 3) {
          object2.N = 1
        } else if(object[survey[i]] === 4) {
          object2.X = 0
        } else if(object[survey[i]] === 5) {
          object2.A = 1
        } else if(object[survey[i]] === 6) {
          object2.A = 2
        } else if(object[survey[i]] === 7) {
          object2.A = 3
        }
        console.log(object2)
        break;
    }
  }

  console.log('=>', object2)
  // console.log(Object.keys(object2))
  
  console.log(Object.keys(object2).length)
  console.log(Object.keys(object2))
  console.log(Object.values(object2))

  const ary = []

  for(let key in object2) {
    ary.push([key, object2[key]])
  }

  console.log(ary)



}

console.log(solution(survey, choice))
/*
choices
1 : 매우 비동의 (3)
2 : 비동의 (2)
3 : 약간 비동의 (1)
4 : 모름 (0)
5 : 약간 동의 (1)
6 : 동의 (2)
7 : 매우 동의 (3)
*/