const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [year, month, day] = input.split('-').map(Number);
const isPossible = year === 2023 && (month < 9 || (month === 9 && day <= 16));

console.log(isPossible ? 'GOOD' : 'TOO LATE');