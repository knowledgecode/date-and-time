import alias from '@rollup/plugin-alias';
import esbuild from 'rollup-plugin-esbuild';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import { globSync } from 'glob';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = (input: string) => input.replace(/^src/g, 'dist').replace(/\/[^/]*$/g, '');
const replacePath = (input: string) => input.replace(/(^src\/|\.ts$)/g, '');

const ts = () => {
  const plugins = [
    alias({ entries: [{ find: '@', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src') }] }),
    esbuild({ minify: false, target: 'es2021' }),
    terser()
  ];
  const config = (input: string | Record<string, string>, outputDir: string) => ({
    input,
    output: [
      { dir: outputDir, format: 'es' },
      { dir: outputDir, format: 'cjs', entryFileNames: '[name].cjs' }
    ],
    plugins
  });

  return [
    config('src/index.ts', 'dist'),
    config('src/plugin.ts', 'dist'),
    config(Object.fromEntries(globSync('src/numerals/**/*.ts').map(input => [replacePath(input), input])), 'dist'),
    globSync('src/locales/**/*.ts').map(input => config(input, outputDir(input))),
    globSync('src/plugins/**/*.ts').map(input => config(input, outputDir(input))),
    config(Object.fromEntries(globSync('src/timezones/**/*.ts').map(input => [replacePath(input), input])), 'dist')
  ].flat();
};

const types = () => {
  const plugins = [
    alias({ entries: [{ find: '@', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src') }] }),
    dts()
  ];
  const config = (input: string | Record<string, string>, outputDir: string) => ({
    input,
    output: { dir: outputDir },
    plugins
  });

  return [
    config('src/index.ts', 'dist'),
    config('src/plugin.ts', 'dist'),
    config(Object.fromEntries(globSync('src/numerals/**/*.ts').map(input => [replacePath(input), input])), 'dist'),
    globSync('src/locales/**/*.ts').map(input => config(input, outputDir(input))),
    globSync('src/plugins/**/*.ts').map(input => config(input, outputDir(input))),
    config(Object.fromEntries(globSync('src/timezones/**/*.ts').map(input => [replacePath(input), input])), 'dist')
  ].flat();
};

export default (args: Record<string, string>) => {
  if (args['config-ts']) {
    return ts();
  }
  if (args['config-types']) {
    return types();
  }
  return [...ts(), ...types()];
};
