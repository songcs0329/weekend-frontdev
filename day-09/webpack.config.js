const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const isProduction = mode === "production";
console.log(mode, isProduction)


module.exports= {
    mode,
    watch: !isProduction,
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node-modules/,
            loader: "babel-loader"
        },{
            test: /\.css/,
            exclude: /node-modules/,
            loader: "style-loader!css-loader"
        }]
    },
    devtool: isProduction ? false : "eval-source-map",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    }
}