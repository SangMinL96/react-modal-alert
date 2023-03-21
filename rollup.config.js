import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/react-modal-alert.ts',
  output: [
    {
      file: 'dist/cjs/react-modal-alert.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/react-modal-alert.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    url(),
    peerDepsExternal(),
    babel({ exclude: 'node_modules/**' }),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
