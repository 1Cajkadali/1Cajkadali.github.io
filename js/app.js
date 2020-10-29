const ul = document.getElementsByClassName('list-group')[0];
const li = document.getElementsByClassName('list-group-item');

ul.addEventListener('hover', e => {
    e.target.style.backgroundColor = 'yellow';
});