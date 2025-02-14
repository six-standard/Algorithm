console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[n], items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let arr = [items[0]];

  const binarySearch = (target, array) => {
    let [left, right] = [0, array.length - 1];

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (target <= array[middle]) right = middle - 1;
      else left = middle + 1;
    }
    return left;
  };

  for (let i = 1; i < n; i++) {
    if (items[i] > arr[i - 1]) arr.push(items[i]);
    else arr[binarySearch(items[i], arr)] = items[i];
  }

  return arr.length;
}
