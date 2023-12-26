import React from "react";
import Nav from "./components/Nav";
import Route from "./routes/RoutePath";
import RouterPath from "./routes/RoutePath";
import RoutePath from "./routes/RoutePath";

const App = () => {
  return (
    <div className=" bg-gray-800">
      <Nav />
      <RoutePath />
    </div>
  );
};

export default App;
