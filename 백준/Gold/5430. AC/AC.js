const [_, ...data] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let ans = [];

for (let i = 0; i < data.length; i += 3) {
  const coms = data[i].split("");
  let arr = JSON.parse(data[i + 2]);

  let err = false;
  let rev = false;

  let front = 0;
  let rear = arr.length - 1;

  coms.forEach((i) => {
    if (i === "R") {
      rev = !rev;
    } else if (i === "D" && front > rear) {
      err = true;
      return;
    } else if (i === "D") {
      if (!rev) ++front;
      else --rear;
    }
  });

  if (err) {
    ans.push("error");
    continue;
  }

  let total = [];

  if (rev) {
    for (let i = rear; i >= front; i--) total.push(arr[i]);
  } else {
    for (let i = front; i <= rear; i++) total.push(arr[i]);
  }

  ans.push("[" + total + "]");
}

console.log(ans.join("\n"));
