console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[x, y, z], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let tomatos = 0;
  const graph = [];
  let answer = 0;
  const queue = [];
  let head = 0;

  for (let i = 0; i < z; i++) graph.push(items.slice(i * y, (i + 1) * y));

  for (let iz = 0; iz < z; iz++) {
    for (let iy = 0; iy < y; iy++) {
      for (let ix = 0; ix < x; ix++) {
        if (graph[iz][iy][ix] === 1) queue.push([ix, iy, iz, 0]);
        else if (graph[iz][iy][ix] === 0) tomatos++;
      }
    }
  }

  if (tomatos === 0) return 0;

  const lz = [1, -1, 0, 0, 0, 0];
  const ly = [0, 0, 1, -1, 0, 0];
  const lx = [0, 0, 0, 0, 1, -1];

  while (head < queue.length) {
    const [cx, cy, cz, day] = queue[head++];
    answer = day;

    for (let i = 0; i < 6; i++) {
      const [nx, ny, nz] = [cx + lx[i], cy + ly[i], cz + lz[i]];
      if (nx >= 0 && ny >= 0 && nz >= 0 && nx < x && ny < y && nz < z && graph[nz][ny][nx] === 0) {
        graph[nz][ny][nx] = 1;
        tomatos--;
        queue.push([nx, ny, nz, day + 1]);
      }
    }
  }

  return tomatos === 0 ? answer : -1;
}
