/** @preserve Copyright (c) KNOWLEDGECODE - MIT License */

export type CompiledObject = string[];

// Escape sequences for literal brackets
const LBRACKET = /\\\[/g;
const RBRACKET = /\\\]/g;

// Private Use Area characters to temporarily replace literal brackets
const PUA_LBRACKET = /\uE000/g;
const PUA_RBRACKET = /\uE001/g;

// Regular expression to match format tokens, literal text, and escaped characters
const REGEXP = /\[(?:[^[\]]|\[[^[\]]*])*]|([A-Za-z])\1*|\.{3}|./g;

/**
 * Compiles a format string into a tokenized array for efficient parsing and formatting.
 * @param formatString - The format string to compile
 * @returns A compiled array where the first element is the original format string,
 *          followed by tokenized format components
 */
export const compile = (formatString: string): CompiledObject => {
  const array = formatString.replace(LBRACKET, '\uE000').replace(RBRACKET, '\uE001').match(REGEXP) ?? [];
  return [formatString, ...array.map(token => token.replace(PUA_LBRACKET, '[').replace(PUA_RBRACKET, ']'))];
};
