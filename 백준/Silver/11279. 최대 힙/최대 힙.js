console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  class MaxHeap {
    constructor() {
      this.heap = [];
    }

    length() {
      return this.heap.length;
    }

    push(item) {
      this.heap.push(item);
      this.bubbleUp();
    }

    poll() {
      const result = this.heap[0];
      const last = this.heap.pop();

      if (!this.length()) return result || 0;

      this.heap[0] = last;
      this.bubbleDown();
      return result;
    }

    swap(from, to) {
      [this.heap[from], this.heap[to]] = [this.heap[to], this.heap[from]];
    }

    bubbleUp() {
      let target = this.length() - 1;

      while (target > 0) {
        const parent = Math.floor((target - 1) / 2);
        if (this.heap[parent] >= this.heap[target]) break;
        this.swap(parent, target);
        target = parent;
      }
    }

    bubbleDown() {
      let index = 0;

      while (true) {
        let big = index;
        const left = index * 2 + 1;
        const right = index * 2 + 2;

        if (left < this.length() && this.heap[left] > this.heap[big]) big = left;
        if (right < this.length() && this.heap[right] > this.heap[big]) big = right;

        if (big === index) break;

        this.swap(index, big);
        index = big;
      }
    }
  }

  const [N, ...x] = input.split("\n").map(Number);
  let answer = "";

  const heap = new MaxHeap();

  for (let i = 0; i < N; i++) {
    if (x[i] === 0) answer += `${heap.poll()}\n`;
    else heap.push(x[i]);
  }

  return answer.trim();
}
