import { Layout, Menu, Space, Divider, Typography, Avatar, Dropdown } from 'antd';
import React from 'react';
import { DesktopOutlined, UserOutlined } from '@ant-design/icons';
import './index.css'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="header" style={{ background: "white", paddingLeft: 20 }}>
                    <div>
                        <a href='/#/dashboard'>
                            <Space split={<Divider type="vertical" />}>
                                <img className={['centered']}
                                    src={'../page_logo.jpg'}
                                    width={document.body.clientWidth / 13}
                                    align="start"
                                />
                                <Title level={2} ellipsis={true} > RoadMap </Title>
                            </Space>
                        </a>
                    </div>

                    <span className="avatar place">
                        <Avatar size="large" icon={<UserOutlined />} />

                    </span>
                </Header>
                <Layout className="site-layout">
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<DesktopOutlined />}>
                                Landing Page
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />}>
                                Admin Edit
                            </Menu.Item>
                            {/* <SubMenu key="sub1" icon={<DesktopOutlined />} title="Landing Page">
                                <Menu.Item key="1"> New Web </Menu.Item>
                                <Menu.Item key="2"> Delete </Menu.Item>
                            </SubMenu> */}
                        </Menu>
                    </Sider>

                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout >
        );
    }
}

export default SiderDemo