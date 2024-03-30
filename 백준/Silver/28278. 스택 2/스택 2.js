let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
input.shift();

let arr = [];
let ans = [];
input.forEach((i) => {
  let [n, m] = i.split(" ");
  switch (parseInt(n)) {
    case 1:
      arr.push(m);
      break;
    case 2:
      const u = parseInt(!!arr.length ? arr.pop() : 0);
      ans.push(!!u ? u : -1);
      break;
    case 3:
      ans.push(arr.length);
      break;
    case 4:
      ans.push(!!!arr.length ? 1 : 0);
      break;
    case 5:
      const t = arr[arr.length - 1];
      ans.push(!!t ? t : -1);
      break;
  }
});

console.log(ans.join("\n"));

//JS의 console.log는 성능 저하에 꽤 큰 영향을 준다.
//https://www.acmicpc.net/board/view/128927 해당 글을 참고했다.
