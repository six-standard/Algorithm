let [size, ...items] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < Number(size); i++) {
  const item = items[i];
  let cnt = 0;
  let result = "YES";
  for (let j = 0; j < item.length; j++) {
    if (item[j] === "(") cnt++;
    else {
      if (--cnt < 0) {
        result = "NO";
        break;
      }
    }
  }
  if (cnt != 0) result = "NO";
  console.log(result);
}