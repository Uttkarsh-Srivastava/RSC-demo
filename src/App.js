import React, { Suspense } from "react";

import Counter from "./components/Counter";
import Fetcher from "./components/Fetcher";

const App = () => {
  return (
    <div>
      Home
      <Counter />
      <Suspense fallback="loading...">
        <Fetcher />
      </Suspense>
    </div>
  );
};

export default App;
