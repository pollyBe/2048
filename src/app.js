const body = document.querySelector("body");
// creating html structure
const container = document.createElement("div");
container.className = "container";

// raiting
const raitingsBtn = document.createElement("button");
raitingsBtn.className = "raitings-btn";
raitingsBtn.type = "button";
raitingsBtn.textContent = "Raitings";
raitingsBtn.addEventListener("click", showRaitings);

const ratingsWrap = document.createElement("div");
ratingsWrap.className = "raitings-wrap";
const raitingsTitle = document.createElement("h3");
raitingsTitle.className = "raitings-title";
raitingsTitle.textContent = "Raitings";
const raitingsList = document.createElement("ul");
raitingsList.id = "raitings";
ratingsWrap.append(raitingsTitle, raitingsList);

// crating game field
const gameField = document.createElement("div");
gameField.className = "game-field";
gameField.id = "game-field";

const tileWrap = document.createElement("div");
tileWrap.className = "tile-wrap";
addSquares();

// creating side info section
const infoWrap = document.createElement("div");
infoWrap.className = "info-wrap";

//title
const titleWrap = document.createElement("div");
titleWrap.className = "title-wrap";
const title = document.createElement("h1");
title.textContent = "2048";
titleWrap.append(title);

//score
const scoreWrap = document.createElement("div");
scoreWrap.className = "score-wrap";
const scoreLabel = document.createElement("div");
scoreLabel.id = "score-label";
scoreLabel.textContent = "Score";
const scoreElement = document.createElement("div");
scoreElement.id = "score-element";
scoreElement.textContent = "0";
scoreWrap.append(scoreLabel, scoreElement);

//new game
const btnWrap = document.createElement("div");
btnWrap.className = "btn-wrap";
const newGameBtn = document.createElement("button");
newGameBtn.className = "new-game-btn";
newGameBtn.textContent = "New Game";
btnWrap.addEventListener("click", startNewGame);

btnWrap.append(newGameBtn);
infoWrap.append(titleWrap, scoreWrap, btnWrap, raitingsBtn);
gameField.append(tileWrap, infoWrap);

const modal = document.createElement("div");
modal.id = "modal";
const modalClose = document.createElement("button");
modalClose.type = "button";
modalClose.id = "close-modal";
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

const modalContext = document.createElement("div");
modalContext.id = "modal-context";
modal.append(modalClose, modalContext);

const bgAudioWrap = document.createElement("div");
bgAudioWrap.className = "audio-wrap";
const bgAudio = document.createElement("audio");
bgAudio.id = "bg-music";
bgAudio.loop = "true";

const bgSource = document.createElement("source");
bgSource.type = "audio/mpeg";
bgSource.src =
  "./src/assets/sounds/eco-sounds_assets_audio_Hope-Emotional-Soundtrack(chosic.com).mp3";
bgAudio.append(bgSource);
bgAudioWrap.append(bgAudio);

const controlButtons = document.createElement("div");
controlButtons.className = "controls";
const audioLabel = document.createElement("h3");
audioLabel.textContent = "Music";
const soundStopPlay = document.createElement("div");
soundStopPlay.className = "stop-play-wrap";

const soundCircle = document.createElement("button");
soundCircle.id = "change";
soundStopPlay.append(soundCircle);
soundStopPlay.classList.add("stop");

const volumeWrap = document.createElement("div");
volumeWrap.className = "volume-wrap";
const volumeRange = document.createElement("input");
volumeRange.setAttribute("min", "0");
volumeRange.setAttribute("max", "1");
volumeRange.setAttribute("step", "0.1");
volumeRange.value = "1";
volumeRange.type = "range";
volumeRange.id = "volume-range";
volumeWrap.append(volumeRange);

const volumeLabel = document.createElement("h3");
volumeLabel.textContent = "Volume";

controlButtons.append(audioLabel, soundStopPlay, volumeLabel, volumeWrap);

soundStopPlay.addEventListener("click", clickAction);

container.append(controlButtons, gameField);
body.prepend(container);
container.after(modal);
body.append(bgAudioWrap);

// adding squares in the game field
function addSquares() {
  for (let i = 1; i <= 16; i++) {
    const square = document.createElement("div");
    square.className = "square";
    tileWrap.append(square);
  }
}

