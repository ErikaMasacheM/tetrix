
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const BLOCK_SIZE = 20;
const BOARD_WIDTH = 14;
const BOARD_HEIGHT = 30;

let score = 0;

canvas.width = BLOCK_SIZE * BOARD_WIDTH;
canvas.height = BLOCK_SIZE * BOARD_HEIGHT;

context.scale(BLOCK_SIZE, BLOCK_SIZE);

const board = createBoard(BOARD_WIDTH, BOARD_HEIGHT);

function createBoard (width, height) {
return Array(height).fill().map(() => Array(width).fill(0))
}

// 4. la pieza

const piece = {
  position: { x: 5, y: 5 },
  shape: [
    [1, 0],
    [1, 0],
    [1, 1]
  
  ]
}

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
    [0, 1, 1],
    [1, 1, 0]
  ],
  [
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  [
    [0, 1],
    [0, 1],
    [1, 1]
  ]
]

// // 2. loop

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

function draw() {
  context.fillStyle = '#000'; // Por ejemplo, el color negro
  context.fillRect(0, 0, canvas.width, canvas.height); // Dibuja un rectángulo negro en todo el canvas

  board.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value == 1) {
        context.fillStyle = 'yellow';
        context.fillRect(x, y, 1, 1);
      }
    })
  })

  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        context.fillStyle = 'red'
        context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1)
      }
    })
  })
  document.querySelector('span').innerText = score;
}

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
      solidifyPiece();
      removeRows();
    }
  }

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

function checkcollision() {
  return piece.shape.find((row, y) => {
    return row.find((value, x) => {
      return (
        board[y + piece.position.y]?.[x + piece.position.x] != 0
      )
    })
  })
}

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
  
  let position = Math.floor(Math.random() * PIECES.length);
  piece.shape = PIECES[position]

    if (checkcollision()) {
      window.alert('GAME OVER')
      board.forEach((row) => row.fill(0))
    }

}

function removeRows() {
  const rowsToRemove = [];

  // Encontrar las filas completas
  board.forEach((row, y) => {
    if (row.every(value => value === 1)) {
      rowsToRemove.push(y);
      score += 10;
    }
  });

  rowsToRemove.forEach(y => {
    board.splice(y, 1);
    const newRow = Array(BOARD_WIDTH).fill(0);
    board.unshift(newRow);
  });

}
const section = document.querySelector('section')
section.addEventListener('click', () => {
  update(); // Iniciar la animación
  section.remove();
  const audio = new window.Audio('Tetris.mp3');
  audio.volume = 0.5
  audio.play()
})


