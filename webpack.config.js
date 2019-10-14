const path = require('path')

// resolve 絶対パスを生成するメソッド
// __dirname 現在のディレクトリ
const outputPath = path.resolve(__dirname, 'dist')
// console.log(outputPath)

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  }
}
