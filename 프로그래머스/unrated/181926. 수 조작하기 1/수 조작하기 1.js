function solution(n, control) {
    control = control.split('');
    control.map(item => {
        switch(item) {
            case "w":
                n = n+1;
                break;
            case "s":
                n = n-1;
                break
            case "d":
                n = n+10;
                break
            case "a":
                n = n-10;
                break;
        }
    });
    return n;
}