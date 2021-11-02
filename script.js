//global variables
const container = document.getElementById('container');
let row = document.getElementsByClassName('row');
let pixel = document.getElementsByClassName('pixel');

//make empty divs
function makeDiv(x){
    for(i = 0; i < x; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}

//generates a dynamic grid
function makeGrid(pixNum){
    for(i = 0; i < row.length; i++){
        for(p = 0; p < pixNum; p++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row[p].appendChild(pixel);
        }
    }
}

makeDiv(16);
makeGrid(16);