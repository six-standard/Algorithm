function solution(arr, k) {
    for(let i = 0; i<arr.length; i++) {
        k%2==0 ? (arr[i] = arr[i]+k) : (arr[i] = arr[i]*k)
    }
    return arr;
}