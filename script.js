//global variables
const container = document.getElementById('doodle-container');

//create grids
function makeGrid(rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);

    for(i = 0; i < (rows * columns); i++){
        let pixel = document.createElement('div');
        
        container.appendChild(pixel).className = "grid-item";
    }
}

makeGrid(16, 16);