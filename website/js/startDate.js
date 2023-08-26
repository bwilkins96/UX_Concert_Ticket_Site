// Set filter start date to current date

function setStartDate() {
    const startPicker = document.getElementById('startDate');
    startPicker.valueAsDate = new Date();
}

$(document).ready(() => {
    setStartDate();
});