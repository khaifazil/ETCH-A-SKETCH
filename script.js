const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.style.gridTemplateRows = `repeat(16, 1fr)`;
    container.appendChild(grid);
    grid.classList.add('gridElement');
}

const gridColor = document.querySelectorAll('.gridElement');
gridColor.forEach(gridColor => gridColor.addEventListener('mouseover', colorGrid));

function colorGrid(){
    this.style.backgroundColor = `gray`;
}

const resetButton = document.querySelector('.reset');

resetButton.onclick = resetColor();

function resetColor(){
    gridColor.forEach(gridColor => gridColor.style.backgroundColor = `white`)
};