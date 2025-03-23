console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [items, bomb] = input.split("\n").map((i) => i.split(""));
  let stack = [];
  bomb = bomb.join("");

  for (let i = 0; i < items.length; i++) {
    stack.push(items[i]);
    if (i >= bomb.length - 1) {
      if (stack.slice(stack.length - bomb.length, stack.length).join("") === bomb)
        stack.splice(stack.length - bomb.length, stack.length);
    }
  }
  return stack.join("") || "FRULA";
}