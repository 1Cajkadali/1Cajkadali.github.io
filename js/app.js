$(document).ready(() => {
    const $link = $('a');
    const $github = $('.github');

    $link.on('hover', () => {
        $github.animate({
            backgroundColor: tomato;
            color: green;
        });
    });

  });