function solution(nums) {
    let obj = {};
    nums.map(i => obj[i] = true);
    const ol = Object.keys(obj).length;
    const nl = nums.length / 2;
    return(ol > nl ? nl : ol);
}