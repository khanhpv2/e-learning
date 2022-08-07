import React, { useMemo, useState } from 'react'
import { Button, Checkbox, Divider, Tabs } from 'antd';
import ManageCourseUser from './ManageCourseUser/ManageCourseUser';
import CoursesApproval from './ManageCourseUser/CoursesApproval';
export default function DetailUser(props) {
    //    const [key,setKey] = useState('a'); 

    // const changeMenu = (value) => {
    //     console.log('value', value.target.value)
    //     setKey(value.target.value);
    // }
    // console.log('props',props.match.params.id);
    let param = props.match.params.id
    const { TabPane } = Tabs;
    const CheckboxGroup = Checkbox.Group;
    const operations = <Button></Button>;
    const OperationsSlot = {
        left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
        right: <Button>Right Extra Action</Button>,
    };
    const options = ['left', 'right'];
    const App = () => {
        const [position, setPosition] = useState(['left', 'right']);
        const slot = useMemo(() => {
            if (position.length === 0) return null;
            return position.reduce(
                (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
                {},
            );
        }, [position]);
    }
    return (
        <div>
            <h1>QUẢN LÝ KHÓA HỌC CHO USER</h1>
            {/* <div className='flex justify-between'>
                <button value='a' onClick={changeMenu}>DANH SÁCH KHÓA HỌC ĐANG CHỜ GHI DANH</button>
                <button value='b' onClick={changeMenu}>DANH SÁCH KHÓA HỌC ĐÃ GHI DANH</button>
            </div> */}
            <Tabs tabBarExtraContent={operations} centered>
                <TabPane tab="DANH SÁCH KHÓA HỌC ĐANG CHỜ GHI DANH" key="1">
                    <ManageCourseUser param={param} />
                </TabPane>
                <TabPane tab="DANH SÁCH KHÓA HỌC ĐÃ GHI DANH" key="2">
                    <CoursesApproval param={param} />
                </TabPane>
                
            </Tabs>
        </div>
    )
}
