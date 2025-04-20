const items = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(i => i.split(" ").map(Number));
items.slice(0, items.length-1).forEach(([a, b]) => console.log(a + b));