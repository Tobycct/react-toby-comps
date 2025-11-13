import React, { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from './RouteConfig';

const Routes = () => {
  return (
    <HashRouter>
      <Suspense fallback={null}>
        <Switch>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
          <Route render={() => <div>page not found</div>} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default Routes;
