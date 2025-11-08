document.getElementById('apply-theme').addEventListener('click', function() {
    const selectedTheme = document.getElementById('themes').value;
    if (selectedTheme === 'default') {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
});