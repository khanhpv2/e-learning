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
import Navbar from './components/Navbar/Navbar';
import MaDanhMuc from './pages/MaDanhMuc/MaDanhMuc';
import { UserTemplate } from './template/UserTemplate/UserTemplate';
import Profile from './pages/Profile/Profile';
import ProfileTest from './pages/ProfileTest';


export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/detail/:id' exact Component={Detail} /> 
        {/* <Route path='/register' exact component={Register} /> */}
        {/* <Route path='/login' exact component={Login} />  */}
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/list-danhmuc/:maDanhMuc' exact Component={MaDanhMuc} />
        <UserTemplate path='/register' exact Component={Register} />
        <UserTemplate path='/login' exact={false} Component={Login} />
        <Route path='/profile' exact={false} component={Profile} />
        <Route path='/profiletest' exact component={ProfileTest} />



        {/* <Route path='/subnav' exact component={SubNav} /> */}
        {/* <Route path='/test' exact component={Test} />  */}
        {/* <Route path='/abc' exact component={Listcourses} /> */}
       

      

      </Switch>
    </Router>
    
  );
}

export default App;
