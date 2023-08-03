// Colors
const black = `hsl(0, 0%, 0%)`;
const white = `hsl(0, 0%, 100%)`;

// Mouse Condition

let mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

// Code
const container = document.querySelector(`#container`);
let squareEdge = 16;
let fillColor = black;

function renderGrids(edge, color) {
  container.textContent = "";
  for (let i = 0; i < edge; i++) {
    for (let j = 0; j < edge; j++) {
      let gridCell = document.createElement("div");
      gridCell.style.boxShadow = "0px 0px 0px 1px gray";
      gridCell.style.backgroundColor = "white";
      gridCell.style.width = `${container.clientWidth / edge}px`;
      gridCell.style.height = `${container.clientHeight / edge}px`;
      container.appendChild(gridCell);
    }
  }
  hoverChange(container, color);
}

function hoverChange(container, color) {
  container.childNodes.forEach((cell) => {
    cell.addEventListener(`mousemove`, () => {
      if (mouseDown) {
        if (color == `rainbow`) {
          cell.style.backgroundColor = returnRandomColor();
        } else {
          cell.style.backgroundColor = color;
        }
      }
    });
    cell.ondragstart = () => {
      return false;
    };
  });
}

renderGrids(squareEdge, fillColor);

const customGridButton = document.querySelector(`#custom-grid`);
customGridButton.addEventListener(`click`, handleCustomGrid);

function handleCustomGrid() {
  let newGridSize = parseInt(
    prompt(`Enter new edge length: (eg. '32' for 32x32 grid)`),
    10
  );
  if (newGridSize > 64) {
    alert("Maximum is 64.");
    newGridSize = handleCustomGrid();
  } else if (newGridSize < 1) {
    alert("Minimum is 1.");
    newGridSize = handleCustomGrid();
  } else if (isNaN(newGridSize)) {
    alert("Please enter a numeric value.");
    newGridSize = handleCustomGrid();
  }
  renderGrids(newGridSize, fillColor);
  return newGridSize;
}

const rainbowButton = document.querySelector(`#rainbow`);
rainbowButton.addEventListener(`click`, handleRainbowFill);

function handleRainbowFill() {
  fillColor = "rainbow";
  hoverChange(container, "rainbow");
}

function returnRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const blackButton = document.querySelector(`#black`);
blackButton.addEventListener(`click`, handleBlackButton);

function handleBlackButton() {
  fillColor = black;
  hoverChange(container, black);
}

const clearButton = document.querySelector(`#clear`);
clearButton.addEventListener(`click`, handleClearButton);

function handleClearButton() {
  fillColor = white;
  hoverChange(container, white);
}
