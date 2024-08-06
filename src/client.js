import React, { use } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { createFromFetch } from "react-server-dom-webpack/client";

window.process = {};

const content = createFromFetch(fetch("/rsc"));

const Application = () => {
  return use(content);
};

const root = createRoot(document.getElementById("app"));
root.render(<Application />);

// const container = document.getElementById("app");
// hydrateRoot(container, Application);
