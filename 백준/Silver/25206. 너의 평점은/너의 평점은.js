let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let total_hak = 0;
let total_gwa = 0;

// let input = [
//   "ObjectOrientedProgramming1 3.0 A+",
//   "IntroductiontoComputerEngineering 3.0 A+",
//   "ObjectOrientedProgramming2 3.0 A0",
//   "CreativeComputerEngineeringDesign 3.0 A+",
//   "AssemblyLanguage 3.0 A+",
//   "InternetProgramming 3.0 B0",
//   "ApplicationProgramminginJava 3.0 A0",
//   "SystemProgramming 3.0 B0",
//   "OperatingSystem 3.0 B0",
//   "WirelessCommunicationsandNetworking 3.0 C+",
//   "LogicCircuits 3.0 B0",
//   "DataStructure 4.0 A+",
//   "MicroprocessorApplication 3.0 B+",
//   "EmbeddedSoftware 3.0 C0",
//   "ComputerSecurity 3.0 D+",
//   "Database 3.0 C+",
//   "Algorithm 3.0 B0",
//   "CapstoneDesigninCSE 3.0 B+",
//   "CompilerDesign 3.0 D0",
//   "ProblemSolving 4.0 P",
// ];

input = input.map((i) => i.split(" "));

input.map((i) => {
  if (i[2] !== "P") total_hak += Number(i[1]);
  let gwa = 0;
  switch (i[2]) {
    case "A+":
      gwa = 4.5;
      break;
    case "A0":
      gwa = 4.0;
      break;
    case "B+":
      gwa = 3.5;
      break;
    case "B0":
      gwa = 3.0;
      break;
    case "C+":
      gwa = 2.5;
      break;
    case "C0":
      gwa = 2.0;
      break;
    case "D+":
      gwa = 1.5;
      break;
    case "D0":
      gwa = 1.0;
      break;
    case "F":
      gwa = 0;
      break;
  }
  total_gwa += gwa * Number(i[1]);
});

console.log((total_gwa / total_hak).toFixed(6));
