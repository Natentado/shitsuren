import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ShirtPage from "../Pages/ShirtPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/shirt/:id">
        <ShirtPage />
      </Route>
    </Switch>
  );
}

export default Routes;
