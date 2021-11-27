const games = [
  {
    game: 'Jerry Rice',
    answer: 'JERRYRICE',
    category: 'Famous Athletes',
    hint: '49ers',
    answerHTML1: ['J', 'E', 'R', 'R', 'Y', '', 'R', 'I', 'C', 'E'],
    answerHTML2: [],
  },
  {
    game: 'Golden State Warriors',
    answer: 'GOLDENSTATEWARRIORS',
    category: 'Sports Teams',
    hint: 'Basketball',
    answerHTML1: ['G', 'O', 'L', 'D', 'E', 'N', '', 'S', 'T', 'A', 'T', 'E'],
    answerHTML2: ['W', 'A', 'R', 'R', 'I', 'O', 'R', 'S'],
  },
  {
    game: 'Buster Posey',
    answer: 'BUSTERPOSEY',
    category: 'Famous Athletes',
    hint: 'SF Giants',
    answerHTML1: ['B', 'U', 'S', 'T', 'E', 'R', '', 'P', 'O', 'S', 'E', 'Y'],
    answerHTML2: [],
  },
  {
    game: 'Steph Curry',
    answer: 'STEPHCURRY',
    category: 'Famous Athletes',
    hint: 'Warriors',
    answerHTML1: ['S', 'T', 'E', 'P', 'H', '', 'C', 'U', 'R', 'R', 'Y'],
    answerHTML2: [],
  },
  {
    game: 'San Francisco Giants',
    answer: 'SANFRANCISCOGIANTS',
    category: 'Sports Teams',
    hint: 'Baseball',
    answerHTML1: [
      'S',
      'A',
      'N',
      '',
      'F',
      'R',
      'A',
      'N',
      'C',
      'I',
      'S',
      'C',
      'O',
    ],
    answerHTML2: ['G', 'I', 'A', 'N', 'T', 'S'],
  },
  {
    game: 'Dogecoin',
    answer: 'DOGECOIN',
    category: 'Cryptos',
    hint: 'Elon',
    answerHTML1: ['D', 'O', 'G', 'E', 'C', 'O', 'I', 'N'],
    answerHTML2: [],
  },
  {
    game: 'Safemoon To The Moon',
    answer: 'SAFEMOONTOTHEMOON',
    category: 'Cryptos',
    hint: 'Papa',
    answerHTML1: ['S', 'A', 'F', 'E', 'M', 'O', 'O', 'N', '', 'T', 'O'],
    answerHTML2: ['T', 'H', 'E', '', 'M', 'O', 'O', 'N'],
  },
  {
    game: 'Ethereum',
    answer: 'ETHEREUM',
    category: 'Cryptos',
    hint: 'Vitalik',
    answerHTML1: ['E', 'T', 'H', 'E', 'R', 'E', 'U', 'M'],
    answerHTML2: [],
  },
  {
    game: 'San Francisco Forty Niners',
    answer: 'SANFRANCISCOFORTYNINERS',
    category: 'Sports Teams',
    hint: 'Football',
    answerHTML1: [
      'S',
      'A',
      'N',
      '',
      'F',
      'R',
      'A',
      'N',
      'C',
      'I',
      'S',
      'C',
      'O',
    ],
    answerHTML2: ['F', 'O', 'R', 'T', 'Y', '', 'N', 'I', 'N', 'E', 'R', 'S'],
  },
];

window.addEventListener('DOMContentLoaded', showCategoryBtns);

function showCategoryBtns() {
  const section = document.querySelector('.game');
  const btnBack = document.querySelector('.btn-back');
  btnBack.style.visibility = 'hidden';
  section.innerHTML = ``;
  const div = document.createElement('div');
  const categories = games.reduce(
    (total, item) => {
      !total.includes(item.category)
        ? total.push(item.category)
        : (total = total);

      return total;
    },
    ['ALL']
  );

  const btns = categories
    .map(
      (item) => `<div class="select-btn-container">
        <button type="button" class="btn btn-select btn-sports">${item}</button>
    </div>`
    )
    .join('');

  div.innerHTML = `<div class="header-wrapper">
    <h1>Select a Category</h1>
</div>
<div class="container">
    <div class="btn-wrapper">
        ${btns}
    </div>
</div>`;

  section.append(div);

  const selectBtns = div.querySelectorAll('.btn-select');

  selectBtns.forEach((btn) => btn.addEventListener('click', getCategory));
}

