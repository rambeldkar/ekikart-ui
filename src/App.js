import React from 'react';
import { Route, Switch } from "react-router-dom";
import { AppRouter } from "./Config/AppRouter";
import './assets/css/app.less';

/* Browser history manage */
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => {
  return (
    <Switch>
      {AppRouter.map((route, index) => {
        return (
          <AppRoute
            key={index}
            exact={route.exact}
            path={route.path}
            layout={route.layout}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};

export default App;
