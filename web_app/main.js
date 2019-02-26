function menu() {
    document.querySelector('.burger-line').classList.toggle('burger-act');
    document.querySelector('.super-button').classList.toggle('rotate');
    document.querySelector('.menu').classList.toggle('changeWidth');
}

function cubeRotate() {
    document.querySelector('.cube-container').classList.toggle('rotateX120');
}

function clearCubeRotate() {
    document.querySelector('.cube-container').classList.remove('rotateX120');
}