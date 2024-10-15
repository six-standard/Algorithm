const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const arr = [
  "A B C D E F G H J L M",
  "A C E F G H I L M",
  "A C E F G H I L M",
  "A B C E F G H L M",
  "A C E F G H L M",
  "A C E F G H L M",
  "A C E F G H L M",
  "A C E F G H L M",
  "A C E F G H L M",
  "A B C F G H L M",
];

console.log(arr[n - 1].split(" ").length);
console.log(arr[n - 1]);
