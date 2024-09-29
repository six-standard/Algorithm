const n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let ans = [];

start: for (let i = 0; i < n.length - 1; i++) {
  const m = n[i].split('');
  let arr = [];

  for (let j = 0; j < m.length; j++) {
    const k = m[j];

    if (k === '[' || k === '(') {
      arr.push(k);
    } else if (k === ']') {
      if (arr[arr.length - 1] !== '[') {
        ans.push('no');
        continue start;
      }
      arr.pop();
    } else if (k === ')') {
      if (arr[arr.length - 1] !== '(') {
        ans.push('no');
        continue start;
      }
      arr.pop();
    }
  }
  if (arr.length !== 0) {
    ans.push('no');
  } else {
    ans.push('yes');
  }
}

console.log(ans.join('\n'));
