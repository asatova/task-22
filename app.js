"use strict"
// 1- task
// function right2(str) {
//     if (str.length <= 2) {
//         return str;
//     } else {
//         return str.slice(-2) + str.slice(0, -2);
//     }
// }
//
// console.log(right2('Hello'));
// console.log(right2('java'));
// console.log(right2('Hi'));

// 2-task

function makeAbba(a, b) {
    return a + b + b + a;
}

// Test qismi
console.log(makeAbba('Hi', 'Bye')); // HiByeByeHi
console.log(makeAbba('Yo', 'Alice')); // YoAliceAliceYo
console.log(makeAbba('What', 'Up')); // WhatUpUpWhat
