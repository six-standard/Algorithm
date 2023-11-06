function solution(code) {
    var answer = [];
    let mode = 0;
    code.split("").map((i, k) => {
        if(i !== "1") {
            mode !== 1
            ? k%2===0 && answer.push(i)  
            : k%2!==0 && answer.push(i)
        } else {
            mode = (mode ? 0 : 1);
        }
    })
    return answer.length!==0 ? answer.join("") : "EMPTY";
}