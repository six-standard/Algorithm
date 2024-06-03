let n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

let arr = Array.from(new Array(n).keys()).map((i) => i + 1);
let cnt = 0;

arr.map((i) => {
  let tcnt = 0;
  const st = i.toString();
  if (st.includes(3) || st.includes(6) || st.includes(9)) {
    st.split("").map((j) => (j === "3" || j === "6" || j === "9") && tcnt++);
  }
  cnt += tcnt;
});

console.log(cnt);
