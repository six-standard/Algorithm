function solution(array, commands) {
    let answer = [];
    for(let n = 0; n<commands.length; n++) {
        const [s, e, i] = commands[n];
        let item = array.slice(s-1, e).sort((i, j) => i-j);
        answer.push(item[i-1]);
    }
    return answer;
}