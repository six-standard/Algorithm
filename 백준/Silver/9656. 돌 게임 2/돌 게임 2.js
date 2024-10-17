console.log(require("fs").readFileSync("/dev/stdin").toString().trim() % 2 !== 0 ? "CY" : "SK");
