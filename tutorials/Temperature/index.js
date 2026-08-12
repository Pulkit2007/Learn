const textbox = document.getElementById('textbox');
const tofarheneit = document.getElementById('tofarheneit');
const tocelcius = document.getElementById('tocelcius');
const result = document.getElementById('result');

function convert() {

    if (tofarheneit.checked) {
        let temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F";
    }

    else if (tocelcius.checked) {
        let temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp + "°C";
    }

    else {
        result.textContent = "Select a unit";
    }
}