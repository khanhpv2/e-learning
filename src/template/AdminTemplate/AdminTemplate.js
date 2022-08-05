import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { Fragment, useState } from "react";
import { NavLink, Redirect, Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ACCESSTOKEN, USER_LOGIN } from "../../utils/config";
import { useEffect } from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown,  message, Space } from 'antd';

export const AdminTemplate = (props) => {
  const { Component, ...propsRoute } = props;
  // const {history} = props
  const history = useHistory();
  console.log('admin',props);
  const { Header, Content, Footer, Sider } = Layout;
  const onClick = ({ key }) => {
    // message.info(`Click on item ${key}`);

    if (key ==1) {
      
      localStorage.removeItem(USER_LOGIN)
      localStorage.removeItem(ACCESSTOKEN)
      history.push('/')
      window.location.reload() 
  };
  if (key ==2) {
    history.push('/profile')
  }
  };
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: 'Đăng xuất',
          key: '1',
      },
      {
          label: 'Đi đến trang cá nhân',
          key: '2',
      },
    
      ]}
    />
  );
  const { SubMenu } = Menu;
  useEffect (()=>{
    window.scrollTo(0,0)
  })
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  // const items = [
  //   getItem("Users", "1", <UserOutlined />),
  //   getItem("Courses", "2", <DesktopOutlined />),
  // ];
  const [collapsed, setCollapsed] = useState(false);
  const { userLogin } = useSelector((state) => state.quanLyLogin);
  console.log("userLogin", userLogin);
  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Redirect to="/" />;
  }

  if (userLogin.maLoaiNguoiDung !== "GV") {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Redirect to="/" />;
  }
  
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        //{path:'/home', component:Home}
        return (
          <div>
            <Layout
              style={{
                minHeight: "100vh",
              }}
            >
              <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
              >
                <div className="logo p-5">
                  <img
                    src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                    alt="..."
                  />
                </div>

                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/users">Người Dùng</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <NavLink to="/admin/courses">Khóa Học</NavLink>
                    {/* <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
                    <Menu.Item key="10" icon={<FileOutlined />}>
                      <NavLink to="/admin/films">Films</NavLink>
                    </Menu.Item>
                    <Menu.Item key="11" icon={<FileOutlined />}>
                      <NavLink to="/admin/films/addnew">Add new</NavLink>
                    </Menu.Item>
                  </SubMenu> */}
                  </Menu.Item>
                </Menu>
              </Sider>

              <Layout className="site-layout">
                <Header className="site-layout-background"
                  style={{
                    padding: 0,
                  }}>
                  
                  <div className="text-right pr-10 pt-1">
                      {userLogin ? (<>  <Dropdown overlay={menu}>
    <a onClick={(e) => ( 
    e.preventDefault() ) }>
      <Space style={{color:'white'}}>
        Hi,{userLogin.hoTen}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown></>) 
                      :  <>' '</> }
                  </div>
                </Header>

                <Content
                  style={{
                    margin: "0 16px",
                  }}
                >
                  <Breadcrumb
                    style={{
                      margin: "16px 0",
                    }}
                  >
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      minHeight: 360,
                    }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer
                  style={{
                    textAlign: "center",
                  }}
                >
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
            </Layout>
          </div>
        );
      }}
    />
  );
};
