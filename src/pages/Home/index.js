import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined, } from '@ant-design/icons';
import homeStyle from './index.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menuItem: [{ title: '首页概况', icon: '' }, { title: '店铺管理', icon: '' }, { title: '用户管理', icon: '' },
      { title: '检测数据', icon: '' }, { title: '产品管理', icon: '' }, { title: '项目管理', icon: '' }, { title: '解决方案', icon: '' },
      { title: '账号管理', icon: '' }, { title: '内容设置', icon: '' }, { title: '反馈内容', icon: '' }, { title: '线上检测', icon: '' },
      { title: '系统管理', icon: '' }
      ]
    };
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    let { menuItem } = this.state;
    let menuItems = menuItem.map((item,index)=> {
      return (
        <Menu.Item key={`menuItem-${index}`}>
          <PieChartOutlined />
          <span>{item.title}</span>
        </Menu.Item>
      );
    })
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className={homeStyle.logo} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {/* 左侧菜单 */}
            {menuItems}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={homeStyle.site_layout_background} style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className={homeStyle.site_layout_background} style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;