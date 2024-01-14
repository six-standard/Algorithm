const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let a1
let a2
if(input.length%2 !== 0) {
    a1 = input.slice(0, input.length/2)
    a2 = input.slice(input.length/2+1, input.length);
} else {
    a1 = input.slice(0, input.length/2)
    a2 = input.slice(input.length/2, input.length);
}

if(a1 === a2.split("").reverse().join("")) 
    console.log(1);
else
    console.log(0);