import React, { useEffect } from 'react'
import { Table } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { http } from '../../../utils/config';
import { NavLink } from 'react-router-dom';
import { deleteCourse, getarrCourse, searchCourse } from '../../../redux/actions/QuanLyCourses';
export default function Courses(props) {
    // const {arrCourses} = useSelector ( state => state.coursesReducer)
    const { arrCourses } = useSelector(state => state.coursesReducer);
    const dataCourse = arrCourses.map((course, index) => {
        return {
            key: index,
            tenDanhMuc: `${course.danhMucKhoaHoc.tenDanhMucKhoaHoc}`,
            maDanhMuc: `${course.danhMucKhoaHoc.maDanhMucKhoahoc}`,
            tenKhoaHoc: `${course.tenKhoaHoc}`,
            maKhoaHoc: `${course.maKhoaHoc}`,
            hinhAnh: `${course.hinhAnh}`
        }
    })
    // console.log('dataCourse', dataCourse)
    const columns = [
        {
            title: 'Tên Khoá Học',
            dataIndex: 'tenKhoaHoc',


            sorter: (a, b) => {
                let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
                let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
                if (tenKhoaHocA > tenKhoaHocB) {
                    return 1;
                }
                return -1
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Mã Khoá Học',
            dataIndex: 'maKhoaHoc',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            render: (text, course, index) => {
                return <>
                    <img src={course.hinhAnh} width={50} height={50} onError={(e) => {
                        e.target.onError = null; e.target.src = `https:picsum.photos/id/${index}/50/50`
                    }} />
                </>
            }
        },
        {
            title: 'Danh Mục Khoá Học',
            dataIndex: 'maDanhMuc',
            // render: (text, course, index) => {
            //     return <>
            //         <p>{course.danhMucKhoaHoc.maDanhMucKhoahoc} </p>
            //     </>
            // },
            filters: [
                {
                    text: 'Lập Trình Front End',
                    value: 'FrontEnd'
                },
                {
                    text: 'Lập trình Backend',
                    value: 'Backend'
                },
                {
                    text: 'Lập trình Full Stack',
                    value: 'FullStack'
                },
                {
                    text: 'Tư duy lập trình',
                    value: 'TuDuy'
                },
                {
                    text: 'Lập trình di động',
                    value: 'DiDong'
                }
            ],
            onFilter: (value, record) => record.maDanhMuc.indexOf(value) === 0,
        },
        {
            title: '',
            dataIndex: '',
            render: (text, course) => {
                return <>
                    <NavLink key={1} className='mr-2 text-2xl p-2' to={`/admin/courses/edit/${course.maKhoaHoc}`}><EditOutlined style={{ color: 'blue' }} /></NavLink>
                    <button key={2} className='text-2xl' onClick={() => {
                        if (window.confirm('Bạn có chắc muốn xóa tài khoản' + course.maKhoaHoc)) {
                            dispatch(deleteCourse(course.maKhoaHoc))
                        }
                    }}><DeleteOutlined style={{ color: 'red' }} /></button>

                </>
            }
        },
    ];
    // console.log('arrCourses', arrCourses)

    const data = dataCourse

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const onSearch = (value) => {
        console.log(value)
        // dispatch(searchCourse(value))
        const action = {
            type: 'SEARCH_COURSES',
            searchCourse: value
        }
        dispatch(action)
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getarrCourse())
    }, [])
    // console.log('props',props)
    const { history } = props
    return (
        <div>
            <h3 style={{ fontSize: '30px' }}>Quản lý khóa học</h3>
            <Button type='primary' className='mb-2' style={{ fontSize: '15px' }} onClick={() => {
                history.push('/admin/courses/addnew')
            }}>Thêm khóa học</Button>
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
