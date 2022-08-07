import React, { useEffect } from 'react'
import { Table } from 'antd';
import { CheckCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { http } from '../../../../../utils/config';
import { useDispatch, useSelector } from 'react-redux';
import { coursesApproval, coursesApproved, coursesWaitingApproval } from '../../../../../redux/actions/QuanLyUser';
import { Button, Modal } from 'antd';
export default function CoursesApproval(props) {
    const {param} = props
    const {arrCoursesApproved} = useSelector( state => state.quanlyProfile)
    
    const countDown = () => {
        let secondsToGo = 2;
        const modal = Modal.success({
          title: 'Ghi Danh Thành Công',
          content: `This modal will be destroyed after ${secondsToGo} second.`,
        });
        const timer = setInterval(() => {
          secondsToGo -= 1;
          modal.update({
            content: `This modal will be destroyed after ${secondsToGo} second.`,
          });
        }, 1000);
        setTimeout(() => {
          clearInterval(timer);
          modal.destroy();
        }, secondsToGo * 1000);
      };
    // console.log('arrCourseWaitingApproval',arrCourseWaitingApproval)
    // console.log('param',param)
    const value = {
        taiKhoan : param
    }
    // console.log(value)  
    const dispatch = useDispatch();
    useEffect (  ()=>{ 
        dispatch(coursesApproved(value))
      },[])
     
    const columns = [
        {
          title: 'STT',
          dataIndex: '',
          render : (text,course,index) => {
            return <>
             {index}
            </>
          }
        },
        {
          title: 'MÃ KHÓA HỌC',
          dataIndex: '',
          render : (text,course,index) => {
            return <>
             {course.maKhoaHoc}
            </>
          }
        },
        {
          title: 'TÊN KHÓA HỌC',
          dataIndex: '',
          render : (text,course,index) => {
            return <>
             {course.tenKhoaHoc}
             
            </>
          }
        },
      ];


      
      const data = arrCoursesApproved
      
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}
