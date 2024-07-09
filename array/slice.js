let board = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 1, 1, 1]
  ];
  
  function removeRow(matrix, rowIndex) {
    return matrix.splice(0, rowIndex);
  }
  
  // Eliminar la última fila
  let newBoard = removeRow(board, 3);
  
  console.log(newBoard);


 

