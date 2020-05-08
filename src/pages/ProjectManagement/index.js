import React, { Component } from 'react';
import TabChange from '../../components/tabChange';
import TitleComp from '../../components/titleComp';
import { Input, Button, Table, Select, Modal } from 'antd';
import styles from '../ShopManagement/shop.css';
import { withRouter } from 'react-router-dom';
const columns_tabPop = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data_tabPop = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const { Option } = Select;
class ProjectManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabCategoryArr: ['已上架', '已下架'],
      tabCategory: 0,
      titelBtnArr: [{
        txt: '新增项目',
        fn: this.gotoAddProject
      }, {
        txt: '管理标签',
        fn: this.managementTab
      }, {
        txt: '管理流程',
        fn: this.managementFlow
      }],
      booleanTabVal:false,
      booleanFlowVal:false

    };
  }
  selectItem = (currentIndex) => {
    this.setState({
      tabCategory: currentIndex
    })
  }
  gotoAddProject = () => {
    this.props.history.push({ pathname: '/Home/ProjectManagement/AddProject' });
  }
  managementTab = (booleanTabVal) => {
    this.setState({
      booleanTabVal:booleanTabVal
    })
  }
  managementFlow = (booleanFlowVal) => {
    console.log('管理流程');
    this.setState({
      booleanFlowVal:booleanFlowVal
    })
  }
  render() {
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
          <a onClick={this.gotoAddProduct}>编辑</a>
          <span className={styles.ant_divider}></span>
          <a>下架</a>
          <span className={styles.ant_divider}></span>
          <a>删除</a>
          <span className={styles.ant_divider}></span>
        </span>
      ),
    }];
    const data_yuan = [{
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
    },
    {
      key: '4',
      orderNumber: '4',
      name: '崔大炮',
      shopName: '宝安店',
      phoneNum: 12345678921,
      address: '西湖区湖底公园1号',
      createTime: '2020-04-30 9:56:00'
    }];
    const columns_yuan = [{
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
          <a onClick={this.gotoAddProduct}>编辑</a>
          <span className={styles.ant_divider}></span>
          <a>下架</a>
          <span className={styles.ant_divider}></span>
          <a onClick={this.showModal}>删除</a>
          <span className={styles.ant_divider}></span>
        </span>
      ),
    }];
    let { tabCategory, titelBtnArr } = this.state;
    return (<React.Fragment>
      <TitleComp title="项目管理" btnTxt={titelBtnArr}></TitleComp>
      <TabChange tabTxtArr={this.state.tabCategoryArr} selectItem={this.selectItem}></TabChange>
      <div className="block_container">
        <div className="home_p_24">
          <label>项目名称：
                <Input type='text'
              className={styles.shopName}
              placeholder='请输入项目名称'
              value={this.state.shopName}
              onChange={this.handleShopName}
              maxLength={30}
            />
          </label>
          <div className="f_r">
            <Button className="m_l_r_20" type="primary" onClick={this.checkShop}>查询</Button>
            <Button onClick={this.reset}>重置</Button>
          </div>
        </div>
      </div>
      {
        tabCategory === 0 ? (
          <div className="home_p_24 m_t_15">
            <Table columns={columns} dataSource={data} />
          </div>
        ) : null
      }
      {
        tabCategory === 1 ? (
          <div className="home_p_24 m_t_15">
            <Table columns={columns_yuan} dataSource={data_yuan} />
          </div>
        ) : null
      }
      <Modal
        title="管理标签"
        centered
        visible={this.state.booleanTabVal}
        onOk={ this.managementTab.bind(this,false)}
        onCancel={this.managementTab.bind(this,false)}
      >
        <Button type="default">添加标签</Button>
        <Table columns={columns_tabPop} dataSource={data_tabPop} size="middle" />
      </Modal>
      <Modal
        title="管理流程"
        centered
        visible={this.state.booleanFlowVal}
        onOk={ this.managementFlow.bind(this,false)}
        onCancel={this.managementFlow.bind(this,false)}
      >
        <Button type="default">添加流程</Button>
        <Table columns={columns_tabPop} dataSource={data_tabPop} size="middle" />
      </Modal>
    </React.Fragment>
    );
  }
}
export default withRouter(ProjectManagement);