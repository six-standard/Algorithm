const input = require("fs").readFileSync("/dev/stdin").toString().trim()

switch(input) {
    case "M":
        console.log("MatKor")
        break
    case "W":
        console.log("WiCys")
        break
    case "C":
        console.log("CyKor")
        break
    case "A":
        console.log("AlKor")
        break
    case "$":
        console.log("$clear")
        break
        
}