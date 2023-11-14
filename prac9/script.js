function addition() {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const c = parseFloat(a) + parseFloat(b);
    document.getElementById("operationResult").innerHTML = c;
}

function subtraction() {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const c = parseFloat(a) - parseFloat(b);
    document.getElementById("operationResult").innerHTML = c;
}

function multiplication() {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const c = parseFloat(a) * parseFloat(b);
    document.getElementById("operationResult").innerHTML = c;
}

function division() {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const c = parseFloat(a) / parseFloat(b);
    document.getElementById("operationResult").innerHTML = c;
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operationResult").innerHTML = "";
}