import React from "react";
import Admin from "./Components/Layouts/Admin";
import { ReactQueryConfigProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const App = (props) => {
  const queryConfig = {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 6,
    },
  };
  return (
    <>
      <ReactQueryConfigProvider config={queryConfig}>
        {<Admin {...props} />}
        <ReactQueryDevtools initialIsOpen />
      </ReactQueryConfigProvider>
    </>
  );
};

export default App;
