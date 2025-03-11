console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  class MaxHeap {
    constructor(heap) {
      this.heap = heap.sort((a, b) => b - a);
    }

    swap(from, to) {
      [this.heap[from], this.heap[to]] = [this.heap[to], this.heap[from]];
    }

    push(item) {
      this.heap.push(item);
      this.bubbleUp();
    }

    poll() {
      const result = this.heap[0];
      const last = this.heap.pop();

      if (!this.heap.length) return result || 0;

      this.heap[0] = last;
      this.bubbleDown();
      return result;
    }

    bubbleUp() {
      let target = this.heap.length - 1;

      while (target > 0) {
        const parent = Math.floor((target - 1) / 2);
        if (this.heap[parent] >= this.heap[target]) break;
        this.swap(parent, target);
        target = parent;
      }
    }

    bubbleDown() {
      let target = 0;

      while (true) {
        let big = target;
        const left = target * 2 + 1;
        const right = target * 2 + 2;

        if (left < this.heap.length && this.heap[left] > this.heap[big]) big = left;
        if (right < this.heap.length && this.heap[right] > this.heap[big]) big = right;

        if (big === target) break;

        this.swap(big, target);
        target = big;
      }
    }
  }

  let [_, me, ...items] = input.split("\n").map(Number);
  const heap = new MaxHeap(items);
  let cnt = 0;

  while (me <= heap.heap[0]) {
    const target = heap.poll();
    me++;
    cnt++;
    heap.push(target - 1);
  }

  return cnt;
}
