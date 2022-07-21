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
  const data = arrUsers
  const columns = [
    {
      title: 'STT',
      dataIndex: '',
      render: (text, user, index) => {
        return <>
          {Number(index)}
        </>
      },
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.index - b.index,

      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
    {
      title: 'Tai Khoan',
      dataIndex: 'taiKhoan',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Ho va Ten',
      dataIndex: 'hoTen',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
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
      title: 'Loai Nguoi Dung',
      dataIndex: 'maLoaiNguoiDung',
      filters: [
        {
          text: 'Hoc Vien',
          value: 'HV',
        },
        {
          text: 'Giao Vien',
          value: 'GV',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: '',
      dataIndex: 'taiKhoan',
      render: (text, account) => {

        return <>
        {/* <FormEditUser account = {account} /> */}
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
            if (window.confirm('Ban co chac muon xoa tai khoan' + account.taiKhoan)) {
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
    console.log(value)
    dispatch(searchInfoUsers(value))
  }

  return (
    <div>
      <h3>Quan Ly Nguoi Dung</h3>
      
    
      <Button type='primary' className='mb-2' onClick={() => {
        history.push('/admin/users/addnew')
      }}>Them Nguoi Dung</Button>
      <Search
                placeholder="input search text"
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
