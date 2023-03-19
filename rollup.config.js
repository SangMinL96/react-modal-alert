import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/react-modal-alert.ts', // 어떤 파일로 부터 불러올것인지 설정
  output: [
    {
      file: 'dist/cjs/react-modal-alert.js', // package.json에 설정한 main의 경로로 번들링 진행
      format: 'cjs', // commonjs 형태로 번들링
      sourcemap: true,
    },
    {
      file: 'dist/esm/react-modal-alert.js', //번들링한 파일을 저장 할 경로, package.json에 설정한 module의 경로로 번들링
      format: 'esm', // es모듈 형태로 번들링
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(), //commonJS형태로 만들어진 모듈도 불러와서 사용 할 수 있게 해줌
    resolve(), //node_modules에서 모듈을 불러올수 있도록 해줌, ts/tsx 파일도 불러올수 있음
    url(), //미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌
    peerDepsExternal(), //peerDependencies에 설치된 라이브러리들을 external모듈로 설정하여 번들 결과물에서 제외
    babel({ exclude: 'node_modules/**' }), //babel을 사용 할 수 있게 해줌
    typescript({ useTsconfigDeclarationDir: true }), //typescript 플러그인
  ],
};
