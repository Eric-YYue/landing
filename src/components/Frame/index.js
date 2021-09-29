import { Layout, Menu, Avatar, Space, Divider, Col, Row, Drawer, Form, Button, Input, Select, DatePicker, Dropdown } from 'antd';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import './index.css'
import { accountRoutes, mainRoutes, adminRoutes } from '../../routes';
import MenuItem from 'antd/lib/menu/MenuItem';


// import { Dimensions } from 'react-native';

// const [visible, setVisible] = useState(false);
// const [showDrawer, setShowDrawer] = useState(true);
// const [onClose, setOnClose] = useState(false);

const routesAdmin = adminRoutes.filter(routes => routes.isShow);
const routesDashboard = mainRoutes.filter(routes => routes.isShow);

// const [loginVisible, setLoginVisible] = useState(true);
// const [logoutVisible, setLogoutVisible] = useState(true);

// useLayoutEffect(() => {
//   if (!isLogined()) {
//       setLogoutVisible('none')
//   } else {
//       setLoginVisible('none')
//   }
//   // checkUserRole();
// }, [])



const { Header, Content } = Layout;

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const width_win = document.body.clientWidth
const height_win = document.body.clientHeight

// const { Option } = Select;

// const state = { visible: false };

const avatarIcon = (username) => {
  return username[0]
}

export function isLogined() {
  if (localStorage.getItem("AUTHORIZATION")) {
    return true;
  }
  return false;
}

export function clearToken() {
  localStorage.clear()
}

function Frame(props) {
  const onClick = ({ key }) => {
    if (key === 'logout') {
      clearToken();
      props.history.push('/login');
    } else if (key === 'login') {
      props.history.push('/login');
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="login">Login</Menu.Item>
      <Menu.Item key="logout" >Logout</Menu.Item>
    </Menu>
  );
  // render() {

    return (
      <Layout className="layout">
        <Header style={{
          background: "dark",
          paddingLeft: 0,
          paddingTop: 0,


          width: '100%',
          // position: 'fixed',
          // top: 0,
        }}>
          <Row>
            <Col flex={4}>
              <img
                src={'../page_logo.jpg'}
                // height={height_win/15}
                // width={document.body.clientWidth / 14}
                align="start"
              />

            </Col>
            <Col flex={50}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ padding: '0 50px' }}>
                {/* {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })} */}
                {routesDashboard.map(routesDashboard => {
                  return (
                    <MenuItem key={routesDashboard.path} onClick={p => props.history.push(p.key)}>
                      {routesDashboard.title}
                    </MenuItem>
                  )
                })}

                {routesAdmin.map(routesAdmin => {
                  return (
                    <MenuItem key={routesAdmin.path} onClick={p => props.history.push(p.key)}>
                      {routesAdmin.title}
                    </MenuItem>
                  )
                })}


              </Menu>
            </Col>

            <Col flex={1}>
              <Dropdown overlay={menu} trigger={['click']}>

                <span className="avatar place">
                  <Avatar
                    size='large'
                    onClick={e => e.preventDefault()}
                    style={{ color: '#00000F' }}>
                    {isLogined() ? (avatarIcon('Admin')) : 'Guest'}
                  </Avatar>





                  {/* 
                <Drawer
                  title="Create a new account"
                  width={720}
                  onClose={onClose}
                  visible={state.visible}
                  bodyStyle={{ paddingBottom: 80 }}
                  extra={
                    <Space>
                      <Button onClick={onClose}>Cancel</Button>
                      <Button onClick={onClose} type="primary">
                        Submit
                      </Button>
                    </Space>
                  }
                >
                  <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="name"
                          label="Name"
                          rules={[{ required: true, message: 'Please enter user name' }]}
                        >
                          <Input placeholder="Please enter user name" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="url"
                          label="Url"
                          rules={[{ required: true, message: 'Please enter url' }]}
                        >
                          <Input
                            style={{ width: '100%' }}
                            addonBefore="http://"
                            addonAfter=".com"
                            placeholder="Please enter url"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="owner"
                          label="Owner"
                          rules={[{ required: true, message: 'Please select an owner' }]}
                        >
                          <Select placeholder="Please select an owner">
                            <Option value="xiao">Xiaoxiao Fu</Option>
                            <Option value="mao">Maomao Zhou</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="type"
                          label="Type"
                          rules={[{ required: true, message: 'Please choose the type' }]}
                        >
                          <Select placeholder="Please choose the type">
                            <Option value="private">Private</Option>
                            <Option value="public">Public</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="approver"
                          label="Approver"
                          rules={[{ required: true, message: 'Please choose the approver' }]}
                        >
                          <Select placeholder="Please choose the approver">
                            <Option value="jack">Jack Ma</Option>
                            <Option value="tom">Tom Liu</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="dateTime"
                          label="DateTime"
                          rules={[{ required: true, message: 'Please choose the dateTime' }]}
                        >
                          <DatePicker.RangePicker
                            style={{ width: '100%' }}
                            getPopupContainer={trigger => trigger.parentElement}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item
                          name="description"
                          label="Description"
                          rules={[
                            {
                              required: true,
                              message: 'please enter url description',
                            },
                          ]}
                        >
                          <Input.TextArea rows={4} placeholder="please enter url description" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Drawer> */}
                </span>
              </Dropdown>

            </Col>
          </Row>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
      </Layout>
    )
  }
  // }

  export default withRouter(Frame)