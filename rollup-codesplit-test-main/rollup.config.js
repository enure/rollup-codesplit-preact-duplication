import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: [
    './bundle-dynamic-import.js',
    './bundle-main.js'
  ],
  output: {
    dir: 'codesplit',
    format: 'es'
  },
  experimentalCodeSplitting: true,
  plugins: [
    resolve(),
    buble({
      jsx: 'h',
      exclude: ['**/preact/**/*']
    })
  ]
}