function getCategory(e) {
  const cat = e.currentTarget.textContent;
  let item;

  if (cat === 'ALL') {
    item = games[Math.floor(Math.random() * games.length)];
  } else {
    const items = games.filter((item) => {
      if (item.category === cat) {
        return item;
      }
    });
    item = items[Math.floor(Math.random() * items.length)];
  }
  playGame(item, cat);
}

function playGame(item, cat) {
  const section = document.querySelector('.game');
  const btnBack = document.querySelector('.btn-back');
  const div = document.createElement('div');

  section.innerHTML = ``;
  btnBack.style.visibility = 'visible';
  div.classList.add('position-all');
  div.innerHTML = ` <div class="center-category">
        <h1 class="category">${item.category}</h1>
    </div>
    <div class="flex">
        <div class="hangman">
            <div class="outline">
                <div class="hanger"></div>
                <div class="bar"></div>
                <div class="pole"></div>
                <div class="bottom"></div>
                <div class="man">
                    <div class="body-part head"></div>
                    <div class="body-part body"></div>
                    <div class="body-part left-arm"></div>
                    <div class="body-part right-arm"></div>                            
                    <div class="body-part left-leg"></div>
                    <div class="body-part right-leg"></div>
                </div>
            </div>
            <div class="hint-container">
                <div><button class="btn hint-btn">Hint</button></div><div class="orange"> : </div><span class="hint">
                    ${item.hint}</span>
            </div>
            <div class="result-container">
                
            </div>
        </div>
        <div class="letters">
            <div class="answer-box-container">
                <div class="answer-container">
                    <div class="row-1">
                        
                    </div>
                    <div class="row-2">
                        
                    </div>
                </div>
            </div>
            <div class="btns-container">
                <div class=btn-outer><button type="button" class="btn btn-letter">A</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">B</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">C</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">D</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">E</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">F</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">G</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">H</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter btn-i">I</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">J</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">K</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">L</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">M</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">N</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">O</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">P</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">Q</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">R</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">S</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">T</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">U</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">V</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">W</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">X</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">Y</button></div>
                <div class=btn-outer><button type="button" class="btn btn-letter">Z</button></div>
            </div>
            <div class="new-game-container">
                <button class="btn btn-new-game" id="${item.game}" data-id="${cat}">NEW GAME</button>
            </div>
        </div>
    </div>
</section>
<footer>
    <div class="footer-border">
    </div>
</footer>`;

  section.append(div);

  showLetters(item);

  btnBack.addEventListener('click', backHome);

  const btnNew = document.querySelector('.btn-new-game');

  btnNew.addEventListener('click', getItem);

  const btns = document.querySelectorAll('.btn-letter');

  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      checkLetter(e, item);
    });
  });

  const btnHint = document.querySelector('.hint-btn');
  const hint = document.querySelector('.hint');
  const orange = document.querySelector('.orange');

  btnHint.addEventListener('click', () => {
    hint.classList.toggle('show-hint');
    orange.classList.toggle('show-orange');
  });
}

function checkLetter(e, item) {
  e.currentTarget.disabled = true;
  e.currentTarget.classList.add('btn-disabled');
  const letters = Array.from(document.querySelectorAll('.letter'));
  const letter = e.currentTarget.textContent;
  const answers = Array.from(item.answer);
  const name = item.game;

  const check = Array.from(
    letters.filter((item) => letter === item.textContent)
  );

  if (check.length === 0) {
    showPart();
    checkLoss(name);
  } else {
    letters.forEach((item) => {
      if (item.textContent === letter) {
        item.classList.add('show-letter');
      }
    });
    checkWin(name, answers);
  }
}

