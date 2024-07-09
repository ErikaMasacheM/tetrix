const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const BLOCK_SIZE = 20;
const BOARD_WIDTH = 14;
const BOARD_HEIGHT = 30;

let score = 0;

canvas.width = BLOCK_SIZE * BOARD_WIDTH;
canvas.height = BLOCK_SIZE * BOARD_HEIGHT;

context.scale(BLOCK_SIZE, BLOCK_SIZE);

// 1.
function update(time = 0) {
    draw();
}

function draw() {
    context.fillStyle = '#000'; // Por ejemplo, el color negro
    context.fillRect(0, 0, canvas.width, canvas.height); // Dibuja un rectángulo negro en todo el canvas
}

update(); // Iniciar la animación

// 2. dibujar el board
const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
]

// 3. css
body {
  margin: 0;
  padding: 0;
  display: grid;
  place-content: center;
  height: 100hv;
}

// 4. dibujar los cuadritos
function draw() {
    context.fillStyle = '#000'; // Por ejemplo, el color negro
    context.fillRect(0, 0, canvas.width, canvas.height); // Dibuja un rectángulo negro en todo el canvas
  
    // recorrer la matriz
    board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value == 1) {
          context.fillStyle = 'yellow';
          context.fillRect(x, y, 1, 1);
        }
      })
    })
}

// 5. pieza
const piece = {
  position: { x: 5, y: 5 },
  shape: [
    [0, 1, 0],
    [1, 1, 1]
  ]
}

// 6. dibujar la pieza
function draw() {
  // context.fillStyle = '#000'; // Por ejemplo, el color negro
  // context.fillRect(0, 0, canvas.width, canvas.height); // Dibuja un rectángulo negro en todo el canvas

  // board.forEach((row, y) => {
  //   row.forEach((value, x) => {
  //     if (value == 1) {
  //       context.fillStyle = 'yellow';
  //       context.fillRect(x, y, 1, 1);
  //     }
  //   })
  // })

  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        context.fillStyle = 'red'
        context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1)
      }
    })
  })

}

// 7. mover ficha

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') piece.position.y--
  if (event.key === 'ArrowRight') piece.position.x++
  if (event.key === 'ArrowDown') piece.position.y++
})

function update(time = 0) {
  draw();
  window.requestAnimationFrame(update);
}

// check colition
function checkcollision() {
  return piece.shape.find((row, y) => {
    return row.find((value, x) => {
      return (
        board[y + piece.position.y]?.[x + piece.position.x] != 0
      )
    })
  })
}


//

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') {
    piece.position.x--
    if (checkcollision()) {
      piece.position.x++
    }
  }
  if (event.key === 'ArrowRight') {
    piece.position.x++
    if (checkcollision()) {
      piece.position.x--
    }
  }
  if (event.key === 'ArrowDown') {
    piece.position.y++
    if (checkcollision()) {
      piece.position.y--
    }
  }
})


//solidificar
function solidifyPiece() {
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        board[y + piece.position.y][x + piece.position.x] = 1
      }
    })
  })
}


document.addEventListener('keydown', event => {
  // if (event.key === 'ArrowLeft') {
  //   piece.position.x--
  //   if (checkcollision()) {
  //     piece.position.x++
  //   }
  // }
  // if (event.key === 'ArrowRight') {
  //   piece.position.x++
  //   if (checkcollision()) {
  //     piece.position.x--
  //   }
  // }
  // if (event.key === 'ArrowDown') {
  //   piece.position.y++
  //   if (checkcollision()) {
  //     piece.position.y--
      solidifyPiece();
    // }
  }
})

// resetear la poiscion porque se traba y resetear la posicion de la pieza
piece.position.x = 0;
piece.position.y = 0;

// eliminar

function removeRows() {
  const rowsToRemove = [];

  // Encontrar las filas completas
  board.forEach((row, y) => {
    if (row.every(value => value === 1)) {
      rowsToRemove.push(y);
    }
  });

  rowsToRemove.forEach(y => {
    board.splice(y, 1);
    const newRow = Array(BOARD_WIDTH).fill(0);
    board.unshift(newRow);
  });

}

// agregar el remover
document.addEventListener('keydown', event => {
  // if (event.key === 'ArrowLeft') {
  //   piece.position.x--
  //   if (checkcollision()) {
  //     piece.position.x++
  //   }
  // }
  // if (event.key === 'ArrowRight') {
  //   piece.position.x++
  //   if (checkcollision()) {
  //     piece.position.x--
  //   }
  // }
  // if (event.key === 'ArrowDown') {
  //   piece.position.y++
  //   if (checkcollision()) {
  //     piece.position.y--
  //     solidifyPiece();
      removeRows();
    // }
  // }
}

// drop

let dropCounter = 0;
let lastTime = 0;
function update(time = 0) {
  // console.log(time);
  const deltaTime = time - lastTime;
  lastTime = time
  dropCounter += deltaTime

  if (dropCounter > 800) {
    piece.position.y++
    dropCounter = 0

    if (checkcollision()) {
      piece.position.y--;
      solidifyPiece()
      removeRows()
    }
  }

  draw();
  window.requestAnimationFrame(update);
}

// piezas

const PIECES = [
  [
    [1, 1],
    [1, 1]
  ],
  [
    [1, 1, 1, 1]
  ],
  [
    [0, 1, 0],
    [1, 1, 1]
  ],
  [
    [1, 1, 0],
    [0, 1, 1]
  ],
  [
    [1, 0],
    [1, 0],
    [1, 1]
  ]
]

//

function solidifyPiece() {
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value == 1) {
        board[y + piece.position.y][x + piece.position.x] = 1
      }
    })
  })

  
  piece.position.x = Math.floor(BOARD_WIDTH / 2 - 2);
  piece.position.y = 0;
  
  piece.shape = PIECES[Math.floor(Math.random() * PIECES.length)]

  //   if (checkcollision()) {
  //     window.alert('GAME OVER')
  //     board.forEach((row) => row.fill(0))
  //   }

}


/// game over

function solidifyPiece() {
  // piece.shape.forEach((row, y) => {
  //   row.forEach((value, x) => {
  //     if (value == 1) {
  //       board[y + piece.position.y][x + piece.position.x] = 1
  //     }
  //   })
  // })

  
  // piece.position.x = Math.floor(BOARD_WIDTH / 2 - 2);
  // piece.position.y = 0;
  
  // piece.shape = PIECES[Math.floor(Math.random() * PIECES.length)]

    if (checkcollision()) {
      window.alert('GAME OVER')
      board.forEach((row) => row.fill(0))
    }

}

// rotacion
document.addEventListener('keydown', event => {
  // if (event.key === 'ArrowLeft') {
  //   piece.position.x--
  //   if (checkcollision()) {
  //     piece.position.x++
  //   }
  // }
  // if (event.key === 'ArrowRight') {
  //   piece.position.x++
  //   if (checkcollision()) {
  //     piece.position.x--
  //   }
  // }
  // if (event.key === 'ArrowDown') {
  //   piece.position.y++
  //   if (checkcollision()) {
  //     piece.position.y--
  //     solidifyPiece();
  //     removeRows();
  //   }
  // }

    if (event.key === 'ArrowUp') {
      const rotated = []
      for (let i = 0; i < piece.shape[0].length; i++) {
        const row = [];
        for (let j = piece.shape.length - 1; j >= 0; j--) {
          row.push(piece.shape[j][i]);
        }
        rotated.push(row)
      }
      const previusShape = piece.shape
      piece.shape = rotated;
      if (checkcollision()) {
        piece.shape = previusShape
      }
    }


})
