// Select grid container
const gridContainer = document.querySelector('.grid-container');
const clearButton = document.querySelector('.clear-button');
const resizeButton = document.querySelector('.resize-button');

// Default grid size
let gridSize = 16;

// Function to create the grid
function createGrid(size) {
  // Remove old cells
  gridContainer.innerHTML = '';
  
  // Set grid dimensions
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Add grid cells
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    // Color the cell on hover
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black'; // Might make this customizable later
    });
    gridContainer.appendChild(cell);
  }
}

// Clear the grid
clearButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.grid-item');
  cells.forEach(cell => (cell.style.backgroundColor = 'white')); // Reset colors
});

// Resize the grid
resizeButton.addEventListener('click', () => {
  let newSize = parseInt(prompt('Enter new grid size (max: 64):'));
  if (newSize > 0 && newSize <= 64) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert('Invalid size. Please enter a number between 1 and 64.');
  }
});

// Initial grid setup
createGrid(gridSize);
