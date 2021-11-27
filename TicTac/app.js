let player1 = true;
let singlePlayer = true;

let p1Wins = 0;
let p2Wins = 0;

let tries = 0;
let winner = false;

const topLeft = document.querySelector('.top-left');
const topMiddle = document.querySelector('.top-middle');
const topRight = document.querySelector('.top-right');
const middleLeft = document.querySelector('.middle-left');
const middle = document.querySelector('.middle');
const middleRight = document.querySelector('.middle-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomMiddle = document.querySelector('.bottom-middle');
const bottomRight = document.querySelector('.bottom-right');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

p1.style.background = 'rgb(46, 45, 45)';
p1.style.color = 'white';

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('click', (e) => {
    const item = e.currentTarget;

    if (!singlePlayer) {
      if (player1) {
        if (item.textContent === 'O' || item.textContent === 'X') {
          item.textContent = item.textContent;
        } else {
          tries++;
          item.textContent = 'X';
          player1 = false;
          checkWin();
          if (!winner) {
            setTimeout(() => {
              p1.style.background = 'none';
              p1.style.color = 'black';
              p2.style.background = 'rgb(46, 45, 45)';
              p2.style.color = 'white';
            }, 500);
          }
        }
      }

      if (!player1) {
        if (item.textContent === 'X' || item.textContent === 'O') {
          item.textContent = item.textContent;
        } else {
          item.textContent = 'O';
          player1 = true;
          tries++;

          checkWin();

          if (!winner) {
            setTimeout(() => {
              p2.style.background = 'none';
              p2.style.color = 'black';
              p1.style.background = 'rgb(46, 45, 45)';
              p1.style.color = 'white';
            }, 500);
          }
        }
      }
    } else {
      if (item.textContent === 'O' || item.textContent === 'X') {
        item.textContent = item.textContent;
      } else {
        item.textContent = 'X';
        tries++;
        player1 = false;
        checkWin();

        if (!winner) {
          setTimeout(() => {
            p1.style.background = 'none';
            p1.style.color = 'black';
            p2.style.background = 'rgb(46, 45, 45)';
            p2.style.color = 'white';
          }, 500);
        }

        squares.forEach((square) => {
          square.classList.add('disabled');
        });
      }
    }
  });
});

const btnClear = document.querySelector('.btn-clear');
console.log(btnClear.getBoundingClientRect().width);
btnClear.addEventListener('click', () => {
  p1Score.textContent = '0';
  p2Score.textContent = '0';

  p1Wins = 0;
  p2Wins = 0;
});

