const [_, ...items] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(i => i.split(" ").map(Number));
items.forEach(([a, b], i) => console.log(`Case ${i+1}: ${a+b}`));