import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { mainRoutes, testRoutes } from "./routes"
import Frame from './components/Frame/index'
import Frame2 from './components/Frame/index2'


function App() {
  return (
    <Frame2>
      <Switch>
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
        <Redirect to="/404" />
      </Switch>
    </Frame2>
  );
}

export default App;
