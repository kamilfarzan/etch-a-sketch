const container = document.querySelector(`#container`);
let squareEdge = 16;

function renderGrids(edge) {
  container.textContent = "";
  for (let i = 0; i < edge; i++) {
    for (let j = 0; j < edge; j++) {
      let gridCell = document.createElement("div");
      gridCell.style.boxShadow = "0px 0px 0px 1px gray";
      gridCell.style.backgroundColor = "white";
      gridCell.style.width = `${container.offsetWidth / edge}px`;
      gridCell.style.height = `${container.offsetHeight / edge}px`;
      container.appendChild(gridCell);
    }
  }
  container.childNodes.forEach((cell) => {
    cell.addEventListener(`mouseover`, () => {
      cell.style.backgroundColor = "black";
    });
  });
}

renderGrids(squareEdge);

const customGridButton = document.querySelector(`#custom-grid`);
customGridButton.addEventListener(`click`, handleCustomGrid);

function handleCustomGrid() {
  let newGridSize = prompt(`Enter new edge length: (eg. '64' for 64x64 grid)`);
  if (newGridSize > 64) {
    alert("Maximum is 64.");
    newGridSize = 64;
  } else if (newGridSize < 1) {
    alert("Minimum is 1.");
  }
  renderGrids(newGridSize);
}
