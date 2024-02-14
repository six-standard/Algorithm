let i = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
i.shift();

const obj = {
  Algorithm: "204",
  DataAnalysis: "207",
  ArtificialIntelligence: "302",
  CyberSecurity: "B101",
  Network: "303",
  Startup: "501",
  TestStrategy: "105",
};

i.forEach((j) => {
  console.log(obj[j]);
});
