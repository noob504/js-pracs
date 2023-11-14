function reverseString() {
    const text = document.getElementById("strRev").value;

    const reversedString = text.split("").reverse().join("");

    document.getElementById("reversedString").innerHTML = reversedString;
}

function replaceCharacter() {
    const str = document.getElementById("inputString").value;
    
    const charToBeReplaced = document.getElementById("charToBeReplaced").value;
    const charToReplaceWith = document.getElementById("charToReplaceWith").value;
    
    const pattern = new RegExp(charToBeReplaced, 'g');
    const replacedString = str.replace(pattern, charToReplaceWith);
    
    document.getElementById("replacedString").innerHTML = replacedString;
}

function checkPalindrome() {
    const str = document.getElementById("inputCheckString").value;

    const revStr = str.split("").reverse().join("");

    if (str === revStr) {
        document.getElementById('palindromeResult').innerHTML = "a Palindrome";
    } else {
        document.getElementById('palindromeResult').innerHTML = "not a Palindrome";        
    }
}
