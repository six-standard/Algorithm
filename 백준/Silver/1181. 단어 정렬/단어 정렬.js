let [_, ...n] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

console.log([...new Set(n)].sort((i, j) => i.length - j.length || i.localeCompare(j)).join("\n"));