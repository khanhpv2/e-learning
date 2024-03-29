import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { http } from '../../utils/config';
import Course from '../../components/Course/Course';

export default function MaDanhMuc(props) {

    const { arrDanhMuc } = useSelector(state => state.coursesReducer);
    // console.log('props',props);
    // const {tenDanhMuc = {props.tenDanhMuc}
    const [value, setValue] = useState();
    const dispatch = useDispatch();
    // console.log('params',props.match.params.maDanhMuc)
    useEffect(() => {
        if (props && props.match && props.match.params && props.match.params.maDanhMuc) {
            let params = props.match.params.maDanhMuc
            dispatch(async (dispatch) => {
                try {
                    let result = await http.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc` + `?maDanhMuc=` + params);

                    const action = {
                        type: 'GET_DANH_MUC',
                        arrDanhMuc: result.data
                    };
                    // console.log('string',result.data)
                    if (result) {
                        setValue(result.data);
                    }
                    console.log('value', value)
                    dispatch(action)
                } catch (err) {
                    console.log(err)
                }
            })
        }
    }, [props])
    // console.log('value',value)
    // console.log('arrDanhMuc',arrDanhMuc)

    const renderDanhMuc = () => {
        return arrDanhMuc.map((course, index) => {
            // console.log({course})
            return <Course course={course} index={index} />
        })
    }
    return (

        <div >
            {/* grid grid-cols-4 container mx-auto lg:flex-nowrap */}
            <div className="">
                <h1></h1>
                <div className='flex flex-wrap border border-gray-300 p-10'>
                    {renderDanhMuc()}
                </div>
            </div>
        </div>
    )
}
