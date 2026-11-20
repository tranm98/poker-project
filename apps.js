document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('table');
    
    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];

        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];

            cell.addEventListener('click', function() {
                toggleHighlight(cell.id);
                console.log("CLASS:", cell.className);
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
});