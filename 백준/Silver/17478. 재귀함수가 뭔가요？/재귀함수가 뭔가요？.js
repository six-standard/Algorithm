let input = parseInt(require("fs").readFileSync("/dev/stdin"));

const recursive = (cnt) => {
  const tab = "____".repeat(cnt);
  console.log(tab + '"재귀함수가 뭔가요?"');

  if (cnt === input) {
    return;
  }

  //prettier-ignore
  console.log(tab + '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.');
  //prettier-ignore
  console.log(tab + "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.");
  //prettier-ignore
  console.log(tab + '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"');

  recursive(cnt + 1);
  if (cnt === input - 1) {
    console.log(tab + "____" + '"재귀함수는 자기 자신을 호출하는 함수라네"');
  }
  console.log(tab + "____" + "라고 답변하였지.");
};

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
recursive(0);
console.log("라고 답변하였지.");
