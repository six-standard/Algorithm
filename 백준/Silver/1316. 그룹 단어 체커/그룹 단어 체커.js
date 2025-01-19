console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n").map((item) => item.split(""));
  let ans = 0;

  items.map((item) => {
    const visited = {};
    const length = item.length - 1;
    let i = 0;
    for (; i < length; i++) {
      let [cur, nex] = [item[i], item[i + 1]];
      if (!visited[cur]) visited[cur] = true;
      if (nex && cur !== nex && visited[nex]) break;
    }
    if (i === length) ans++;
  });

  return ans;
}
