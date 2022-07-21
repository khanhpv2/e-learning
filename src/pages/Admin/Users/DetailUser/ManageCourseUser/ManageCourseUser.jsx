import React from 'react'
import { Table } from 'antd';
import { CheckCircleOutlined, CloseOutlined } from '@ant-design/icons';
export default function ManageCourseUser(props) {
    const columns = [
        {
          title: 'STT',
          dataIndex: 'name',
        },
        {
          title: 'MÃ KHÓA HỌC',
          dataIndex: 'age',
        },
        {
          title: 'TÊN KHÓA HỌC',
          dataIndex: 'address',
        },
        {
            title: '',
            dataIndex: 'address',
            render: (text, user, index) => {
                return <>
                    <button style={{color:'green'}} className='mr-2 text-2xl p-2'><CheckCircleOutlined /></button>
                    <button style={{color:'red'}} className='text-2xl'><CloseOutlined /></button>
                </>
              },
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 32,
          address: 'London No. 2 Lake Park',
        },
      ];
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}
