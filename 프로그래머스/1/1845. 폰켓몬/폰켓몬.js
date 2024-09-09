function solution(nums) {
    const item = new Map();
    const len = nums.length / 2;
    nums.forEach(i => item.set(i, true));
    return len < item.size ? len : item.size;
}