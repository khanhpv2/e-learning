import { DeleteOutlined, EditOutlined,ProfileOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FormEditUser from '../../../components/Modals/FormEditUser';
import { deleteAccountUser, getArrInfoUser, searchInfoUsers } from '../../../redux/actions/QuanLyUser';
import { http } from '../../../utils/config';


export default function Users(props) {
  
  

  const { arrUsers } = useSelector(state => state.usersReducer);
  console.log('arrUsers',arrUsers);
  const dataArrUser = arrUsers.map ((user,index)=>{
      return {
        key : index,
        taiKhoan: `${user.taiKhoan}`,
        hoTen: `${user.hoTen}`,
        email: `${user.email}`,
        soDt: `${user.soDt}`,
        maLoaiNguoiDung: `${user.maLoaiNguoiDung}`
      }
  })
  console.log('dataArrUser',dataArrUser)
  // console.log('propuser',props);
  const data = dataArrUser
  const columns = [
    {
      title: 'STT',
      dataIndex: 'key',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.key - b.key,

      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Họ và tên',
      dataIndex: 'hoTen',
      // defaultSortOrder: 'descend',
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
            return 1;
        }
        return -1
    },
    sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'SDT',
      dataIndex: 'soDt',
    },
    {
      title: 'Loại Người Dùng',
      dataIndex: 'maLoaiNguoiDung',
      filters: [
        {
          text: 'Học Viên',
          value: 'HV',
        },
        {
          text: 'Giáo Viên',
          value: 'GV',
        },
      ],
      onFilter: (value, record) => record.maLoaiNguoiDung.indexOf(value) === 0,
    },
    {
      title: '',
      dataIndex: '',
      render: (text, account) => {

        return <>
          <NavLink to={`/admin/detail-user/${account.taiKhoan}`} key={0} className='text-2xl p-2' ><ProfileOutlined /></NavLink>
          <button key={1} className='mr-2 text-2xl p-2' onClick={()=>{
               const action = {
                type: 'GET_STATE_POPUP_USER',
                stateEditUser: true,
                infoEditUser: account
            };
            dispatch(action)
          }}>
            <EditOutlined style={{ color: 'blue' }} /></button>
          <button key={2} className='text-2xl' onClick={() => {
            if (window.confirm('Bạn có chắc muốn xóa tài khoản' +' '+ account.taiKhoan)) {
              dispatch(deleteAccountUser(account.taiKhoan))
            }
          }}><DeleteOutlined style={{ color: 'red' }} /></button>
          


        </>
      }
    },
  ];


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArrInfoUser())
  }, [])
  const { history } = props
  const onSearch = (value) => {
    // console.log(value)
    dispatch(searchInfoUsers(value))
  }

  return (
    <div>
      <h3 style={{fontSize:'30px'}}>Quản Lý Người Dùng</h3>
      
    
      <Button type='primary' className='mb-2' style={{fontSize:'15px'}} onClick={() => {
        history.push('/admin/users/addnew')
      }}>Thêm Người Dùng</Button>
      <Search
                placeholder="Tìm kiếm"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                className='mb-5'
            />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}
