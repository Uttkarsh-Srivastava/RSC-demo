const fs = require("fs");
const React = require("react");
const express = require("express");
const { renderToPipeableStream } = require("react-server-dom-webpack/server");

// This is required to handle client manifest file
const reactServerRegister = require("react-server-dom-webpack/node-register");
reactServerRegister();

const babelRegister = require("@babel/register");
babelRegister({
  ignore: [/[\\\/](build|server|node_modules)[\\\/]/],
  presets: [["@babel/preset-react", { runtime: "automatic" }]],
  plugins: ["@babel/transform-modules-commonjs"],
});

const App = require("./App").default;

const app = express();

app.use(express.static("build"));

const Document = `
  <html>
    <head></head>
    <body>
      <div id="app"></div>
      <script src="main.js"></script>
    </body>
  </html>
`;

app.get("/", async (req, res) => {
  res.send(Document);
});

app.get("/rsc", (req, res) => {
  const CLIENT_MANIFEST = fs.readFileSync("./build/react-client-manifest.json");
  const clientComponents = JSON.parse(CLIENT_MANIFEST);
  const rscStream = renderToPipeableStream(
    React.createElement(App),
    clientComponents
  );
  rscStream.pipe(res);
});

app.listen(3005, () => {
  console.log(`Server running on port 3005`);
});
