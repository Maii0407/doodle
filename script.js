//global variables
const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const setBtn = document.getElementById('setBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const shadingBtn = document.getElementById('shadingBtn');
let pixel = document.getElementsByClassName('pixel');

//event listeners
container.addEventListener('mouseover', turnBlack);
clearBtn.addEventListener('click', clearGrid);
setBtn.addEventListener('click', setGrid);

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
function createGrid(pixNum){
    makeGrid(pixNum, (pixNum * 2));
}

//function that colors the grid black
function turnBlack(e){
    e.target.style.backgroundColor = 'black';
} 

//function that clears the grid and set the grid to default
function clearGrid(e) {
   container.innerHTML = '';
   if (container.innerHTML === ''){
       createGrid(16);
   }
}

//function for button to change the current grid
function setGrid(){
    container.innerHTML = '';
    let x = prompt('Pick any number, any number. Between 2 to 50:');
    createGrid(x);
}

//function to open navigation bar
function openNav(){
    document.getElementById('sideNav').style.width = '250px';
}

//function to close navigation bar
function closeNav(){
    document.getElementById('sideNav').style.width = '0';
}

createGrid(16);