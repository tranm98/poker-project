document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('table');

    let isDragging = false;

    table.addEventListener("mousedown", function(event){
        isDragging = true;
    });

    table.addEventListener("mouseup", function(event){
        isDragging = false;
    });


    table.addEventListener('click', function(event){
        toggleHighlight(event.target);
    });

    function toggleHighlight(cell) {
        if (cell.classList.contains('highlighted')) {
            cell.classList.remove('highlighted');
        } else {
            cell.classList.add('highlighted');
        }
    }
});