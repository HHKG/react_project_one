import React, { Component } from 'react';
import TabChange from '../../components/tabChange';
import { Input, Button, Table, Select, Modal } from 'antd';
import TitleComp from '../../components/titleComp';
import {withRouter} from 'react-router-dom';
const columns_tabPop = [
  {
    title: '序号',
    dataIndex: 'orderNumber',
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '账号',
    dataIndex: 'account',
  },
  {
    title: '所属门店',
    dataIndex: 'belongShop',
  },
  {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <span>
        <a>编辑</a>
      </span>
    ),
  }
];
const data_tabPop = [
  {
    key: '1',
    orderNumber:'1',
    name: '张三',
    account:'123456789',
    belongShop:'南山店'
  },
  {
    key: '2',
    orderNumber:'2',
    name: '李四',
    account:'978456123',
    belongShop:'福田店'
    
  },
  {
    key: '3',
    orderNumber:'3',
    name: '王五',
    account:'975642185',
    belongShop:'宝安店'
  },
];
const columnsMoJing = [
  {
    title: '序号',
    dataIndex: 'orderNumber',
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '账号',
    dataIndex: 'account',
  },
  {
    title: '所属门店',
    dataIndex: 'belongShop',
  },
  {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <span>
        <a>编辑</a>
      </span>
    ),
  }
];
const dataMoJing = [
  {
    key: '1',
    orderNumber:'1',
    name: '张三',
    account:'123456789',
    belongShop:'南山店'
  },
  {
    key: '2',
    orderNumber:'2',
    name: '李四',
    account:'978456123',
    belongShop:'福田店'
    
  },
  {
    key: '3',
    orderNumber:'3',
    name: '王五',
    account:'975642185',
    belongShop:'宝安店'
  },
  {
    key: '4',
    orderNumber:'4',
    name: '顺溜',
    account:'564823174',
    belongShop:'龙岗店'
  },
  {
    key: '5',
    orderNumber:'5',
    name: '田七',
    account:'123487487',
    belongShop:'龙华店'
  },
];

class AccountManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabCategoryArr:['后台账号','魔镜账号'],
      tabCategory:0
    };
  }
  gotoAddAccount=()=>{
    this.props.history.push({pathname:'/Home/AccountManagement/AddAccount'});
    console.log('进入新增后台账号页面！');
  }
  selectItem=(currentSelectIndex)=>{
    this.setState({
      tabCategory:currentSelectIndex
    })
  }
  render() {
    let {tabCategory}=this.state;
    return (
      <React.Fragment>
        <TitleComp title="账号管理" btnTxt='新增后台账号' handleFn={this.gotoAddAccount}></TitleComp>
        <TabChange tabTxtArr={this.state.tabCategoryArr} selectItem={this.selectItem}></TabChange>
        <div className="block_container">
          <div className="home_p_24">
            {
              tabCategory===0?<div>
              <Table columns={columns_tabPop} dataSource={data_tabPop} size="middle" />
              </div>:null
            }
            {
              tabCategory===1?<div>
              <Table columns={columnsMoJing} dataSource={dataMoJing} size="middle" />
            </div>:null
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default withRouter(AccountManagement);