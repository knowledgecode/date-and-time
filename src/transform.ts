import { parse } from './parse.ts';
import { format } from './format.ts';
import { CompiledObject } from './compile.ts';
import type { ParserOptions } from './parser.ts';
import type { FormatterOptions } from './formatter.ts';

/**
 * Transforms a date string from one format to another.
 * @param dateString - The date string to transform
 * @param arg1 - The format string or compiled object for parsing
 * @param arg2 - The format string or compiled object for formatting
 * @param [options1] - Optional parser options
 * @param [options2] - Optional formatter options
 * @returns The transformed date string
 */
export function transform(dateString: string, arg1: string | CompiledObject, arg2: string | CompiledObject, options1?: ParserOptions, options2?: FormatterOptions) {
  return format(parse(dateString, arg1, options1), arg2, options2);
}
