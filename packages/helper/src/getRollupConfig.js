const path = require('path')
const sass = require('rollup-plugin-sass')
const babel = require("rollup-plugin-babel");

module.exports = function getRollupConfig() {
  const pck = require(path.resolve( process.cwd(), 'package.json'))

  const config = {
    // external: Object.keys(pck.dependencies || {}),
    input: path.resolve(process.cwd(), 'src/index.js'),
    // preserveModules: true,
    plugins: [
      babel(),
      sass({
        output: path.resolve(process.cwd(),'lib/styles.css')
      }),
      sass({
        output: path.resolve(process.cwd(),'dist/styles.css')
      })
    ],
    output: [{
      dir: path.resolve(process.cwd(),'dist'),
      format: 'cjs'
    },{
      dir: path.resolve(process.cwd(),'lib'),
      format: 'esm',
    }]
  };

  return config
}