function checkWin() {
  squares.forEach((square) => {
    square.classList.add('disabled');
  });

  setTimeout(() => {
    squares.forEach((square) => {
      square.classList.remove('disabled');
    });
  }, 1050);

  if (!player1 && singlePlayer) {
    if (
      bottomLeft.textContent === 'X' &&
      middleLeft.textContent === 'X' &&
      topLeft.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topLeft.textContent === 'X' &&
      topMiddle.textContent === 'X' &&
      topRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      middleLeft.textContent === 'X' &&
      middle.textContent === 'X' &&
      middleRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      bottomLeft.textContent === 'X' &&
      bottomMiddle.textContent === 'X' &&
      bottomRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topRight.textContent === 'X' &&
      middleRight.textContent === 'X' &&
      bottomRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topMiddle.textContent === 'X' &&
      middle.textContent === 'X' &&
      bottomMiddle.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topRight.textContent === 'X' &&
      middle.textContent === 'X' &&
      bottomLeft.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topLeft.textContent === 'X' &&
      middle.textContent === 'X' &&
      bottomRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else {
      setTimeout(() => {
        let items = Array.from(document.querySelectorAll('.square'));
        items = items.filter((item) => {
          if (item.textContent === '') {
            return item;
          }
        });

        if (items.length > 0) {
          const item = items[Math.floor(Math.random() * items.length)];

          item.textContent = 'O';
          tries++;
          player1 = true;
          checkCpuWin();

          if (!winner) {
            setTimeout(() => {
              p2.style.background = 'none';
              p2.style.color = 'black';
              p1.style.background = 'rgb(46, 45, 45)';
              p1.style.color = 'white';
            }, 1000);
          }
        } else {
          checkTie();
        }
      }, 750);
    }
  }

  if (!player1 && !singlePlayer) {
    if (
      bottomLeft.textContent === 'X' &&
      middleLeft.textContent === 'X' &&
      topLeft.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topLeft.textContent === 'X' &&
      topMiddle.textContent === 'X' &&
      topRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      middleLeft.textContent === 'X' &&
      middle.textContent === 'X' &&
      middleRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      bottomLeft.textContent === 'X' &&
      bottomMiddle.textContent === 'X' &&
      bottomRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topRight.textContent === 'X' &&
      middleRight.textContent === 'X' &&
      bottomRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topMiddle.textContent === 'X' &&
      middle.textContent === 'X' &&
      bottomMiddle.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topRight.textContent === 'X' &&
      middle.textContent === 'X' &&
      bottomLeft.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topLeft.textContent === 'X' &&
      middle.textContent === 'X' &&
      bottomRight.textContent === 'X'
    ) {
      displayAlert('Player 1 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else {
      checkTie();
    }
  }

  if (player1 && !singlePlayer) {
    if (
      bottomLeft.textContent === 'O' &&
      middleLeft.textContent === 'O' &&
      topLeft.textContent === 'O'
    ) {
      displayAlert('Player 2 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topLeft.textContent === 'O' &&
      topMiddle.textContent === 'O' &&
      topRight.textContent === 'O'
    ) {
      displayAlert('Player 2 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      middleLeft.textContent === 'O' &&
      middle.textContent === 'O' &&
      middleRight.textContent === 'O'
    ) {
      displayAlert('Player 2 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      bottomLeft.textContent === 'O' &&
      bottomMiddle.textContent === 'O' &&
      bottomRight.textContent === 'O'
    ) {
      displayAlert('Player 2 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topRight.textContent === 'O' &&
      middleRight.textContent === 'O' &&
      bottomRight.textContent === 'O'
    ) {
      displayAlert('Player 2 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topMiddle.textContent === 'O' &&
      middle.textContent === 'O' &&
      bottomMiddle.textContent === 'O'
    ) {
      displayAlert('Player 2 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topRight.textContent === 'O' &&
      middle.textContent === 'O' &&
      bottomLeft.textContent === 'O'
    ) {
      displayAlert('Player 2 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else if (
      topLeft.textContent === 'O' &&
      middle.textContent === 'O' &&
      bottomRight.textContent === 'O'
    ) {
      displayAlert('Player 2 Wins');
      winner = true;
      setTimeout(newGame, 2050);
    } else {
      checkTie();
    }
  }
}

const checkCpuWin = () => {
  // squares.forEach((square) => {
  //     square.classList.add('disabled');
  // });
  if (
    bottomLeft.textContent === 'O' &&
    middleLeft.textContent === 'O' &&
    topLeft.textContent === 'O'
  ) {
    displayAlert('CPU Wins');
    winner = true;
    setTimeout(newCpuGame, 2050);
  } else if (
    topLeft.textContent === 'O' &&
    topMiddle.textContent === 'O' &&
    topRight.textContent === 'O'
  ) {
    displayAlert('CPU Wins');
    winner = true;
    setTimeout(newCpuGame, 2050);
  } else if (
    middleLeft.textContent === 'O' &&
    middle.textContent === 'O' &&
    middleRight.textContent === 'O'
  ) {
    displayAlert('CPU Wins');
    winner = true;
    setTimeout(newCpuGame, 2050);
  } else if (
    bottomLeft.textContent === 'O' &&
    bottomMiddle.textContent === 'O' &&
    bottomRight.textContent === 'O'
  ) {
    displayAlert('CPU Wins');
    winner = true;
    setTimeout(newCpuGame, 2050);
  } else if (
    topRight.textContent === 'O' &&
    middleRight.textContent === 'O' &&
    bottomRight.textContent === 'O'
  ) {
    displayAlert('CPU Wins');
    winner = true;
    setTimeout(newCpuGame, 2050);
  } else if (
    topMiddle.textContent === 'O' &&
    middle.textContent === 'O' &&
    bottomMiddle.textContent === 'O'
  ) {
    displayAlert('CPU Wins');
    winner = true;
    setTimeout(newCpuGame, 2050);
  } else if (
    topRight.textContent === 'O' &&
    middle.textContent === 'O' &&
    bottomLeft.textContent === 'O'
  ) {
    displayAlert('CPU Wins');
    winner = true;
    setTimeout(newCpuGame, 2050);
  } else if (
    topLeft.textContent === 'O' &&
    middle.textContent === 'O' &&
    bottomRight.textContent === 'O'
  ) {
    displayAlert('CPU Wins');
    winner = true;
    setTimeout(newCpuGame, 2050);
  }

  checkTie();
  // if (tries === 9 && !winner) {
  //     displayAlert('Tie Game');
  //     squares.forEach((square) => {
  //         square.textContent = '';
  //     });

  //     tries = 0;
  //     winner = false;
  // }
};

const alert = document.querySelector('.alert');
const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');

function newCpuGame() {
  squares.forEach((square) => {
    square.textContent = '';
    square.classList.add('disabled');
  });

  setTimeout(() => {
    squares.forEach((square) => {
      square.classList.remove('disabled');
    });
  }, 2000);

  winner = false;
  tries = 1;

  p2Wins++;
  p2Score.innerHTML = `${p2Wins}`;
  player1 = false;
  p2.style.background = 'rgb(46, 45, 45)';
  p2.style.color = 'white';
  p1.style.background = 'none';
  p1.style.color = 'black';

  const items = Array.from(document.querySelectorAll('.square'));

  const item = items[Math.floor(Math.random() * items.length)];

  setTimeout(() => {
    item.textContent = 'O';
  }, 1000);

  setTimeout(() => {
    p1.style.background = 'rgb(46, 45, 45)';
    p1.style.color = 'white';
    p2.style.background = 'none';
    p2.style.color = 'black';
  }, 2000);

  // setTimeout(() => {
  //     items.classList.remove('disabled')
  // },1050)
}

const displayAlert = (txt) => {
  alert.textContent = txt;
  alert.style.background = 'rgb(46, 45, 45)';

  setTimeout(() => {
    alert.textContent = '';
    alert.style.background = 'none';
  }, 1050);
};

function newGame() {
  squares.forEach((square) => {
    square.textContent = '';
    square.classList.remove('disabled');
  });

  winner = false;
  tries = 0;

  if (!player1) {
    p1Wins++;
    p1Score.innerHTML = `${p1Wins}`;
    player1 = true;
    p1.style.background = 'rgb(46, 45, 45)';
    p1.style.color = 'white';
    p2.style.background = 'none';
    p2.style.color = 'black';
  } else {
    p2Wins++;
    p2Score.innerHTML = `${p2Wins}`;
    player1 = false;
    p2.style.background = 'rgb(46, 45, 45)';
    p2.style.color = 'white';
    p1.style.background = 'none';
    p1.style.color = 'black';
  }
}

const playerBtn = document.querySelector('.player-btn');
const type = document.querySelector('.type');

playerBtn.addEventListener('click', (e) => {
  if (e.currentTarget.textContent === '2 Player') {
    squares.forEach((square) => {
      square.textContent = '';
      square.classList.remove('disabled');
    });

    singlePlayer = false;
    type.textContent = 'P2';
    playerBtn.textContent = 'CPU';
  } else {
    squares.forEach((square) => {
      square.textContent = '';
      square.classList.remove('disabled');
    });

    singlePlayer = true;
    type.textContent = 'CPU';
    playerBtn.textContent = '2 Player';
  }

  player1 = true;
  p1.style.background = 'rgb(46, 45, 45)';
  p1.style.color = 'white';
  p2.style.background = 'none';
  p2.style.color = 'black';
  // tries = 0;
  p1Wins = 0;
  p2Wins = 0;
  p2Score.textContent = '0';
  p1Score.textContent = '0';
});

const checkTie = () => {
  console.log(tries);
  if (tries === 9 && !winner && !singlePlayer) {
    displayAlert('Tie Game');
    setTimeout(() => {
      squares.forEach((square) => {
        square.textContent = '';
      });
    }, 2050);

    tries = 0;
  } else if (tries === 9 && !winner && singlePlayer && player1) {
    displayAlert('Tie Game');
    setTimeout(() => {
      squares.forEach((square) => {
        square.textContent = '';
      });
    }, 2050);

    tries = 0;
  } else if (tries === 9 && !winner && singlePlayer && !player1) {
    displayAlert('Tie Game');
    setTimeout(() => {
      squares.forEach((square) => {
        square.textContent = '';
        square.classList.add('disabled');
      });
    }, 2050);

    const items = Array.from(document.querySelectorAll('.square'));

    const item = items[Math.floor(Math.random() * items.length)];
    setTimeout(() => {
      item.textContent = 'O';
    }, 3000);

    setTimeout(() => {
      p2.style.background = 'none';
      p2.style.color = 'black';
      p1.style.background = 'rgb(46, 45, 45)';
      p1.style.color = 'white';
      squares.forEach((square) => {
        if (square.textContent !== 'O') {
          square.classList.remove('disabled');
        }
      });
    }, 3500);

    tries = 1;
  }
};
