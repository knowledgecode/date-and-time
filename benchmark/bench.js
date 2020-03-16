const date = require('../date-and-time');
const rand = (min, max) => ((Math.random() * (max - min) + min) | 0);
const M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const A = ['a.m.', 'p.m.'];
const dates = [];
const dateString = [];
const formatString = 'MMM. D YYYY h:m:s A';
const cnt = 3000000;

console.log('Creating a list of random date string...');

for (let i = 0; i < cnt; i++) {
    const month = rand(0, 12);
    const day = '' + rand(1, 29);
    const year = '' + rand(2000, 2020);
    const hour = '' + rand(0, 12);
    const minute = '' + rand(0, 60);
    const sec = '' + rand(0, 60);
    const ampm = rand(0, 2);
    dates.push(new Date(year, month, day, hour + 12 * ampm, minute, sec));
    dateString.push(`${M[month]}. ${day} ${year} ${hour}:${minute}:${sec} ${A[ampm]}`);
}

console.log('Starting the benchmark.\n');

let start = Date.now();

for (let i = 0; i < cnt; i++) {
    date.format(dates[i], formatString);
}

const bench1 = Date.now() - start;
console.log(`format(): ${bench1}ms`);

start = Date.now();
const pattern1 = date.compile(formatString);

for (let i = 0; i < cnt; i++) {
    date.format(dates[i], pattern1);
}

const bench2 = Date.now() - start;
console.log(`format() with compile(): ${bench2}ms (${Math.round(bench2 / bench1 * 100)}%)`);

start = Date.now();

for (let i = 0; i < cnt; i++) {
    date.parse(dateString[i], formatString);
}

const bench3 = Date.now() - start;
console.log(`parse(): ${bench3}ms`);

start = Date.now();
const pattern2 = date.compile(formatString);

for (let i = 0; i < cnt; i++) {
    date.parse(dateString[i], pattern2);
}

const bench4 = Date.now() - start;
console.log(`parse() with compile(): ${bench2}ms (${Math.round(bench4 / bench3 * 100)}%)`);
