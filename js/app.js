const ul = document.getElementsByClassName('list-group');
const li = document.getElementsByClassName('list-group-item');

ul.addEventListener('hover', e => {
    e.target.style.color = 'yellow';
});