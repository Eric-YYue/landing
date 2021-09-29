import './App.css';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { accountRoutes, mainRoutes, adminRoutes } from "./routes"
import Frame from './components/Frame/index'


function App() {
  return (
    <Frame>
      <Switch>
        {accountRoutes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={routeProps => {
                return <route.component {...routeProps} />;
              }} />
          );
        })}
        {mainRoutes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={routeProps => {
                return <route.component {...routeProps} />;
              }} />
          );
        })}
        {adminRoutes.map(route => {
          return (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              render={routeProps => {
                return <route.component {...routeProps} />
              }}
            />
          )
        })}
        <Redirect to="/dashboard" />
      </Switch>
    </Frame>
  );
}

export default App;
