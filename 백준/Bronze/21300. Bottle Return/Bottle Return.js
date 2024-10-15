console.log(require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").reduce((acc, prev) => acc + prev * 5, 0));
