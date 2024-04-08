function solution(phone) {
    phone.sort();
    for(let i =0; i<phone.length - 1;i++){
        if(phone[i]===phone[i+1].substring(0,phone[i].length)) return false;
    }
    
    return true;
}