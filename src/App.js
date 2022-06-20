import logo from './logo.svg';
import './App.css';


import {createBrowserHistory} from 'history'
import {Route, Router, Switch} from 'react-router-dom'
import { HomeTemplate } from './template/HomeTemPlate/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* <HomeTemplate path='/contact' exact Component={Detail} /> */}
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <HomeTemplate path='/' exact Component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
