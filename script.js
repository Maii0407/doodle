//global variables
const container = document.getElementById('container');

//generates grid 
function makeGrid(rows,columns){
    container.style.gridAutoRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    for(i = 0; i < (rows * columns); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
    }
}

makeGrid(16, 16);