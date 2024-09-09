function solution(participant, completion) {
    let p = new Map();
    let ans = ""
    participant.forEach(i => p.get(i) ? p.set(i, p.get(i) + 1) : p.set(i, 1));
    completion.forEach(i => p.set(i, p.get(i) - 1));
    for(let i of p.keys()) {
        if(p.get(i) !== 0) {
            ans = i;
        }
    }
    return ans;
}