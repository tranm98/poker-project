const table = document.querySelector('table');

// loop over all the rows in the table
for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  
  // loop over all the cells in the row
  for (let j = 0; j < row.cells.length; j++) {
    const cell = row.cells[j];
    
    // add a click event listener to the cell
    cell.addEventListener('click', function() {
      toggleHighlight(cell.id);
    });
  }
}

function toggleHighlight(id) {
  var cell = document.getElementById(id);
  if (cell.classList.contains('highlighted')) {
    cell.classList.remove('highlighted');
  } else {
    cell.classList.add('highlighted');
  }
}
