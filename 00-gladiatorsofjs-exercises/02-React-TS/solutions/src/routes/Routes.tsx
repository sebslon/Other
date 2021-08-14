import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { routes } from "./routing";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route exact={exact} path={path} component={component} key={path} />
        ))}
      </Switch>
    </Router>
  );
}
