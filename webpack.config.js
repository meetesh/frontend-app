const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  devServer:{
    hot: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: "output management",
      template: "index.html"
    })
  ],
  output:{
    clean: true
  }
};
