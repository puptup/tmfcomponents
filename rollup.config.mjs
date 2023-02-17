import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import external from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser";
import svg from 'rollup-plugin-svg'
import image from '@rollup/plugin-image';

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: 'esm',
      }
    ],
    plugins: [
      resolve(),
      external({includeDependencies: true}),
      commonjs(),
      svg(),
      image(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      typescript({
        typescript: require('ttypescript'),
        tsconfigDefaults: {
          compilerOptions: {
            plugins: [
              { "transform": "typescript-transform-paths" },
              { "transform": "typescript-transform-paths", "afterDeclarations": true }
            ],
          }}
      }),
      terser()
    ]
  }
]