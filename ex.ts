
//1
function maxTowNumbers(arg1: number, arg2: number):number {
    return arg1 + arg2;
}

//2
function printBigNum(arg1: number, arg2: number): void {
    console.log(arg1 + arg2);
}

//3
function evenOrOdd(num: number): string {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

//4
function lengthOfStr(str: string): number{
    return str.length;
}

//5
function numToArr(num: number): number[] {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

//6
function maxNumOfArr(arr: number[]):number{
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//7
type Persones = {
    name: string,
    age: number,
    isStudent: boolean
}

//8
function printPerson(person: Persones): void{
    console.log(person.name + ' ' + person.age + ' ' + person.isStudent);
}

//9
function isMinor(person: Persones): boolean{
    if (person.age < 18) {
        return true;
    } else {
        return false;
    }
}

//10
interface Book {
    Title: string,
    Author: string,
    Year: number
}

//11
type Reader = Persones & {favoriteBook: Book};

//12
function theOldestReader(readers: Reader[]): Reader {
    let oldest = readers[0];
    for (let i = 1; i < readers.length; i++) {
        if (readers[i].age > oldest.age) {
            oldest = readers[i];
        }
    }
    return oldest;
}

//13
function theOldestBook(readers: Reader[]): Book{
    let oldest = readers[0].favoriteBook;
    for (let i = 1; i < readers.length; i++) {
        if (readers[i].favoriteBook.Year > oldest.Year) {
            oldest = readers[i].favoriteBook;
        }
    }
    return oldest;
}