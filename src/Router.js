import React, { use, createContext, startTransition } from "react";
import { createFromFetch } from "react-server-dom-webpack/client";

const routes = [
  {
    path: "/",
    component: Home,
  },
];

const RouterContext = createContext();

// export const ServerRouter = () => {

// }

export const Outlet = () => {
  const [location, setLocation] = useState("/");

  const content = createFromFetch(fetch(`/rsc?location=${location}`));

  const navigate = (url) => {
    startTransition(() => {
      setLocation(url);
    });
  };

  return (
    <RouterContext.Provider value={{ location, navigate }}>
      {use(content)}
    </RouterContext.Provider>
  );
};
