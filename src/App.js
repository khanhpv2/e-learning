import logo from './logo.svg';
import './App.css';


import {createBrowserHistory} from 'history'
import {Route, Router, Switch} from 'react-router-dom'
import { HomeTemplate } from './template/HomeTemPlate/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import SubNav from './components/Navbar/SubNav/SubNav';
import Test from './components/Test';
import Navbar from './components/Navbar/Navbar';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* <HomeTemplate path='/contact' exact Component={Detail} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />  */}
        <HomeTemplate path='/' exact Component={Home} /> 
        {/* <Route path='/subnav' exact component={SubNav} /> */}
        {/* <Route path='/test' exact component={Test} />  */}
        {/* <Route path='/abc' exact component={Listcourses} /> */}
       

      

      </Switch>
    </Router>
    
  );
}

export default App;
