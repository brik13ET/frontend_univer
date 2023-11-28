// 1
let arr = [
    123.456,
    234.345,
    345.234,
    456.123
]

function min(arr: number[]): number {
    let ret: number = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < ret ) {
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

function zeroes(arr: number[][]): number {
    let ret = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr[i].length; j++)
            if (arr[i][j] == 0)
                ret++;
    return ret;
}

console.log(zeroes(matr));

// 3
let elem: [string, string, string] = [ "asdf", "qwerty", "123"]

const to_string = (t: [string, string, string]): string => {
    return t[0] + t[1] + t[2];
}

console.log(to_string(elem));

// 4
enum PrinterType {
    Laser,
    Dust,
    Matrix,
    Sublime
};
console.log(PrinterType.Matrix);

// 5
class Pet {
    name: string = 'Some pet'
    age: number = -1


    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;


    speak() {
        return "Miyau!";
    }
}

function PetInfo <T extends Pet>(p: T) {
    console.log("age: " + p.age);
    console.log("name: " + p.name);
    console.log("speak(): " + p.speak());
}

console.log(new Cat());
console.log("PetInfo:");
PetInfo(new Cat())

// 6
interface Shop
{
    type: PrinterType,
    count: number,
    manufacter: string
};

const myShop: Shop = {
    type: PrinterType.Sublime,
    count:  123,
    manufacter: "Brother"
};

console.log(JSON.stringify(myShop));