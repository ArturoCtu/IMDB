import * as React from "react";
import { Route } from "react-router-dom";
import { HomeScreen } from "shared/screens/HomeScreen";

export const SharedRouter = () => {
  return (
    <React.Fragment>
      <Route path="/">
        <HomeScreen/>
      </Route>
    </React.Fragment>
  );
};
