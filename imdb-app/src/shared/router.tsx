import * as React from "react";
import { Route } from "react-router-dom";
import { HomeScreen } from "shared/screens/HomeScreen";
import { MovieInfoScreen } from "shared/screens/MovieInfoScreen";

export const SharedRouter = () => {
  return (
    <React.Fragment>
      <Route path="/home">
        <HomeScreen/>
      </Route>
      <Route path="/movie/:id">
        <MovieInfoScreen/>
      </Route>
    </React.Fragment>
  );
};
