function appendToResult(value) {
    document.getElementById("result").value += value;
    document.getElementById("result-window").textContent = "Ans";
}

function clearResult() {
    document.getElementById("result").value = "";
    document.getElementById("result-window").textContent = "Ans";
}

function calculateResult() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
        document.getElementById("result-window").textContent = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
        document.getElementById("result-window").textContent = "Error";
    }
}

function showMessage() {
    alert('By Satyansh');
}
