const solution = (keyinput, board) => {
  let location = [0, 0]

  for(let i=0; i<keyinput.length; i++) {
    switch(keyinput[i]) {
      case 'left' :
        if(Math.floor(board[0]/2) > Math.abs(location[0]) || location[0] === (Math.floor(board[0]/2))) {
          location[0]--
        }
        break;
      case 'right' :
        if(Math.floor(board[0]/2) > Math.abs(location[0]) || location[0] === -1*(Math.floor(board[0]/2))) {
          location[0]++
        }
        break;
      case 'up' :
        if(Math.floor(board[1]/2) > Math.abs(location[1]) || location[1] === -1*(Math.floor(board[1]/2))) {
          location[1]++
        }
        break;
      case 'down' :
        if(Math.floor(board[1]/2) > Math.abs(location[1]) || location[1] === (Math.floor(board[1]/2))) {
          location[1]--
        }
        break;
    }
  }
  return location
}