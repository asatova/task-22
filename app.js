"use strict"
// 1- task
function right2(str) {
    if (str.length <= 2) {
        return str;
    } else {
        return str.slice(-2) + str.slice(0, -2);
    }
}

console.log(right2('Hello'));
console.log(right2('java'));
console.log(right2('Hi'));

// 2-task

const englishWords = ["hi","bye"]
englishWords.push("bye","hi")
console.log(englishWords);




const englishNames = ["Yo", "Alice"]
englishNames.push("Alice","Yo")
console.log(englishNames);

const englishidioms = ["what", "Up"]
englishidioms.push("Up","What")
console.log(englishidioms);