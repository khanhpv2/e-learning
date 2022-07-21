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
import {AdminTemplate} from './template/AdminTemplate/AdminTemplate';
import Users from './pages/Admin/Users/Users';
import Courses from './pages/Admin/Courses/Courses';
import AddCourse from './pages/Admin/Courses/AddCourse/AddCourse';
import AddUser from './pages/Admin/Users/AddUser/AddUser';
import EditUser from './pages/Admin/Users/EditUser/EditUser';
import FormEditUser from './components/Modals/FormEditUser';
import DetailUser from './pages/Admin/Users/DetailUser/DetailUser';


export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <FormEditUser />
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
        <AdminTemplate path='/admin/users' exact Component={Users} />
        <AdminTemplate path='/admin/courses' exact Component={Courses} />
        <AdminTemplate path='/admin/courses/addnew' exact Component={AddCourse} />
        <AdminTemplate path='/admin/users/addnew' exact Component={AddUser} />
        <AdminTemplate path='/admin/detail-user/:id' exact Component={DetailUser} />

       



        {/* <Route path='/admin' exact component={AdminTemplate} /> */}



        {/* <Route path='/subnav' exact component={SubNav} /> */}
        {/* <Route path='/test' exact component={Test} />  */}
        {/* <Route path='/abc' exact component={Listcourses} /> */}
       

      

      </Switch>
    </Router>
    
  );
}

export default App;
