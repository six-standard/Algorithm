const n = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

let codes = [];
let h = "";
let b = "";
let t = "";
n.forEach((i) => (codes[i.charCodeAt()] = codes[i.charCodeAt()] ? ++codes[i.charCodeAt()] : 1));

const odd = codes.filter((i) => i % 2 !== 0).length;
if (odd <= 1) {
  codes.forEach((i, j) => {
    const char = String.fromCharCode(j).repeat(Math.floor(i / 2));

    if (i % 2 !== 0) {
      b = String.fromCharCode(j);
    }
    h = h + char;
    t = char + t;
  });
  console.log(h + b + t);
} else {
  console.log("I'm Sorry Hansoo");
}
