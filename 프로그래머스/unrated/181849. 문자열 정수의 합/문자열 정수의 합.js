function solution(num_str) {
    var answer = 0;
    arr = num_str.split('');
    for(let i = 0; i<arr.length; i++) {
        answer += Number(arr[i]);
    }
    return answer;
}