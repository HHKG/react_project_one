import React, { Component } from 'react';
import TabChange from '../../components/tabChange';
import TitleComp from '../../components/titleComp';
import { Input, Button, Table, Modal } from 'antd';
import styles from '../ShopManagement/shop.css';
import {withRouter} from 'react-router-dom';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabCategory: 0,
      tabTxtArr: ['已上架', '已下架']
    };
  }
  //tab标签切换
  selectItem = (tabCategory) => {
    this.setState({
      tabCategory: tabCategory
    })
  }
  // 进入新增产品页面
  gotoAddProduct=()=>{
    console.log(this.props);
    this.props.history.push({ pathname: '/Home/Product/AddProduct' });
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
          <a>删除</a>
          <span className={styles.ant_divider}></span>
          <a>生成二维码</a>
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
          <a>删除</a>
          <span className={styles.ant_divider}></span>
          <a onClick={this.showModal}>生成二维码</a>
          <span className={styles.ant_divider}></span>
        </span>
      ),
    }];
    let { tabCategory } = this.state;
    return (
      <React.Fragment>
        <TitleComp title="产品管理" btnTxt="新增产品" handleFn={this.gotoAddProduct} />
        <TabChange tabTxtArr={this.state.tabTxtArr} selectItem={this.selectItem} ></TabChange>
        {/* <div>
          {tabCategory}
        </div> */}
        <div className="block_container">
          <React.Fragment>
            <div className="home_p_24">
              <label>店铺名称：
                <Input type='text'
                  className={styles.shopName}
                  placeholder='请输入店铺名称'
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
            </React.Fragment>
        </div>
      </React.Fragment>
    )
  }
}
export default withRouter(Product);