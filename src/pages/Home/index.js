import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import emitter from '../../util/event';
import { BankOutlined, RobotOutlined, ToolOutlined, ShopOutlined, FundProjectionScreenOutlined, MacCommandOutlined, UserOutlined, ProjectOutlined, BulbOutlined, SecurityScanOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import homeStyle from './index.css';
import MRouter from '../../routes';
import queryString from 'query-string';

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, //antd框架自带，控制左边菜单的展示和收起
      menuItem: [{ title: '首页概况', icon: <BankOutlined />, url: '/Home/HomePage' }, { title: '店铺管理', icon: <ShopOutlined />, url: '/Home/ShopManagement' }, { title: '用户管理', icon: <UserOutlined />, url: '/Home/UserManagement' },
      { title: '检测数据', icon: <FundProjectionScreenOutlined />, url: '/Home/TestData' }, { title: '产品管理', icon: <MacCommandOutlined />, url: '/Home/Product' }, { title: '项目管理', icon: <ProjectOutlined />, url: '/Home/ProjectManagement' }, { title: '解决方案', icon: <BulbOutlined />, url: '/Home/Solution' },
      { title: '账号管理', icon: <TeamOutlined />, url: '/Home/AccountManagement' }, { title: '内容设置', icon: <SettingOutlined />, url: '/Home/ContentSetting' }, { title: '反馈内容', icon: <RobotOutlined />, url: '/Home/Feedback' }, { title: '线上检测', icon: <SecurityScanOutlined />, url: '/Home/OnlineTest' },
      { title: '系统管理', icon: <ToolOutlined />, url: '/Home/SystemManagement' }
      ],                //自定义左边菜单数据
      breadcrumb: [],     //面包屑数组
      defaultUrl: '/Home/HomePage',
      currentIndex: 0,      //当前索引值，用于处理左边菜单
      userName: ''
    };
  }
  // 控制左边菜单的展开收起
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  // 选择菜单
  selectMenu = (index) => {
    let { menuItem } = this.state;
    let breadcrumb = ['首页'];
    breadcrumb.push(menuItem[index].title);
    this.props.history.push({
      pathname: menuItem[index].url,
      search:queryString.stringify({'getChildrenBreadcrumb':this.getChildrenBreadcrumb})
    })
    this.setState({
      breadcrumb,
      currentIndex: index
    })
  }
  componentDidMount = () => {
    let opts = this.props.location.search ? queryString.parse(this.props.location.search) : {};
    let userName = opts.phone;
    localStorage.setItem('userName', userName);
    // let userName = this.props.location.query.name
    // 路由切换，对应的内容和高亮菜单也随着变化而变化
    this.handleRouteContact();
    this.setState({
      userName
    })
  }
  componentWillUnmount = () => {
    emitter.removeListener(this.eventEmitter);
  }

  componentWillReceiveProps = () => {
    //当路由回滚时动态切换页面内容对应的高亮菜单
    this.handleRouteContact();
  }

  // 处理路由、左边菜单栏和组件内容展示的关系
  handleRouteContact = () => {
    let { currentIndex, menuItem } = this.state;
    // 获取当前路由
    let currentUrl = this.props.history.location.pathname;

    menuItem.forEach((val, index) => {
      // 根据路由地址，获取当前菜单所在的索引值
      if (val.url == currentUrl) currentIndex = index;
    })
    // 定义面包屑数组，默认首个元素是首页
    let breadcrumb = ['首页'];
    // 把对应索引中数组元素的title放在面包屑数组中
    breadcrumb.push(menuItem[currentIndex].title);
    //  获取存储好的用户名
    let userName = localStorage.getItem('userName');
    this.setState({
      defaultUrl: currentUrl,
      currentIndex,
      breadcrumb,
      userName
    })
  }
  //获取子页面的面包屑
  getChildrenBreadcrumb = () => {
    // 实现无嵌套关系的组件通讯，定义一个自定义事件
    this.eventEmitter = emitter.addListener('getChildrenPageTxt', (txt) => {
      let { breadcrumb } = this.state;
      breadcrumb.push(txt);
      this.setState({
        breadcrumb
      })
    })
  }

  render() {
    let { menuItem, breadcrumb, defaultUrl, currentIndex, userName } = this.state;

    let breadCrumbView = breadcrumb.length > 0 ? breadcrumb.map((val, index) => {
      return (<Breadcrumb.Item key={index}>{val}</Breadcrumb.Item>);
    }) : null;

    let menuItems = menuItem.map((item, index) => {
      return (
        <Menu.Item key={index} onClick={this.selectMenu.bind(this, index)}>
          {item.icon}
          <span>{item.title}</span>
        </Menu.Item>
      );
    })
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className={homeStyle.logo} />
          <Menu theme="dark" selectedKeys={[`${currentIndex}`]} mode="inline">
            {/* 左侧菜单 */}
            {menuItems}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={homeStyle.site_layout_background, homeStyle.header_bg} style={{ padding: 0 }}>
            <div className={homeStyle.content}>
              <h3 className="font_c_w">黄华康个人开发后台管理系统</h3>
              <div>
                <span className="font_c_999">欢迎您</span>
                <span className="font_c_w m-l-r-15 split_line_vertical">{userName}</span>
                <span className="font_c_999">安全退出</span>
              </div>
            </div>
          </Header>
          <div className={homeStyle.site_layout_background}>
            <Breadcrumb style={{ margin: '16px' }}>
              {breadCrumbView}
            </Breadcrumb>
          </div>
          <Content>
            <div style={{ minHeight: 360 }}>
              <div>
                {/* 路由展示的内容 */}
                <MRouter  defaultUrl={defaultUrl}></MRouter>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>KG_verson_0.1 ©2020 Created by 黄华康</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Home);