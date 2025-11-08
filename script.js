document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
});

document.getElementById('apply-theme').addEventListener('click', function() {
    applyTheme();
});

document.getElementById('themes').addEventListener('change', function() {
    applyTheme();
});

function applyTheme() {
    const selectedTheme = document.getElementById('themes').value;
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.remove('dark-theme');
        // Ensure light theme is only added if not already added
        if (!document.body.classList.contains('light-theme')) {
            document.body.classList.add('light-theme');
        }
    }
}