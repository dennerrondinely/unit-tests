import { Switch } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} exact />
  </Switch>
);

export default Routes;
