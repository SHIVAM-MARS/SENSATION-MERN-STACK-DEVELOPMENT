console.log("hello world")

let a = 5;
let b = 10;

console.log(`Before swap: a = ${a}, b = ${b}`);

let temp = a;
a = b;
b = temp;

console.log(`After swap: a = ${a}, b = ${b}`);


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for(let i = 1; i<=10;i++){
    console.log(`2 x ${i} = ${i*2}`)
}

prompt("Enter a Number:");
