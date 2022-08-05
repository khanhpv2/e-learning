import React from 'react'
import InfoProfile from './Main/InfoProfile';
import NavbarProfile from './NavbarProfile';
import { Route, Switch, useLocation } from "react-router-dom";
import Attendance from './Main/Attendance';
import MyCourse from './Main/MyCourse';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
export default function Profile(props) {
  console.log('props',props);
  const location =  useLocation();
  const routes = [
    {
      path: '/profile/info-course',
      exact: true,
      name: 'InfoProfile',
      component: InfoProfile,
    },
    {
      path: '/profile/attendance',
      exact: true,
      name: 'Attendance',
      component: Attendance,
    },
    // {
    //   path: '/profile/mycourse',
    //   exact: true,
    //   name: 'MyCourse',
    //   component: MyCourse,
    // },
  ];

  

  return (
    <div>
      <Navbar />
      <div className='container-profile '>
        <div className="box-profile flex py-10 items-stretch" style={{maxWidth:'1000px',margin:'auto'}}>
          <div className="profile-left w-1/4  pr-3">
                {/* self-stretch */}
            <NavbarProfile />
          </div>
          <div className="profile-right w-3/4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" style={{minHeight:'282px'}}>
        
            <Switch>
              {routes.map((route, idx) => {
                console.log(route)
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                );
              })}
            </Switch>

          </div>

        </div>
      </div>
      <Footer />
      


    </div>
  )
}
