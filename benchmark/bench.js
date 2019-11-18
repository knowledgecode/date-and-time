const date = require('../date-and-time');
const rand = (min, max) => ((Math.random() * (max - min) + min) | 0);
const M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const A = ['a.m.', 'p.m.'];
const dateString = [];
const formatString = 'MMM. D YYYY h:m:s A';
const cnt = 6553500;

console.log('Creating a list of random date string...');

for (let i = 0; i < cnt; i++) {
    const month = M[rand(0, 12)];
    const day = '' + rand(1, 29);
    const year = '' + rand(2000, 2020);
    const hour = '' + rand(0, 12);
    const minute = '' + rand(0, 60);
    const sec = '' + rand(0, 60);
    const ampm = A[rand(0, 2)];
    dateString.push(`${month}. ${day} ${year} ${hour}:${minute}:${sec} ${ampm}`);
}

console.log('Starting the benchmark.\n');
let start = Date.now();

for (let i = 0; i < cnt; i++) {
    date.parse(dateString[i], formatString);
}

const bench1 = Date.now() - start;
console.log(`parse() only: ${bench1}ms`);

start = Date.now();
const pattern = date.compile(formatString);

for (let i = 0; i < cnt; i++) {
    date.parse(dateString[i], pattern);
}

const bench2 = Date.now() - start;
console.log(`compile() + parse(): ${bench2}ms (${Math.round(bench2 / bench1 * 100)}%)`);
