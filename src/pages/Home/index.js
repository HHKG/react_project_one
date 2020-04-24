import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { BankOutlined,RobotOutlined,ToolOutlined, ShopOutlined, FundProjectionScreenOutlined, MacCommandOutlined, UserOutlined,ProjectOutlined,BulbOutlined,SecurityScanOutlined,TeamOutlined,SettingOutlined} from '@ant-design/icons';
import homeStyle from './index.css';
import MRouter from '../../routes';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menuItem: [{ title: '首页概况', icon: <BankOutlined />,url:'/Home/HomePage' }, { title: '店铺管理', icon: <ShopOutlined />,url:'/Home/ShopManagement' }, { title: '用户管理', icon: <UserOutlined/>,url:'/Home/UserManagement' },
      { title: '检测数据', icon: <FundProjectionScreenOutlined />,url:'/Home/TestData' }, { title: '产品管理', icon: <MacCommandOutlined />,url:'/Home/Product' }, { title: '项目管理', icon: <ProjectOutlined />,url:'/Home/ProjectManagement' }, { title: '解决方案', icon: <BulbOutlined />,url:'/Home/Solution' },
      { title: '账号管理', icon: <TeamOutlined />,url:'/Home/AccountManagement' }, { title: '内容设置', icon: <SettingOutlined />,url:'/Home/ContentSetting' }, { title: '反馈内容', icon: <RobotOutlined />,url:'/Home/Feedback' }, { title: '线上检测', icon: <SecurityScanOutlined />,url:'/Home/OnlineTest' },
      { title: '系统管理', icon: <ToolOutlined />,url:'/Home/SystemManagement' }
      ],
      breadcrumb:[],
      defaultUrl:'/Home/HomePage',
      currentIndex:0
    };
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  selectMenu=(index)=>{
    let {menuItem}=this.state;
    let breadcrumb=menuItem[index].url.split('/').filter(x=>{
      return x!=='';
    });

    this.props.history.push({
      pathname:menuItem[index].url
    })
    this.setState({
      breadcrumb
    })
  }

  componentDidMount=()=>{
    let {currentIndex,menuItem}=this.state;
    let currentUrl=this.props.location.pathname;
    menuItem.forEach((val,index)=>{
      if(val.url==currentUrl) currentIndex=index;
    })
    this.setState({
      defaultUrl:currentUrl,
      currentIndex
    })
  }
  render() {
    let { menuItem,breadcrumb,defaultUrl,currentIndex} = this.state;
    let breadCrumbView=breadcrumb.length>0?breadcrumb.map((val,index)=>{
      return(<Breadcrumb.Item key={index}>{val}</Breadcrumb.Item>);
    }):null;
    let menuItems = menuItem.map((item,index)=> {
      return (
        <Menu.Item key={index} onClick={this.selectMenu.bind(this,index)}>
          {item.icon}
          <span>{item.title}</span>
        </Menu.Item>
      );
    })
    console.log('currentIndex',currentIndex);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className={homeStyle.logo} />
          <Menu theme="dark" defaultSelectedKeys={[`${currentIndex}`]} mode="inline">
            {/* 左侧菜单 */}
            {menuItems}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={homeStyle.site_layout_background} style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {breadCrumbView}
            </Breadcrumb>
            <div className={homeStyle.site_layout_background} style={{ padding: 24, minHeight: 360 }}>
              {/* 路由展示的内容 */}
              <MRouter defaultUrl={defaultUrl}></MRouter>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Home);