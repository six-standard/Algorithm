function solution(priorities, location) {
    let arr = [];
    let max = Math.max(...priorities);
    let cnt = 0;
    for(let i = 0; i<priorities.length; i++) arr.push([priorities[i], i]);
    while(arr.length>0) {
        let tmp = arr.shift();
        if(tmp[0]<max) arr.push(tmp);
        else {
            cnt++;
            if(Number(tmp[1])===location) return(cnt);
            tmp = [];
            arr.forEach(items => tmp.push(items[0]))
            max = Math.max(...tmp);
        }
    }
}