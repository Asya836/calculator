function appendToScreen(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = '';
}

function result() {
    const resultField = document.getElementById("result");
    resultField.value = eval(resultField.value);
}

function deleteNumber() {
    const resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
}
function square() {
    const resultField = document.getElementById("result");
    resultField.value = Math.pow(Number(resultField.value), 2);
}
function percent() {
    const resultField = document.getElementById("result");
    resultField.value = Number(resultField.value) / 100;
}