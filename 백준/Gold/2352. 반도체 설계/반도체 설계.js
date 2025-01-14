console.log(
  solution(
    ...require("fs")
      .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
      .toString()
      .trim()
      .split("\n")
      .map((i) => i.split(" ").map(Number))
  )
);

function solution([length], items) {
  let arr = [items[0]];

  const binarySearch = (target, array) => {
    let [left, right] = [0, array.length - 1];

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (target < array[middle]) right = middle - 1;
      else if (target > array[middle]) left = middle + 1;
    }
    return left;
  };

  for (let i = 1; i < length; i++) {
    if (items[i] > arr[i - 1]) arr.push(items[i]);
    else arr[binarySearch(items[i], arr)] = items[i];
  }

  return arr.length;
}
