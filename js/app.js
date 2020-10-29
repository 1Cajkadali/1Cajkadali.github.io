const gitContainer = document.querySelector('.git-container')
const github = document.querySelectorAll('.github');

gitContainer.addEventListener('hover', e => {
    if (e.target === github) {
        github.style.backgroundColor = 'tomato';
    }
});