document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
});

document.getElementById('apply-theme').addEventListener('click', function() {
    applyTheme();
});

function applyTheme() {
    const selectedTheme = document.getElementById('themes').value;
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
        // Optional: Set a default light theme class
        document.body.classList.add('light-theme');
    }
}