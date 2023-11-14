function generateArray() {
    const data = document.getElementById('inputData').value;
    const arr = data.split(',');

    return arr;
}

function removeSpecificElement() {
    const arr = generateArray();
    const element = document.getElementById('removeElement').value;
    const index = arr.indexOf(element);

    if (index > -1) {
        arr.splice(index, 1);
    }

    document.getElementById('removeElementResult').innerHTML = arr;
}

function checkElement() {
    const arr = generateArray();
    const element = document.getElementById('checkElement').value;
    const present = arr.includes(element);

    if (present) {
        document.getElementById('checkElementResult').innerHTML = 'Element exists';
    } else {
        document.getElementById('checkElementResult').innerHTML = 'Element does not exist';
    }
}

function emptyArray() {
    const arr = generateArray();

    document.getElementById('originalArray').innerHTML = `Original array: [${arr}]`;
    arr.length=0;

    document.getElementById('emptyArrayResult').innerHTML = `Empty array: [${arr}]`;

}

function arrayOperations() {
    const array = generateArray();

    document.getElementById('arrayOperationsResult').innerHTML = array;
}