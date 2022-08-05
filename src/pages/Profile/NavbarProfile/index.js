import React from "react";
import { Link, useLocation } from "react-router-dom";
import { USER_LOGIN } from "../../../utils/config";
import styles from "./styles.module.css";
export default function NavbarProfile(props) {
  const location = useLocation();
  // console.log("location", location);
let a = localStorage.getItem(USER_LOGIN);
let b = JSON.parse(a)
console.log('b',b);

  const arrListMenu = [
    {
      name: "Thông Tin Tài Khoản",
      path: "/profile/info-course",
    },
    {
      name: "Khóa Học Ghi danh",
      path: "/profile/attendance",
    },
    // {
    //   name: "Khóa Học Của Tôi",
    //   path: "/profile/mycourse",
    // },
  ];

  return (
    <div className="navbar-profile h-full text-center p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div
        className="image-avatar text-center rounded-full text-center "
        
      >
        <img src="http://bootdey.com/img/Content/User_for_snippets.png" className="rounded-full mx-auto" style={{width:100,height:100}} />
      </div>
      <div className="title pb-3" style={{fontSize:'25px'}}>{b.hoTen}</div>
      <div className="menu-profile">
        <ul>
          {arrListMenu.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                style={{color:'black'}}
                className={`${
                  item.path === location.pathname
                    ? styles.activeMenu
                    : styles.unactiveMenu
                  
                }`}
              >
                <li style= {{padding:'10px 10px'}}>{item.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>

    </div>
  );
}
