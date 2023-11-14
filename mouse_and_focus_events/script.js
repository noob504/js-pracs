const mouseEvent = document.getElementById('mouseEvent');
const focusEvent = document.getElementById('focusEvent');

mouseEvent.addEventListener("mouseover", function (params) {
    mouseEvent.style.backgroundColor = "red";
})

mouseEvent.addEventListener("mouseout", function (params) {
    mouseEvent.style.backgroundColor = "white";
})

focusEvent.addEventListener("focus", function (params) {
    focusEvent.style.backgroundColor = "red";
})

focusEvent.addEventListener("blur", function (params) {
    focusEvent.style.backgroundColor = "white";
})