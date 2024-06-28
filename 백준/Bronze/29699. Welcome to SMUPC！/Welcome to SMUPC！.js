const n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

const string = "WelcomeToSMUPC";

console.log(string[n % 14 !== 0 ? (n % 14) - 1 : 13]);
