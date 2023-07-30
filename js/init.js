const container = document.querySelector(`#container`);
let squareEdge = 16;
for (let i = 0; i < (squareEdge * squareEdge); i++) {
  let gridCell = document.createElement("div");
  gridCell.style.boxShadow = "0px 0px 0px 1px black";
  gridCell.style.width = `${container.offsetWidth / squareEdge}px`;
  gridCell.style.height = `${container.offsetHeight / squareEdge}px`;
  container.appendChild(gridCell);
}