//functionality
let board = [];
let score = 0;
let wonGame = false;
const now = new Date();
const currentTime = formatDateTime(now);
let raitings = [];

window.addEventListener("keydown", onDirectionKeyPress);

function createBoard() {
  board = [];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 4; j++) {
      row.push(0);
    }
    board.push(row);
  }
}

createBoard();
addRandomTile();
addRandomTile();

function startNewGame() {
  modal.style.display = "none";
  tileWrap.innerHTML = "";
  addSquares();
  scoreElement.innerHTML = 0;
  board = [];
  score = 0;
  wonGame = false;
  window.addEventListener("keydown", onDirectionKeyPress);
  createBoard();
  addRandomTile();
  addRandomTile();
}

function addRandomTile() {
  let emptyTiles = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        emptyTiles.push([i, j]);
      }
    }
  }

  let [randomI, randomJ] =
    emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  board[randomI][randomJ] = Math.random() < 0.8 ? 2 : 4;
  addTileToPage(randomI, randomJ, board[randomI][randomJ]);
}

function addTileToPage(row, column, value) {
  let tile = document.createElement("div");
  tile.classList.add(
    "tile",
    "row" + (row + 1),
    "column" + (column + 1),
    "value" + value
  );
  tile.innerHTML = value;
  tileWrap.append(tile);
  tile.classList.add("merged");
  tile.addEventListener("animationend", () => {
    tile.classList.remove("merged");
  });
}

function onDirectionKeyPress(e) {
  let movePossible;
  switch (e.key) {
    case "ArrowUp":
      playClick();
      movePossible = moveTiles(1, 0);
      break;
    case "ArrowDown":
      playClick();
      movePossible = moveTiles(-1, 0);
      break;
    case "ArrowLeft":
      playClick();
      movePossible = moveTiles(0, -1);
      break;
    case "ArrowRight":
      playClick();
      movePossible = moveTiles(0, 1);
      break;
  }
  if (movePossible) {
    addRandomTile();
    let gameOver = isGameOver();
    console.log("is gameover", gameOver.gameOver);
    if (gameOver.gameOver) {
      let raitItem = {
        score: score,
        currentTime: currentTime,
      };
      raitings.push(raitItem);
      setItemsInStorage(raitings);
      showModal(gameOver.message);
    }
  }
}

function playClick() {
  const clickSound = document.createElement("audio");
  const clickSource = document.createElement("source");
  clickSource.src =
    "./src/assets/sounds/157776__hiddenpersuader__click-sound-from-a-ps9-circuit-bent-machine.wav";
  clickSound.append(clickSource);
  body.append(clickSound);

  clickSound.play();
}

