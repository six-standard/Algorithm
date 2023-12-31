function solution(survey, choices) {
    let answer = [];
    let sc = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    const vs = ['RT', 'CF', 'JM', 'AN'];
    survey.map((i, j) => {
        const item = i.split("");
        if(choices[j] <= 3) {
            sc[item[0]] += (choices[j] - 4) * -1
        } else if(choices[j] >= 5) {
            sc[item[1]] += choices[j] % 4;
        }
    })
    vs.map(i => {
        const tmp = i.split("");
        answer.push(sc[tmp[0]] >= sc[tmp[1]] ? tmp[0] : tmp[1])
    })
    // answer.push(sc['R'] >= sc['T'] ? "R" : "T");
    // answer.push(sc['C'] >= sc['F'] ? "C" : "F");
    // answer.push(sc['J'] >= sc['M'] ? "J" : "M");
    // answer.push(sc['A'] >= sc['N'] ? "A" : "N");
    return answer.join("");
}