function checkLoss(name) {
  const container = document.querySelector('.result-container');
  const newContainer = document.querySelector('.new-game-container');
  const letters = document.querySelectorAll('.btn-letter');
  const rLeg = document.querySelector('.right-leg');

  if (rLeg.classList.contains('show-part')) {
    container.innerHTML = `<p class="result-p"><span class="result result-win">FAILED</span><br><span class="result-small">Answer was ${name}</span>
        </p>`;

    newContainer.classList.add('show-container');

    letters.forEach((letter) => (letter.disabled = true));
  }
}

function checkWin(name, answers) {
  const container = document.querySelector('.result-container');
  const newContainer = document.querySelector('.new-game-container');
  const btns = document.querySelectorAll('.btn-letter');
  let letters = Array.from(document.querySelectorAll('.letter'));

  letters = letters.filter((letter) =>
    letter.classList.contains('show-letter')
  );

  if (letters.length === answers.length) {
    container.innerHTML = `<p class="result-p"><span class="result result-win">WELL DONE</span><br><span class="result-small">Answer was ${name}</span>
        </p>`;

    newContainer.classList.add('show-container');

    btns.forEach((btn) => (btn.disabled = true));
  }
}

function showLetters(item) {
  const row1 = document.querySelector('.row-1');
  const row2 = document.querySelector('.row-2');

  let items1 = item.answerHTML1;
  let items2 = item.answerHTML2;

  items1 = items1
    .map((item) => {
      if (item === '') {
        return `<div class="letter-container">
            <div class="letter-wrapper">
                <div class="initial"></div>
                <p class="letter"></p>
            </div>
        </div>`;
      }
      return `<div class="letter-container">
        <div class="letter-wrapper">
            <div class="initial"></div>
            <p class="letter">${item}</p>
            <div class="underline"></div>
        </div>
    </div>`;
    })
    .join('');

  items2 = items2
    .map((item) => {
      if (item === '') {
        return `<div class="letter-container">
            <div class="letter-wrapper">
                <div class="initial"></div>
                <p class="letter"></p>
            </div>
        </div>`;
      }
      return `<div class="letter-container">
        <div class="letter-wrapper">
            <div class="initial"></div>
            <p class="letter">${item}</p>
            <div class="underline"></div>
        </div>
    </div>`;
    })
    .join('');

  row1.innerHTML = items1;
  row2.innerHTML = items2;

  if (row2.children.length !== 0) {
    row1.style.justifyContent = 'flex-start';
    row2.style.justifyContent = 'flex-start';
  }
}

function showPart() {
  const parts = Array.from(document.querySelectorAll('.body-part'));

  const filtered = parts.filter((part) => part.classList.contains('show-part'));

  const part = filtered.length;

  parts[part].classList.add('show-part');
}

function backHome() {
  const btnBack = document.querySelector('.btn-back');

  btnBack.style.visibility = 'hidden';

  showCategoryBtns();

  const selectBtns = document.querySelectorAll('.btn-select');

  selectBtns.forEach((btn) => btn.addEventListener('click', getCategory));
}

function getItem(e) {
  const cat = e.currentTarget.dataset.id;
  const game = e.currentTarget.getAttribute('id');
  let item;
  let filtered;

  if (cat === 'ALL') {
    filtered = games.filter((item) => item.game !== game);

    item = filtered[Math.floor(Math.random() * filtered.length)];
  } else {
    filtered = games.filter(
      (item) => item.category === cat && item.game !== game
    );

    if (filtered.length === 0) {
      item = games.filter((item) => item.category === cat)[0];
    } else {
      item = filtered[Math.floor(Math.random() * filtered.length)];
    }
  }

  playGame(item, cat);
}