function formatDateTime(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function moveTiles(y, x) {
  let movePossible = false;
  let mergedRecently = false;

  if (x != 0) {
    let startX = x === 1 ? 3 : 0;
    let stepX = x === 1 ? -1 : 1;

    for (let i = 0; i < 4; i++) {
      let j = startX;
      while ((j <= 3 && stepX === 1) || (j >= 0 && stepX === -1)) {
        if (board[i][j] === 0) {
          j += stepX;
          continue;
        }
        let destination = getDestinationSquare(i, j, 0, x);
        let tileClass = ".row" + (i + 1) + ".column" + (j + 1);
        let tile = document.querySelector(tileClass);
        if (!destination.merge || (destination.merge && mergedRecently)) {
          mergedRecently = false;
          destination.destinationX += destination.merge ? stepX : 0;
          board[i][destination.destinationX] = board[i][j];
          if (destination.destinationX !== j) {
            movePossible = true;
            board[i][j] = 0;
          }
          moveTileOnPage(i, destination.destinationX, tile, false);
          j += stepX;
          continue;
        }
        mergedRecently = true;
        board[i][destination.destinationX] = board[i][j] * 2;
        console.log("after merge", board[i][destination.destinationX]);

        score += board[i][destination.destinationX];
        scoreElement.innerHTML = score;
        movePossible = true;
        board[i][j] = 0;
        moveTileOnPage(i, destination.destinationX, tile, destination.merge);
        j += stepX;
      }
    }
  } else if (y != 0) {
    let startY = y === 1 ? 3 : 0;
    let stepY = y === 1 ? -1 : 1;
    console.log("row", startY, "col", x);
    for (let j = 0; j < 4; j++) {
      let i = startY;
      console.log("row", i, "col", x);

      while ((i <= 3 && stepY === 1) || (i >= 0 && stepY === -1)) {
        if (board[i][j] === 0) {
          i += stepY;
          continue;
        }
        let destination = getDestinationSquare(i, j, y, 0);
        let tileClass = ".row" + (i + 1) + ".column" + (j + 1);
        let tile = document.querySelector(tileClass);

        if (!destination.merge || (destination.merge && mergedRecently)) {
          mergedRecently = false;
          destination.destinationY += destination.merge ? stepY : 0;
          board[destination.destinationY][j] = board[i][j];
          if (destination.destinationY !== i) {
            movePossible = true;
            board[i][j] = 0;
          }
          moveTileOnPage(destination.destinationY, j, tile, false);
          i += stepY;
          continue;
        }
        mergedRecently = true;
        board[destination.destinationY][j] = board[i][j] * 2;
        score += board[destination.destinationY][j];
        scoreElement.innerHTML = score;
        movePossible = true;
        board[i][j] = 0;
        moveTileOnPage(destination.destinationY, j, tile, destination.merge);
        i += stepY;
      }
    }
  }
  return movePossible;
}

function getDestinationSquare(i, j, y, x) {
  let destinationY = i;
  let destinationX = j;
  let merge = false;

  while (
    (destinationY < 3 && y === 1) ||
    (destinationY > 0 && y === -1) ||
    (destinationX < 3 && x === 1) ||
    (destinationX > 0 && x === -1)
  ) {
    console.log("y", y, "x", x);
    let nextY = destinationY + y;
    let nextX = destinationX + x;
    let nextCell = board[nextY][nextX];
    let currentCell = board[i][j];

    if (nextCell === 0 || nextCell === currentCell) {
      destinationY = nextY;
      destinationX = nextX;
      merge = nextCell === currentCell;
    }
    if (nextCell === 0 || nextCell === currentCell) {
      destinationY = nextY;
      destinationX = nextX;
      merge = nextCell === currentCell;
    }
    if (nextCell !== 0 && nextCell !== currentCell) break;

    if (merge) break;
  }

  return {
    merge: merge,
    destinationY: destinationY,
    destinationX: destinationX,
  };
}

// refreshing tiles on page
function moveTileOnPage(row, column, tile, merge) {
  let classes = Array.from(tile.classList);
  classes.forEach((className) => {
    if (className.startsWith("row") || className.startsWith("column")) {
      tile.classList.remove(className);
    }
  });
  tile.classList.add("row" + (row + 1), "column" + (column + 1));
  if (merge) {
    let elements = tileWrap.querySelectorAll(
      ".row" + (row + 1) + ".column" + (column + 1)
    );
    while (elements.length > 1) {
      tileWrap.removeChild(elements[0]);
      elements = tileWrap.querySelectorAll(
        ".row" + (row + 1) + ".column" + (column + 1)
      );
    }
    elements[0].className =
      "tile " +
      "row" +
      (row + 1) +
      " column" +
      (column + 1) +
      " " +
      "value" +
      board[row][column];
    elements[0].innerHTML = board[row][column];
    elements[0].classList.add("merged");
    elements[0].addEventListener("animationend", () => {
      elements[0].classList.remove("merged");
    });
  }
}

function continuePlaying() {
  modal.style.display = "none";
  window.addEventListener("keydown", onDirectionKeyPress);
}

function isGameOver() {
  let emptySquare = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) emptySquare = true;
      if (board[i][j] === 2048 && !wonGame)
        return {
          gameOver: true,
          message: "You won!",
          finalScore: score,
        };
      if (j != 3 && board[i][j] === board[i][j + 1]) emptySquare = true;
      if (i != 3 && board[i][j] === board[i + 1][j]) emptySquare = true;
    }
  }

  if (emptySquare) return { gameOver: false, message: "" };
  return {
    gameOver: true,
    message: "Game over!",
    finalScore: score,
  };
}

function showModal(message) {
  modalContext.innerHTML = "";

  if (message == "Game over!") {
    gameOverSound();
    modal.style.display = "flex";
    modalGameOverContext();
  }
  if (message == "You won!") {
    gameOverSound();
    wonGame = true;
    modalYouWonContext();
    window.removeEventListener("keydown", onDirectionKeyPress);
  }
}

