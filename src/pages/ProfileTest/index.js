import React, { useState } from 'react'

import { Route, Switch, useLocation } from "react-router-dom";
import InfoProfile from '../Profile/Main/InfoProfile';

export default function ProfileTest(props) {
  console.log('props',props)
  const location =  useLocation();
  console.log('location',location)

   const [key,setKey] = useState('a'); 
   const arrdata = [
        {
            name:'navbar',
            key: 1,
            type: 'a',
        },
        {
            name:'navbar',
            key: 1,
            type: 'b',
        }
   ]; 
  const changeMenu =(value)=> {
    console.log('value',value.target.value)
    setKey(value.target.value);
  }

  return (
    <div>

      <div className='container-profile'>
        <div className="box-profile flex	">
          <div className="profile-left w-1/4">
            {/* {
                arrdata.map((obj,index)=>{
                    return (
                        <button onClick={()=> {
                            changeMenu(obj.type)
                        }}>{obj.name}</button>
                    )
                })
            } */}
                <button value='a' onClick={changeMenu}>abcd</button>  <br></br>
                <button value='b' onClick={changeMenu}>abcd2</button>

         </div>
          <div className="profile-right w-3/4">
            {
                key == 'a' && (
                    <div>
                        {/* <InfoProfile /> */}12312312321
                    </div>
                )  
            }

            {
                key == 'b' && (
                    <div>
                        abcddd
                    </div>
                )  
            }




          </div>
        </div>
      </div>


    </div>
  )
}
