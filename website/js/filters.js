// JS for 'Browse Concerts' filters

function setStartDate() {
    const startPicker = document.getElementById('startDate');
    startPicker.valueAsDate = new Date();
}

function toggleFilters() {
    const filters = document.getElementById('concertFilters');
    const button = document.getElementById('filtersToggle')

    if (filters.classList.contains('hide')) {
        filters.classList.remove('hide');
        button.innerText = '< Hide Filters';
    } else {
        filters.classList.add('hide');
        button.innerText = 'Show Filters >';
    }
}

$(document).ready(() => {
    setStartDate();
});