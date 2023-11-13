function solution(participant, completion) {
    
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++) {
        if(participant[i] != completion[i]) return participant[i];
    }
    
    // let hash = {};
    // let cnt = 0;
    // participant.map((i, j) => {
    //     hash[i] = j+1;
    //     cnt += j+1;
    // })
    // completion.map(i => {
    //     cnt -= hash[i];
    // })
    // return participant[cnt-1];
}