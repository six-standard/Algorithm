function solution(id_list, report, k) {
    let answer = [];
    let users = {}
    id_list.map(i => {
        users[i] = [[], 0];
    })
    report.map(i => {
        i = i.split(" ");
        if(!(users[i[1]])[0].includes(i[0])) {
            (users[i[1]])[0].push(i[0]);
        }
    })
    for(let i of Object.values(users)) {
        if(i[0].length >= k) {
            i[0].map(i => (users[i])[1] += 1)
        }
    }
    for(let i of Object.values(users)) {
        answer.push(i[1])
    }
    return answer;
}