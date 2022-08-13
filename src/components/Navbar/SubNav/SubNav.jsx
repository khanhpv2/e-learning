import axios from 'axios';
import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMenu } from '../../../redux/actions/subNavAction';
import { http, TOKEN_CYBERSOFT } from '../../../utils/config';
import style from './SubNav.module.css'
export default function SubNav(props) {

  const {arrMenu} = useSelector( state => state.subNavReducer );
  // console.log('arrMenu',arrMenu);

  const dispatch = useDispatch();  

 
  // useEffect(async ()=> {
  //   const action = getMenu;
  //   dispatch(action);
  // },[])

  useEffect ( ()=>{
    dispatch (getMenu())
  },[])

  // console.log('arrMenu',arrMenu)

  const renderMenu = () => {
      return arrMenu.map((item,index)=>{
        // console.log('item',item);
        return  <div key={index} tenDanhMuc={item.tenDanhMuc}>
        <NavLink to={`/list-danhmuc/${item.maDanhMuc}`} className={style.subNav} >{item.tenDanhMuc} </NavLink>
        </div>
      })
  }
  return (
    <div>
      <div className={style.abcd}>
       {renderMenu()}
    </div>
      </div>
  )
}
