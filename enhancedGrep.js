const fs = require('fs');

const searchWord = process.argv[2];
const fileName = process.argv[3];

if (!searchWord || !fileName) {
    console.log('Usage: node enhancedGrep.js <word> <filename>');
    return;
}

if (!fs.existsSync(fileName)) {
    console.log('File not found.');
    return;
}

const fileContent = fs.readFileSync(fileName, 'utf-8');
const lines = fileContent.split('\n');

let matchCount = 0;

for (const line of lines) {
    if (line.includes(searchWord)) {
        console.log(line);
        matchCount++;
    }
}

if (matchCount === 0) {
    console.log('No matches found.');
}

console.log(`Number of matches: ${matchCount}`);
