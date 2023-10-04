/*
    배열의 맨 앞 값을 제거해나가면서 일정에 맞는 값들만 지워나간다.
    현재 값보다 큰 값이 올 때까지 cnt를 더해가다가
    현재 값보다 큰 값이 나오면 cnt를 return한다
*/

function solution(progresses, speeds) {
    let answer = [];
    let data = [];
    for (let i = 0; i<progresses.length; i++) data.push(Math.ceil((100-progresses[i])/speeds[i]));
    while(data.length>0) {
        let cnt = 1;
        let day = data.shift();
        while(1) {
            if(day >= data[0]) {
                data.shift();
                cnt++;
            } else {
                answer.push(cnt);
                break;
            }
        }
    }
    return answer;
}