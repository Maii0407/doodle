//global variables
const container = document.getElementById('container');

//makes empty divs
function makePixels(rows, cols){
    for( i = 0; i < (rows * cols); i++){
        let pixels = document.createElement('div');
        pixels.classList.add('pixels');
        container.appendChild(pixels);
    }
}

makePixels(24, 24);