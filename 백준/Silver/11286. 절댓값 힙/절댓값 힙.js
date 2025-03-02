console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  class MinHeap {
    constructor(heap) {
      this.heap = heap;
    }

    length() {
      return this.heap.length;
    }

    parent(index) {
      return Math.floor((index - 1) / 2);
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

      if (!this.length()) return result || 0;

      this.heap[0] = last;
      this.bubbleDown();
      return result;
    }

    bubbleUp() {
      let index = this.length() - 1;

      while (index > 0) {
        const parent = this.parent(index);
        const [aParent, aTarget] = [Math.abs(this.heap[parent]), Math.abs(this.heap[index])];
        if (aParent < aTarget || (aParent === aTarget && this.heap[parent] < this.heap[index])) break;
        this.swap(index, parent);
        index = parent;
      }
    }

    bubbleDown() {
      let index = 0;

      while (true) {
        let small = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < this.length()) {
          const [aSmall, aLeft] = [Math.abs(this.heap[small]), Math.abs(this.heap[left])];
          if (aLeft < aSmall || (aLeft === aSmall && this.heap[left] < this.heap[small])) small = left;
        }

        if (right < this.length()) {
          const [aSmall, aRight] = [Math.abs(this.heap[small]), Math.abs(this.heap[right])];
          if (aRight < aSmall || (aRight === aSmall && this.heap[right] < this.heap[small])) small = right;
        }

        if (small === index) break;

        this.swap(index, small);
        index = small;
      }
    }
  }

  const [N, ...x] = input.split("\n").map(Number);
  let answer = "";

  const heap = new MinHeap([]);

  for (let i = 0; i < N; i++) {
    if (x[i] === 0) answer = answer + `${heap.poll()}\n`;
    else heap.push(x[i]);
  }
  return answer.trim();
}