import * as React from "react";
import { Route } from "react-router-dom";

export const SharedRouter = () => {
  return (
      <React.Fragment>
        <Route exact path="/">
          <div> Hello </div>
        </Route>
      </React.Fragment>
  );
};
