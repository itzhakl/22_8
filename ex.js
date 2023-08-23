"use strict";
//1
function maxTowNumbers(arg1, arg2) {
    return arg1 + arg2;
}
//2
function printBigNum(arg1, arg2) {
    console.log(arg1 + arg2);
}
//3
function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
//4
function lengthOfStr(str) {
    return str.length;
}
//5
function numToArr(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
//6
function maxNumOfArr(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
//8
function printPerson(person) {
    console.log(person.name + ' ' + person.age + ' ' + person.isStudent);
}
//9
function isMinor(person) {
    if (person.age < 18) {
        return true;
    }
    else {
        return false;
    }
}
//12
function theOldestReader(readers) {
    let oldest = readers[0];
    for (let i = 1; i < readers.length; i++) {
        if (readers[i].age > oldest.age) {
            oldest = readers[i];
        }
    }
    return oldest;
}
//13
function theOldestBook(readers) {
    let oldest = readers[0].favoriteBook;
    for (let i = 1; i < readers.length; i++) {
        if (readers[i].favoriteBook.Year > oldest.Year) {
            oldest = readers[i].favoriteBook;
        }
    }
    return oldest;
}
