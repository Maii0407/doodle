//global variables
const container = document.getElementById('container');
let pixel = document.getElementsByClassName('pixel');

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

//generates grid with single number
//2 min > 16 default > 50 max limit
//recommended max is 30 because of performance issues
function createGrid(pixNum){
    makeGrid(pixNum, (pixNum * 2));
}

//function that colors the grid black
function turnBlack(e){
    e.target.style.backgroundColor = 'black';
}

//event listeners
container.addEventListener('mouseover', turnBlack);


createGrid(25);



