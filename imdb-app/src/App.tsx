import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SharedRouter } from "./shared/router";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SharedRouter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
