// function to calculate area of triangle
function calcAreaOfTriangle() {

    // dimensions of triangle
    const a = parseFloat(document.getElementById("triangleSideA").value);
    const b = parseFloat(document.getElementById("triangleSideB").value);
    const c = parseFloat(document.getElementById("triangleSideC").value);

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);

    document.getElementById("areaOfTriangle").innerHTML = area;
}


// function to calculate area of square

function calcAreaOfRectangle() {

    // dimensions of rectangle
    const l = parseFloat(document.getElementById("rectangleLength").value);
    const w = parseFloat(document.getElementById("rectangleWidth").value);
    
    const area = (l * w).toFixed(2);

    document.getElementById("areaOfRectangle").innerHTML = area;
}


// function to calculate area of circle

function calcAreaOfCircle() {

    // dimensions of circle
    const r = parseFloat(document.getElementById("circleRadius").value);
    
    const area = (Math.PI * r * r).toFixed(2);
    
    document.getElementById("areaOfCircle").innerHTML = area;
}