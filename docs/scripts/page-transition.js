// adds transitions to links

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = link.href;
        }, 500);
    });
});
