function solution(s) {
    var o = 0;
    var answer = 0;
    for (let i = 0; i<s.length; i++) {
        if(s[i]==="(") o++;
        else o--;
        if(o<0) return false;
    }
    return o==0?true:false;
}