const showMessage = document.querySelector('#show-message');
const closeMessage = document.querySelector('#hide-message');
const beginSec = document.querySelector('.begin');
const endSec = document.querySelector('.end');

showMessage.onclick = () => {
    beginSec.style.display = 'none';
    endSec.style.display = 'block';
}
closeMessage.onclick = () => {
    endSec.style.display = 'none';
    beginSec.style.display = 'flex';
}

