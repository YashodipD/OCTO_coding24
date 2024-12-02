const fs = require('fs');

const countVowels = line => (line.match(/[aeiouy]/gi) || []).length;

const findLineWithMostVowels = filePath => {
    const lines = fs.readFileSync(filePath, 'utf-8').split('\n');
    return lines.reduce((max, line, index) => {
        const vowelCount = countVowels(line);
        if (vowelCount > max.count || (vowelCount === max.count && index > max.lineNumber)) {
            return { lineNumber: index, line, count: vowelCount };
        }
        return max;
    }, { lineNumber: 0, line: '', count: 0 });
};

const filePath = 'data.txt';
const lineWithMostVowels = findLineWithMostVowels(filePath);
console.log(`The line with the most vowels is: ${lineWithMostVowels.lineNumber}`);
console.log(lineWithMostVowels);