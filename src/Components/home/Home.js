import React from "react";
import FirstHome from "./FirstHome";
import SecondHome from "./SecondHome";
import ThirdHome from "./ThirdHome";

const Home = () => {
  return (
    <div>
      <h2>Welcome to my application</h2>
      <FirstHome header="IS A BUILD ON THIS APPLICATION" />
      <SecondHome lastname="FRANCKY THE WINNER" />
      <ThirdHome copyright="THE LAST DATE IN MY APPLICATION" />
    </div>
  );
};

export default Home;
