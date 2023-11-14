function solution(record) {
    let answer = [];
    let messages = []
    let id = {};
    record.map(i => {
        const act = i.split(" ");
        if(act[0]==="Enter") {
            id[act[1]] = act[2];
            messages.push(["님이 들어왔습니다.", act[1]]);
    } else if(act[0]==="Leave") {
            messages.push(["님이 나갔습니다.", act[1]]);
        } else {
            id[act[1]] = act[2];
        }
    })
    messages.map(i => {
        answer.push(id[i[1]] + i[0]);
    })
    return answer;
}