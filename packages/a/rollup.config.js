
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require("../helper/node_modules/rollup-plugin-babel");
const path = require('path')
const sass = require('../helper/node_modules/rollup-plugin-sass')


const config = {
  // external: Object.keys(pck.dependencies || {}),
  input: 'src/index.js',
  // preserveModules: true,
  plugins: [
    // sass({
    //   output: path.resolve(process.cwd(), 'lib/styles.css')
    // }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      include: 'node_modules/**'
    }),
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'MyApp',
  },
};


module.exports = config