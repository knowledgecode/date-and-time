export interface Numeral {
  encode: (str: string) => string;
  decode: (str: string) => string;
}
