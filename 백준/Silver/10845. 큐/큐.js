console.log(
  solution(require("fs").readFileSync("/dev/stdin").toString().trim())
);

function solution(input) {
  const [_, ...items] = input.split("\n").map((i) => i.split(" "));
  let q = [];
  let r = [];

  items.forEach(([c, v]) => {
    switch (c) {
      case "push":
        q.push(v);
        break;
      case "pop":
        r.push(q.length ? q.shift() : -1);
        break;
      case "size":
        r.push(q.length);
        break;
      case "empty":
        r.push(q.length ? 0 : 1);
        break;
      case "front":
        r.push(q.length ? q[0] : -1);
        break;
      case "back":
        r.push(q.length ? q[q.length - 1] : -1);
        break;
    }
  });

  return r.join("\n");
}