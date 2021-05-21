const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    let entry, ext;
    if (env.mode == "development") {
        entry = "./development/index.js";
        ext = {};
    } else {
        entry = "./index.js";
        ext = {
            // Use external version of React
            react: {
                commonjs: "react",
                commonjs2: "react",
                amd: "react",
                root: "React",
            },
            "react-dom": {
                commonjs: "react-dom",
                commonjs2: "react-dom",
                amd: "react-dom",
                root: "ReactDOM",
            },
        };
    }

    console.log("MODE IS: " + env.mode);
    console.log("ENTRY IS: " + entry);
    console.log(`WILL USE EXTERNAL REACT: ${env.mode != "development"}`);

    return {
        entry,
        output: {
            library: "@qniverse/core",
            libraryTarget: "umd",
            path: path.join(__dirname, "/dist"),
            publicPath: "",
            filename: "index.js",
            globalObject: "this",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
            ],
        },
        plugins: [
            new htmlWebpackPlugin({
                template: "./development/index.html",
            }),
        ],
        devServer: {
            port: 3000,
        },
        externals: ext,
        resolve: {
            alias: {
                react: path.resolve(__dirname, "node_modules", "react"),
            },
        },
    };
};
