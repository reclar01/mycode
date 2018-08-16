// YOUR CODE BELOW
let ticTacToe = {
    "board":[[null,null,null],[null,null,null],[null,null,null]],
    "move":function(XorO,rowNum, colNum){    
        if(!this.board[colNum][rowNum]){
            this.board[colNum][rowNum] = XorO;
        }
      
      
      return this.board ;
  },
  "clear":function(){
    for(let i = 0; i<this.board.length;i++){
        for(let j = 0; j<this.board[i].length;j++){
            this.board[i][j] = null;
        }
    }
    return this.board;
  }

  }

  console.log(ticTacToe.clear());
  //console.log(ticTacToe.move('y', 0, 0));