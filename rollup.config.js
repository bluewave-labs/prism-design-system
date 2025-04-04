import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
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
      postcss({ extract: 'globals.css' }),
      typescript({
        jsx: 'react-jsx', // 👈 Important
        tsconfig: './tsconfig.json',
      }),
      copy({
        targets: [
          { src: 'src/style/globals.css', dest: 'dist/style' },
          { src: 'src/sd/build/css/_variables.css', dest: 'dist/style' },
          { src: 'src/sd/build/scss/_variables.scss', dest: 'dist/style' },
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
