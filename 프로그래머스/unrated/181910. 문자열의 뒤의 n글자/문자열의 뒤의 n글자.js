function solution(my_string, n) {
    // my_string.splice(0, my_string.length-n);
    return my_string.slice(my_string.length-n, my_string.length);
}