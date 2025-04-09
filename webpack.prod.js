const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // ✅ Add this
const path = require("path");

process.env["NODE_ENV"] = "production";

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/_redirects"), // ✅ location of the file
          to: path.resolve(__dirname, "dist/_redirects") // ✅ adjust if your output folder is different
        }
      ]
    })
  ]
});
