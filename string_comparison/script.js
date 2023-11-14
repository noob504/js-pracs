function compareUsingToUpperCase(str1, str2) {
    const result = str1.toUpperCase() === str2.toUpperCase();

    if (result) {
        document.getElementById('toUpperCaseResult').innerHTML = "strings are equal";
    } else {
        document.getElementById('toUpperCaseResult').innerHTML = "strings are not equal";
    }
}

function compareUsingRegExp(str1, str2) {

    const pattern = new RegExp(str1, 'gi');
    const result = str2.match(pattern);

    if (result) {
        document.getElementById('regExpResult').innerHTML = "strings are equal";
    } else {
        document.getElementById('regExpResult').innerHTML = "strings are not equal";
    }
}

function compareUsingLocaleCompare(str1, str2) {
    const result = str1.localeCompare(str2);

    if (result === 0) {
        document.getElementById('localeCompareResult').innerHTML = "strings are equal";
    } else {
        document.getElementById('localeCompareResult').innerHTML = "strings are not equal";
    }
}


function compareStrings() {
    stringOne = document.getElementById('stringOne').value;
    stringTwo = document.getElementById('stringTwo').value;

    compareUsingToUpperCase(stringOne, stringTwo);
    compareUsingRegExp(stringOne, stringTwo);
    compareUsingLocaleCompare(stringOne, stringTwo);
        
}