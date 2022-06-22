import axios from 'axios';
import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getMenu } from '../../../redux/actions/subNavAction';
import { http, TOKEN_CYBERSOFT } from '../../../utils/config';
import style from './SubNav.module.css'
export default function SubNav(props) {

  const {arrMenu} = useSelector( state => state.subNavReducer );

  const dispatch = useDispatch();  

 
  // useEffect(async ()=> {
  //   const action = getMenu;
  //   dispatch(action);
  // },[])

  useEffect (async ()=>{
    dispatch (async (dispatch) => {
      try {
        let result = await http.get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
        const action = {
          type:'GET_SUB_MENU',
          arrMenu: result.data
        };
        console.log(result.data)
        dispatch(action)
      } catch (err) {
        console.log(err)
      }
    })
  },[])

  console.log('arrMenu',arrMenu)

  const renderMenu = () => {
      return arrMenu.map((item,index)=>{
        return  <>
        <a href="#" key={index} className={style.subNav} >{item.tenDanhMuc}</a>
        </>
      })
  }
  return (
    <div>
      <div className={style.abcd}>
       {/* <a href="" className='red'>abcd</a>
       <a href="" className='red'>adsd</a>
       <a href="" className='red'>sdsds</a>
       <a href="" className='red'>fdsfsdf</a>
       <a href="" className='red'>fsdafsdf</a> */}
       {renderMenu()}
    </div>
      </div>
  )
}
