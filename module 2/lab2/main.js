"use strict";
// 1
let arr = [
    123.456,
    234.345,
    345.234,
    456.123
];
function min(arr) {
    let ret = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < ret) {
            ret = arr[i];
        }
    }
    return ret;
}
console.log(min(arr));
// 2
let matr = [
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 3],
    [2, 3, 4, 3, 2],
    [3, 4, 3, 2, 1],
    [4, 3, 2, 1, 0]
];
function zeroes(arr) {
    let ret = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr[i].length; j++)
            if (arr[i][j] == 0)
                ret++;
    return ret;
}
console.log(zeroes(matr));
// 3
let elem = ["asdf", "qwerty", "123"];
const to_string = (t) => {
    return t[0] + t[1] + t[2];
};
console.log(to_string(elem));
// 4
var PrinterType;
(function (PrinterType) {
    PrinterType[PrinterType["Laser"] = 0] = "Laser";
    PrinterType[PrinterType["Dust"] = 1] = "Dust";
    PrinterType[PrinterType["Matrix"] = 2] = "Matrix";
    PrinterType[PrinterType["Sublime"] = 3] = "Sublime";
})(PrinterType || (PrinterType = {}));
;
console.log(PrinterType.Matrix);
// 5
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function PetInfo(p) {
    console.log("age: " + p.age);
    console.log("name: " + p.name);
    console.log("speak(): " + p.speak());
}
console.log(new Cat());
console.log("PetInfo:");
PetInfo(new Cat());
;
const myShop = {
    type: PrinterType.Sublime,
    count: 123,
    manufacter: "Brother"
};
console.log(JSON.stringify(myShop));
