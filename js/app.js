const ul = document.getElementsByClassName('list-group');
const li = document.getElementsByClassName('list-group-item');

function hover(list) {
    ul.addEventListener('hover', e => {
        list.style.backgroundColor = 'tomato';
    })
};

hover(li);