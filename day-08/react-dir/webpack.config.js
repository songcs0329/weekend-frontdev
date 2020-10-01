module.exports = {
    mode: "development",
    watch: true,
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node-modules/,
            loader: "babel-loader"
        }]
    }
}