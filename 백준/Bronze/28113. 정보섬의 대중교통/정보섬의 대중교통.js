[_,a,b]=require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);console.log(a==b?"Anything":a>b?"Subway":"Bus")