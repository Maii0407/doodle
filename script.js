//global variables
const container = document.getElementById('container');
let row = document.getElementsByClassName('row');
let pixel = document.getElementsByClassName('pixel');

//make empty divs rows
function makeDiv(x){
    for(i = 0; i < x; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}

//generates columns and fill the grid
function makePixel(pixNum){
    for(i = 0; i < row.length; i++){
        for(p = 0; p < pixNum; p++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row[p].appendChild(pixel);
        }
    }
}

//generates a grid
function makeGrid(rowNum, colNum){
    makeDiv(rowNum);
    makePixel(colNum);
}

makeGrid(16, 16);