let a = 21;

let b = a++;

let c = ++a;

console.log(a)
console.log(b)
console.log(c)

let str = "SenSation"

let str1 = str.toUpperCase();

console.log(str1)

const a1 = 98;

let b1 = a1;

console.log(a1)
console.log(b1 + 1)

function add(a=2,b=3) {

    console.log(a + b)
}

add(undefined,8)

let num = -1.66666;

console.log(Math.floor(num))

console.log(Math.abs(num))



let rand = Math.floor(Math.random() * 10) + 1;

console.log(rand)


function otp() {
    let otp = Math.floor(Math.random()*10000) + 1000;
    if(otp > 9999){
        otp();
    }
    return otp;
}

console.log("Your OTP is here",otp());
