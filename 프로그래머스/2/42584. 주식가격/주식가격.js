function solution(prices) {
    return prices.map((i, j) => {
        for(let n = j+1; n<prices.length; n++) {
            if(prices[n] < i) {
                return n - j
            }
        }
        return prices.length - j - 1;
    });
}