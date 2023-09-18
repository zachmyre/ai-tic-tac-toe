const path = require("path");

module.exports = {
  entry: "./src/game.ts", // Adjust this path based on your project structure
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js", // Adjust the output file name if needed
    path: path.resolve(__dirname, "dist"), // Adjust the output path if needed
  },
};
