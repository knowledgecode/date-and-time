/** @preserve Copyright (c) KNOWLEDGECODE - MIT License */

export type CompiledObject = string[];

/**
 * Compiles a format string into a tokenized array for efficient parsing and formatting.
 * @param formatString - The format string to compile
 * @returns A compiled array where the first element is the original format string,
 *          followed by tokenized format components
 */
export const compile = (formatString: string): CompiledObject => {
  return [formatString, ...formatString.match(/\[(?:[^[\]]|\[[^[\]]*])*]|([A-Za-z])\1*|\.{3}|./g) || []];
};
