import React, { Suspense } from "react";

import Counter from "./Counter";
import Fetcher from "./Fetcher";

const Home = () => {
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

export default Home;
