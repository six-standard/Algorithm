function solution(num_list) {
    var mul = 1;
    var add = 0;
    num_list.map(item => {
        mul = mul*item;
        add = add+item;
    })
    return (mul < add*add ? 1 : 0);
}