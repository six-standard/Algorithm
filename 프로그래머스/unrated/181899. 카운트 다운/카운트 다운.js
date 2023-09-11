function solution(start, end_num) {
    answer = [];
    for(let i = start; i>=end_num; i--) answer.push(i);
    return answer;
}