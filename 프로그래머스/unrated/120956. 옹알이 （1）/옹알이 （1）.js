function solution(babbling) {
    let answer = []
    babbling.map(i => {
        answer.push(i.replaceAll(/aya|ye|woo|ma/g, ""));
        
    })
    return answer.filter(i => i === "").length;
}