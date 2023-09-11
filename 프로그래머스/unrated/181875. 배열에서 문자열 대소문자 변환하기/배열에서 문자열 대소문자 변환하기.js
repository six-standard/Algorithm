function solution(strArr) {
    for(let i = 0; i<strArr.length; i++) {
        i%2==0 ? strArr[i] = strArr[i].toLowerCase() : strArr[i] = strArr[i].toUpperCase()
    }
    return strArr;
}