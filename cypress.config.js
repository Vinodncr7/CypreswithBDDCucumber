const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");
const mysql = require("mysql2/promise");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{feature,cy.js,cy.ts}",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://testautomationpractice.blogspot.com/",
    chromeWebSecurity: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            mode: "development",
            devtool: "inline-source-map",
            resolve: {
              extensions: [".js", ".jsx", ".ts", ".tsx"],
              alias: {
                "@cypress/webpack-preprocessor": path.resolve(
                  __dirname,
                  "node_modules/@cypress/webpack-preprocessor"
                ),
              },
              fallback: {
                "path": require.resolve("path-browserify")
              }
            },
            module: {
              rules: [
                {
                  test: /\.jsx?$/,
                  exclude: [/node_modules/],
                  use: [
                    {
                      loader: "babel-loader",
                      options: {
                        presets: [
                          ["@babel/preset-env", { modules: "commonjs" }]
                        ],
                      },
                    },
                  ],
                },
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
          onFileChange: () => {},
          onWrite: () => {},
        })
      );

      on("task", {
        readPdf({ filePath }) {
          return fs.promises.readFile(filePath).then((data) => pdf(data).then((result) => result.text));
        },
        queryDb({ connectionConfig, sql, params = [] }) {
          return mysql
            .createConnection(connectionConfig)
            .then((conn) =>
              conn.execute(sql, params).then(([rows]) => conn.end().then(() => rows))
            );
        },
      });

      return config;
    },
  },
});
