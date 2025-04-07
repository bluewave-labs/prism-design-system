import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      svgr(),
      postcss({
        inject: true,
        extract: false,
        modules: false,
        include: ['**/*.css'],
        use: ['css'],
        minimize: true,
        config: {
          path: './postcss.config.mjs',
        },
      }),
      esbuild({
        sourceMap: true,
        target: 'esnext',
        jsx: 'automatic', // React 17+ JSX
        tsconfig: './tsconfig.json',
      }),
      copy({
        targets: [
          { src: 'src/style/globals.css', dest: 'dist/src/style' },
          { src: 'src/sd/build/css/_variables.css', dest: 'dist/src/style' },
          { src: 'src/sd/build/scss/_variables.scss', dest: 'dist/src/style' },
          { src: 'src/style/theme.css', dest: 'dist/src/style' },
        ],
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];

export default config;
