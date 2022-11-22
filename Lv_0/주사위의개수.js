const solution = (box, n) => {
  let CubeVolume = n * n * n;
  let RecVolume = 1;

  const newBox = box.map((item) => {
    if(item%n === 0) {
      item = item
    } else {
      item = Math.floor(item/n) * n
    }
    return item
  })

  RecVolume = newBox[0] * newBox[1] * newBox[2]

  return Math.floor(RecVolume / CubeVolume)
}

const box = [10, 8, 6]; // 직육면체 가로, 세로, 높이
let n = 3; // 정육면체 한 변

console.log(solution(box, n))

/*
다른 풀이
Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
*/