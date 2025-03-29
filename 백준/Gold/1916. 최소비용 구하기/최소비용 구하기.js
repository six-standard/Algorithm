console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    swap(from, to) {
      [this.heap[from], this.heap[to]] = [this.heap[to], this.heap[from]];
    }

    push(item) {
      this.heap.push(item);
      this.heapifyUp();
    }

    poll() {
      const first = this.heap[0];
      const last = this.heap.pop();

      if (first === last) return first;

      this.heap[0] = last;
      this.heapifyDown();
      return first;
    }

    heapifyUp() {
      let index = this.heap.length - 1;

      while (index > 0) {
        let parent = Math.floor((index - 1) / 2);
        if (this.heap[parent][1] <= this.heap[index][1]) break;
        this.swap(index, parent);
        index = parent;
      }
    }

    heapifyDown() {
      let index = 0;

      while (true) {
        let big = index;
        let right = index * 2 + 1;
        let left = index * 2 + 2;

        if (left < this.heap.length && this.heap[left][1] < this.heap[big][1]) big = left;
        if (right < this.heap.length && this.heap[right][1] < this.heap[big][1]) big = right;
        if (big === index) break;

        this.swap(index, big);
        index = big;
      }
    }
  }
  const [[N], _, ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  const [S, E] = items.pop();
  const heap = new MinHeap();

  const near = Array.from({ length: N + 1 }, () => []);
  const graph = Array(N + 1).fill(Infinity);
  graph[S] = 0;
  heap.push([S, 0]);

  for (let [from, to, weight] of items) near[from].push([to, weight]);

  while (heap.heap.length) {
    const [ct, cw] = heap.poll();
    if (graph[ct] < cw) continue;

    for (let [nt, nw] of near[ct]) {
      if (graph[nt] > cw + nw) {
        graph[nt] = cw + nw;
        heap.push([nt, cw + nw]);
      }
    }
  }

  return graph[E];
}