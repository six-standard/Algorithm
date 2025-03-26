function solution(scoville, K) {
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
      if (this.heap.length === 0) return undefined;
      
      const first = this.heap[0];
      const last = this.heap.pop();

      if (this.heap.length === 0) return first; // 마지막 원소일 경우 바로 반환

      this.heap[0] = last;
      this.heapifyDown();

      return first;
    }

    heapifyUp() {
      let index = this.heap.length - 1;

      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.heap[parent] <= this.heap[index]) break;
        this.swap(parent, index);
        index = parent;
      }
    }

    heapifyDown() {
      let index = 0;

      while (true) {
        let small = index;
        const left = index * 2 + 1;
        const right = index * 2 + 2;

        if (left < this.heap.length && this.heap[left] < this.heap[small]) small = left;
        if (right < this.heap.length && this.heap[right] < this.heap[small]) small = right;

        if (small === index) break;

        this.swap(small, index);
        index = small;
      }
    }
  }

  const heap = new MinHeap();
  scoville.forEach((item) => heap.push(item));
  let answer = 0;

  while (heap.heap.length > 1 && heap.heap[0] < K) { // 🔹 조건 수정
    const first = heap.poll();
    const second = heap.poll();
    
    heap.push(first + second * 2);
    answer++;
  }

  return heap.heap[0] >= K ? answer : -1; // 🔹 모든 음식이 K 이상이 될 수 없는 경우 처리
}
