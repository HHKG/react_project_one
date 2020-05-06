import React, { Component } from 'react';
import TitleComp from '../../components/titleComp';
import styles from './shop.css';
import { Input, Button, Table, Modal } from 'antd';
import { withRouter } from 'react-router-dom';
import image7 from "../../styles/images/7.png";


class ShopManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabCategory: 1,
      shopName: '',
      visible: false
    };
  }
  //tab标签切换
  selectItem = (tabCategory) => {
    this.setState({
      tabCategory: tabCategory
    })
  }
  // 获取店铺名称
  handleShopName = (e) => {
    let val = e.target.value;
    this.setState({
      shopName: val
    })
  }
  //查询店铺
  checkShop = () => {
    let { shopName } = this.state;
    console.log("正在查找" + shopName + "...")
  }
  // 重置查找文本输入框
  reset = () => {
    this.setState({
      shopName: ''
    })
    console.log(`已清除${this.state.shopName}， 请重新输入店铺名称！`)
  }
  // 跳转到新增店铺页面
  gotoAddShop = () => {
    this.props.history.push({ pathname: '/Home/ShopManagement/AddShop' });
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    let { tabCategory } = this.state;
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
          <a onClick={this.gotoAddShop}>编辑</a>
          <span className={styles.ant_divider}></span>
          <a>删除</a>
          <span className={styles.ant_divider}></span>
          <a onClick={this.showModal}>生成二维码</a>
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
          <a onClick={this.gotoAddShop}>编辑</a>
          <span className={styles.ant_divider}></span>
          <a>删除</a>
          <span className={styles.ant_divider}></span>
          <a onClick={this.showModal}>生成二维码</a>
          <span className={styles.ant_divider}></span>
        </span>
      ),
    }];
    return (
      <React.Fragment>
        <TitleComp title="店铺管理" btnTxt="新增店铺" handleFn={this.gotoAddShop} />
        <div className="bg_fff p_15">
          <span className={[`${styles.p_l_r}`, `${tabCategory === 1 ? styles.select_item : ''}`].join(' ')} onClick={this.selectItem.bind(this, 1)}>直营店</span>
          <span className={[`${styles.p_l_r}`, `${tabCategory === 2 ? styles.select_item : ''}`].join(' ')} onClick={this.selectItem.bind(this, 2)}>院方</span>
        </div>
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
              tabCategory === 1 ? (
                <div className="home_p_24 m_t_15">
                  <Table columns={columns} dataSource={data} />
                </div>
              ) : null
            }
            {
              tabCategory === 2 ? (
                <div className="home_p_24 m_t_15">
                  <Table columns={columns_yuan} dataSource={data_yuan} />
                </div>
              ) : null
            }
          </React.Fragment>
          {/* 二维码组件 */}
            <Modal
              centered
              title="门店二维码"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
              style={{textAlign:'center'}}
            >
              <img src={image7}></img>
            </Modal>
        </div>
      </React.Fragment>
    )
  }
}
export default withRouter(ShopManagement);