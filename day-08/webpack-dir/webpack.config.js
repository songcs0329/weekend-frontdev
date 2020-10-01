module.exports = {
    mode: "development",
    watch: true,
    module: {
        rules: [{
            test: /\.js/,
            loader: "babel-loader",
            exclude: /node-modules/
        }]
    }
}