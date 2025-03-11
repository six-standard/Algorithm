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
      const value = this.heap[0];
      if (this.length()) {
        if (this.length() === 1) this.heap.pop();
        else this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
      } else return [0, 0];
    }

    bubbleUp() {
      let index = this.length() - 1;

      while (index > 0) {
        const parent = this.parent(index);
        if (this.heap[parent][0] <= this.heap[index][0]) break;
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

        if (left < this.length() && this.heap[left][0] < this.heap[small][0]) small = left;
        if (right < this.length() && this.heap[right][0] < this.heap[small][0]) small = right;

        if (small === index) break;

        this.swap(index, small);
        index = small;
      }
    }
  }

  const [[V, E], [K], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  const graph = Array.from({ length: V + 1 }, () => []);
  const answer = Array(V + 1).fill(Infinity);
  const queue = new MinHeap([[0, K]]);
  answer[K] = 0;

  for (let i = 0; i < E; i++) {
    const [from, ...target] = items[i];
    graph[from].push(target);
  }

  while (queue.length()) {
    const [dist, i] = queue.poll();
    for (let [to, weight] of graph[i]) {
      if (answer[to] > weight + dist) {
        answer[to] = weight + dist;
        queue.push([weight + dist, to]);
      }
    }
  }

  return answer
    .slice(1, V + 1)
    .map((i) => (i === Infinity ? "INF" : i))
    .join("\n");
}