console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[height, width], ...lab] = input.split("\n").map((i) => i.split(" ").map(Number));
  const virus = [];
  const empty = [];
  const answer = [0];
  const paths = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function bfs(array) {
    const queue = JSON.parse(JSON.stringify(virus));
    let head = 0;
    let cnt = 0;

    while (head < queue.length) {
      const [cx, cy] = queue[head++];
      paths.forEach(([tx, ty]) => {
        const [nx, ny] = [tx + cx, ty + cy];

        if (nx >= 0 && ny >= 0 && nx < width && ny < height && array[ny][nx] === 0) {
          array[ny][nx] = 2;
          cnt++;
          queue.push([nx, ny]);
        }
      });
    }

    return cnt;
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (lab[i][j] === 2) virus.push([j, i]);
      else if (lab[i][j] === 0) empty.push([j, i]);
    }
  }

  for (let i = 0; i < empty.length; i++) {
    for (let j = i + 1; j < empty.length; j++) {
      for (let k = j + 1; k < empty.length; k++) {
        const newLab = JSON.parse(JSON.stringify(lab));
        newLab[empty[i][1]][empty[i][0]] = 1;
        newLab[empty[j][1]][empty[j][0]] = 1;
        newLab[empty[k][1]][empty[k][0]] = 1;

        answer.push(empty.length - 3 - bfs(newLab));
      }
    }
  }

  return Math.max(...answer);
}