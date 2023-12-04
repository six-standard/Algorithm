function solution(new_id) {
  new_id = new_id.toLowerCase() // 1단계
  new_id = new_id.replace(/[^\w\d-_.]/g, "") // 2단계
  new_id = new_id.replace(/[.]{2,}/g, ".") // 3단계
  new_id = new_id.replace(/^[.]+|[.]+$/g, ""); // 4단계
  new_id = new_id.substring(0, 15); // 5단계
  if(new_id == "") new_id = "a"; // 5-1단계
  if(/\.$/.test(new_id)) new_id = new_id.slice(0, -1); // 6단계
  if(new_id.length <=2) new_id = `${new_id}${new_id.slice(-1).repeat(3-new_id.length)}`; // 7단계
  return new_id;
}