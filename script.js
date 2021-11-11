//global variables
const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const setBtn = document.getElementById('setBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
let pixel = document.getElementsByClassName('pixel');
let rainbow = false;

//event listeners
container.addEventListener('mouseover', colorGrid);
clearBtn.addEventListener('click', clearGrid);
setBtn.addEventListener('click', setGrid);
rainbowBtn.addEventListener('click', rainbowClick);

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
function colorGrid(e){
    if(rainbow === true){
        let randomRgb = '#'+Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = randomRgb;
    } else{
        e.target.style.backgroundColor = 'black'; 
    }
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
    let x = prompt('Pick any number, any number. Between 2 to 50:');
    container.innerHTML = '';
    if(x > 50){
        alert('GRID TOO BIG T_T');
        createGrid(16);
    } else if(x === null){
        createGrid(16);
    } else{
        createGrid(x);
    }
}

//function to open navigation bar
function openNav(){
    document.getElementById('sideNav').style.width = '250px';
}

//function to close navigation bar
function closeNav(){
    document.getElementById('sideNav').style.width = '0';
}

//check if the rainbow mode is on or off
function rainbowClick(){
    if(rainbow === false){
        return rainbow = true;
    } else{
        return rainbow = false;
    }
}
createGrid(16);