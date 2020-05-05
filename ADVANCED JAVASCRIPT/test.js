const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures t

var health = gainHP() ? +10 : +0

const first = () => {
    const greet = 'Hi';
    const second = () => alert(greet)
}

const newFunc = first();
newFunc();

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

//Arrays, forEach, map, filter, reduce

//forEach
const array = [1, 2, 10, 16]

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2)
})

console.log('forEach', double)
//map

const mapArray = array.map((num) => {
    return num * 2
})

//because it returns a single line you can write it as

const mapArray = array.map(num => num * 2)

console.log('map', mapArray);

//filter

const filterArray = array.filter(num => {
    return num > 5
})
//again single line so it can be written as

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log('reduce', reduceArray);



//OBJECTS
// 3 things - reference type, context, instantiation

//REFERENCE TYPE

const object1 = { value: 10 };
//object1 = object 2 , true
const object2 = object1;
const object3 = { value: 10 };
//object3 = object1, false