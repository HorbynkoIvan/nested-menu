const path = require("path");

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, "src/components/"),
            '@features': path.resolve(__dirname, "src/features/"),
            '@data': path.resolve(__dirname, "src/data/")
        }
    }
}