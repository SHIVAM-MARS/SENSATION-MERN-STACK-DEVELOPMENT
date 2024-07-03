let a = -15;
let b ='sensation';
let c =true
let d;
console.log(typeof d);
console.log(typeof 10); // Output: number
console.log(typeof 'hello'); // Output: string
console.log(typeof true); // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object
console.log(typeof {}); // Output: object
console.log(typeof []); // Output: object

let number = 20;

if (number) {
    console.log('Number is greater than 10');
} else {
    console.log('Number is less than or equal to 10');
}

let val = " "; //truthy value and falsy value
                // falsy -> 0, undefined, null, false, NaN, ""

if(val){
    console.log("Truthy value hai")
}  else{
    console.log("falsy value hai")
}

// Ternary Operator

let a=" " ? true : false

console.log(a)