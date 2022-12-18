const solution = (board) => {
  let answer = 0;

  for(let x=0; x<board.length; x++) {
    for(let y=0; y<board.length; y++) {
      if(board[x][y] === 1) {

        if(x !== 0 && y !== 0 && board[x-1][y-1] !== 1) {
          board[x-1][y-1] = 2
        }

        if(x !== 0 && board[x-1][y] !== 1) {
          board[x-1][y] = 2
        }

        if(x !== 0 && y !== board.length-1 && board[x-1][y+1] !== 1) {
          board[x-1][y+1] = 2
        }

        if(y !== 0 && board[x][y-1] !== 1) {
          board[x][y-1] = 2
        }

        if(y !== board.length-1 && board[x][y+1] !== 1) {
          board[x][y+1] = 2
        }

        if(x !== board.length-1 && y !== 0 && board[x+1][y-1] !== 1) {
          board[x+1][y-1] = 2
        }

        if(x !== board.length-1 && board[x+1][y] !== 1) {
          board[x+1][y] = 2
        }

        if(x !== board.length-1 && y !== board.length-1 && board[x+1][y+1] !== 1) {
          board[x+1][y+1] = 2
        }

      }
    }
  }

  for(let i=0; i<board.flat().length; i++) {
    if(board.flat()[i] === 0) {
      answer++
    }
  }
  
  return answer
}

const board = 
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]
console.log(solution(board))