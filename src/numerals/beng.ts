const numeral = '০১২৩৪৫৬৭৮৯';
const array = numeral.split('');
const map = Object.fromEntries(array.map((char, index) => [char, '' + index]));

export default {
  encode: (str: string) => str.replace(/\d/g, char => array[+char]),
  decode: (str: string) => str.replace(new RegExp(`[${numeral}]`, 'g'), char => map[char])
};
