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

const array = [1, 2, 10, 16]

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2)
})

console.log(double)