import esbuild from 'rollup-plugin-esbuild';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import { globSync } from 'glob';

const ts = () => {
  const plugins = [
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
    globSync('src/numerals/**/*.ts').map(input => config(input, 'dist/numerals')),
    globSync('src/locales/**/*.ts').map(input => config(input, 'dist/locales')),
    globSync('src/plugins/**/*.ts').map(input => config(input, 'dist/plugins')),
    config(Object.fromEntries(
      globSync('src/timezones/**/*.ts').map(input => [input.replace(/(^src\/|\.ts$)/g, ''), input])
    ), 'dist')
  ].flat();
};

const types = () => {
  const plugins = [dts()];
  const config = (input: string | Record<string, string>, outputDir: string) => ({
    input,
    output: { dir: outputDir },
    plugins
  });

  return [
    config('src/index.ts', 'dist'),
    config('src/plugin.ts', 'dist'),
    globSync('src/plugins/**/*.ts').map(input => config(input, 'dist/plugins'))
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