function modalGameOverContext() {
  const gameOverWrap = document.createElement("div");
  gameOverWrap.className = "game-over-wrap";
  const gameOverTitle = document.createElement("h2");
  gameOverTitle.className = "game-over-title";
  gameOverTitle.textContent = "Game Over!";
  const totalScore = document.createElement("div");
  totalScore.id = "total-score";
  totalScore.textContent = score;
  const gameOverBtn = document.createElement("button");
  gameOverBtn.type = "button";
  gameOverBtn.id = "game-over";
  gameOverBtn.textContent = "Try Again";
  gameOverBtn.addEventListener("click", startNewGame);
  gameOverWrap.append(gameOverTitle, totalScore, gameOverBtn);
  modalContext.append(gameOverWrap);
}

function modalYouWonContext() {
  const youWonWrap = document.createElement("div");
  youWonWrap.className = "you-won-wrap";
  const youWonTitle = document.createElement("h2");
  youWonTitle.className = "you-won-title";
  youWonTitle.textContent = "You Won!!";
  const totalScore = document.createElement("div");
  totalScore.id = "total-score";
  totalScore.textContent = score;
  const youWonBtn = document.createElement("button");
  youWonBtn.type = "button";
  youWonBtn.id = "you-won";
  youWonBtn.textContent = "New Game";
  youWonBtn.addEventListener("click", startNewGame);
  const continueBtn = document.createElement("button");
  continueBtn.type = "button";
  continueBtn.id = "continue";
  continueBtn.textContent = "Do You Want To Continue Playing?";
  continueBtn.addEventListener("click", continuePlaying);
  youWonWrap.append(youWonTitle, totalScore, youWonBtn, continueBtn);
  modalContext.append(youWonWrap);
}

function setItemsInStorage(raitings) {
  localStorage.setItem("scoreItem", JSON.stringify(raitings));
}

function getItemFromStorage() {
  const items = localStorage.getItem("scoreItem");
  return items ? JSON.parse(items) : [];
}

function showRaitings() {
  const raitings = getItemFromStorage();
  modalContext.innerHTML = "";
  raitingsList.innerHTML = "";
  if (raitings.length === 0) {
    modal.style.display = "flex";
    modalContext.innerHTML = `<p class = 'empty-raitings'>No Games Played Yet</p>`;
  } else {
    modal.style.display = "flex";
    console.log(raitings);
    raitings.forEach((item) => {
      let counter = 1;
      const raitingItem = document.createElement("li");
      raitingItem.className = "raiting-list_item";
      raitingItem.textContent = `${counter++}.  ${item.currentTime} - Score: ${
        item.score
      }`;
      raitingsList.append(raitingItem);
      modalContext.append(ratingsWrap);
    });
  }
}

async function playMusic() {
  try {
    bgAudio.play();
    soundStopPlay.classList.remove("stop");
    soundStopPlay.classList.add("play");
    console.log(bgAudio.paused);

    bgAudio.volume = 0.5;
  } catch {
    console.log("error", error);
  }
}

async function pauseMusic() {
  try {
    bgAudio.pause();
    soundStopPlay.classList.remove("play");
    soundStopPlay.classList.add("stop");
    console.log(bgAudio.paused);
  } catch {
    console.log("error", error);
  }
}

function clickAction() {
  bgAudio.currentTime = 0;
  if (soundStopPlay.classList.contains("play")) {
    pauseMusic();
    soundStopPlay.classList.add("off");
    console.log(bgAudio.paused);
  } else if (soundStopPlay.classList.contains("stop")) {
    playMusic();
    soundStopPlay.classList.remove("off");
    console.log(bgAudio.paused);
  }
  // soundStopPlay.removeEventListener("click", clickAction);
}

volumeRange.addEventListener("input", function () {
  bgAudio.volume = volumeRange.value;
});

function gameOverSound() {
  const clickSound = document.createElement("audio");
  const clickSource = document.createElement("source");
  clickSource.src = "./src/assets/sounds/395737__krzysiunet__gotowe.wav";
  clickSound.append(clickSource);
  body.append(clickSound);

  clickSound.play();
}
