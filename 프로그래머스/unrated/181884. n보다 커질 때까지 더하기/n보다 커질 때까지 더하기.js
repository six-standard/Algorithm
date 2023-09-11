function solution(numbers, n) {
    i = 0;
    answer = 0;
    while(answer <= n) {
        answer = answer + numbers[i];
        i++;
    }
    return answer;
}