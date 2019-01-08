const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = [
  {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "./docs/")
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            loaders: {
              scss: "vue-style-loader!css-loader!sass-loader"
            }
          }
          // use: ["vue-loader", "vue-style-loader"]
        },
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"]
          //use: ["vue-style-loader", "sass-loader", "css-loader"]
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
];
