const numeral = '၀၁၂၃၄၅၆၇၈၉';
const array = numeral.split('');
const map = Object.fromEntries(array.map((char, index) => [char, String(index)]));

export default {
  encode: (str: string) => str.replace(/\d/g, char => array[+char]),
  decode: (str: string) => str.replace(new RegExp(`[${numeral}]`, 'g'), char => map[char])
};
