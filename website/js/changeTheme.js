// Change theme of page between dark and light

function switchIcon(icon, toDarkTheme = true) {
    if (toDarkTheme) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }   
}

function saveTheme(dark = true) {
    if (dark) {
        localStorage.setItem('theme', 'night');
    } else {
        localStorage.setItem('theme', 'day');
    }
}

function loadTheme() {
    return localStorage.getItem('theme');
}

function changeTheme() {
    const body = document.body;
    const icon = document.getElementById('themeSwitcher');
    const altIcon = document.getElementById('altThemeSwitcherIcon');

    if (body.classList.contains('darkTheme')) {
        body.classList.remove('darkTheme');
        switchIcon(icon, false);
        switchIcon(altIcon, false);  
        saveTheme(false);     
    } else {
        body.classList.add('darkTheme');
        switchIcon(icon);
        switchIcon(altIcon);
        saveTheme();   
    }
} 

// Set theme to previously selected setting 
function restoreTheme() {
    const theme = loadTheme();
    if (theme === 'night') changeTheme();
}

$(document).ready(function() {
    restoreTheme();
});
