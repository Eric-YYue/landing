import { Layout, Menu, Avatar, Space, Divider, Col, Row } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import './index.css'
// import { Dimensions } from 'react-native';

const { Header, Content } = Layout;

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const width_win = document.body.clientWidth
const height_win = document.body.clientHeight


class Frame2 extends React.Component {
  render() {
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
                <Menu.Item key={1}> Landing Page </Menu.Item>
                <Menu.Item key={2}> Admin Edit </Menu.Item>
              </Menu>
            </Col>

            <Col flex={1}>
              <span className="avatar place">
                <Avatar size="large" icon={<UserOutlined />} />
              </span>
            </Col>
          </Row>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {this.props.children}
          </div>
        </Content>
      </Layout>
    )
  }
}

export default Frame2