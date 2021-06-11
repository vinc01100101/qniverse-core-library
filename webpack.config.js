const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
    let entry, ext, outputPath;
    if (env.mode == "development") {
        entry = "./development/index.js";
        ext = {};
        outputPath = path.join(__dirname, "/dist");
    } else {
        // entry = "./index.js";
        entry = {
            _CardVehicle: "./src/qComponents/_CardVehicle/index.js",
            _Footer: "./src/qComponents/_Footer/index.js",
            _NavBarWithDrawer: "./src/qComponents/_NavBarWithDrawer/index.js",
            _Wrapper: "./src/qComponents/_Wrapper/index.js",
            automart: "./src/themes/automart.js",
            motomart: "./src/themes/motomart.js",
            sellMyCar: "./src/themes/sellMyCar.js",
            // config: "./src/utils/config.js",
        };
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
            "@material-ui/core": {
                commonjs: "@material-ui/core",
                commonjs2: "@material-ui/core",
                amd: "@material-ui/core",
            },
            "@material-ui/styles": {
                commonjs: "@material-ui/styles",
                commonjs2: "@material-ui/styles",
                amd: "@material-ui/styles",
            },
            "./config": {
                commonjs: "./config",
                commonjs2: "./config",
                amd: "./config",
            },
        };
        outputPath = path.join(__dirname, "/lib");
    }

    console.log("MODE IS: " + env.mode);
    console.log("ENTRY IS: " + entry);
    console.log(`WILL USE EXTERNAL REACT: ${env.mode != "development"}`);

    return {
        entry,
        output: {
            library: "@qniverse/core",
            libraryTarget: "umd",
            path: outputPath,
            publicPath: "",
            // filename: "index.js",
            filename: "[name].js",
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
            // new BundleAnalyzerPlugin({analyzerMode: "static"}),
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
        // optimization: {
        //     splitChunks: {
        //         // include all types of chunks
        //         chunks: "all",
        //     },
        // },
    };
};
