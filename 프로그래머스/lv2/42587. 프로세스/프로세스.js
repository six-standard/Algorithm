/*
    2 -> Q
    1 -> Q
    3 -> (첫번째 실행)
    
*/

function solution(priorities, location) {
    let cnt = 0;
    let loc = location;
    let max = Math.max(...priorities);
    while(priorities.length>0) {
        let data = priorities.shift();
        if(data<max) {
            cnt++;
            priorities.push(data);
            if(loc!==0) loc--;
            else loc = priorities.length-1;
        } else {
            if(loc===0) return cnt;
        }
    }
}