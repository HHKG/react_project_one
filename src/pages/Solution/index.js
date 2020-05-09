import React, { Component } from 'react';
import TabChange from '../../components/tabChange';
import TitleComp from '../../components/titleComp';
import styles from './solution.css';
import {Table} from 'antd';

const data = [{
  key: '1',
  orderNumber: '1',
  name: '胡彦斌',
  shopName: '南山店',
  phoneNum: 12345678921,
  address: '西湖区湖底公园1号',
  createTime: '2020-04-30 9:56:00'
}, {
  key: '2',
  orderNumber: '2',
  name: '胡彦祖',
  shopName: '福田店',
  phoneNum: 12345678921,
  address: '西湖区湖底公园1号',
  createTime: '2020-04-30 9:56:00'
}, {
  key: '3',
  orderNumber: '3',
  name: '李大嘴',
  shopName: '宝安店',
  phoneNum: 12345678921,
  address: '西湖区湖底公园1号',
  createTime: '2020-04-30 9:56:00'
}];
const columns = [{
  title: '序号',
  dataIndex: 'orderNumber',
  key: 'orderNumber',
},
{
  title: '店铺名称',
  dataIndex: 'shopName',
  key: 'shopName',
},
{
  title: '住址',
  dataIndex: 'address',
  key: 'address',
},
{
  title: '负责人',
  dataIndex: 'name',
  key: 'name',
  render: (text) => <a href="#">{text}</a>,
},
{
  title: '联系电话',
  dataIndex: 'phoneNum',
  key: 'phoneNum',
},
{
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
},
{
  title: '操作',
  key: 'operation',
  render: (text, record) => (
    <span>
      <a >编辑</a>
    </span>
  ),
}];
class Solution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabTxt: ['解决方案', '家居推荐', '店内推荐', '产品文案'],
      solutionTxt: ['干/耐/色/紧（DRPT）', '干/耐/非色/紧（DRNT）', '干/敏/色/紧（DSPT）', '干/敏/非色/紧（DSNT）', '干/耐/色/皱（DRPW）', '干/耐/非色/皱（DRNW）', '干/敏/色/皱（DSPW）', '干/敏/非色/皱（DSNW）', '油/耐/色/紧（ORPT）', '油/耐/非色/紧（ORNT）'],
      tabCategory: 0
    };
  }
  selectItem = (currentIndex) => {
    this.setState({
      tabCategory: currentIndex
    })
  }
  render() {
    let { tabCategory, solutionTxt } = this.state;
    let showCurrentItem = null;
    let solutionDom = solutionTxt.map((val,index)=> {
      return (<div className={styles.problem_list} key={index}>
        {val}
      </div>)
    })
    switch (tabCategory) {
      case 0: {
        showCurrentItem = (
          <div className={styles.solution}>
            {
              solutionDom
            }
          </div>
        );
        break;
      }
      case 1: {
        showCurrentItem = <div>
          <Table columns={columns} dataSource={data} />
        </div>;
        break;
      }
      case 2: {
        showCurrentItem = <div>
          <Table columns={columns} dataSource={data} />
        </div>;
        break;
      }
      case 3: {
        showCurrentItem = <div>
          <Table columns={columns} dataSource={data} />
        </div>;
        break;
      }

    }
    console.log(showCurrentItem);
    return (
      <React.Fragment>
        <TitleComp title="解决方案" btnTxt=""></TitleComp>
        <TabChange tabTxtArr={this.state.tabTxt} selectItem={this.selectItem}></TabChange>

        <div className="block_container">
          <div className="home_p_24">
            {showCurrentItem}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Solution;