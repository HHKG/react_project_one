import React, { Component } from 'react';
import TitleComp from '../../components/titleComp';
import styles from './shop.css';
import { Input, Button,Table,Icon} from 'antd';



class ShopManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabCategory: 1,
      shopName:''
    };
  }
  //tab标签切换
  selectItem = (tabCategory) => {
    this.setState({
      tabCategory: tabCategory
    })
  }
  // 获取店铺名称
  handleShopName=(e)=>{
    let val=e.target.value;
    this.setState({
      shopName:val
    })
  }
  //查询店铺
  checkShop=()=>{
    let {shopName}=this.state;
    console.log("正在查找"+shopName+"...")
  }
  // 重置查找文本输入框
  reset=()=>{
    this.setState({
      shopName:''
    })
    console.log(`已清除${this.state.shopName}， 请重新输入店铺名称！`)
  }
  render() {
    let { tabCategory } = this.state;
    const data = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    }, {
      key: '3',
      name: '李大嘴',
      age: 32,
      address: '西湖区湖底公园1号',
    }];
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="#">{text}</a>,
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <span>
          <a href="">操作一{record.name}</a>
          <span className="ant-divider"></span>
          <a href="">操作二</a>
          <span className="ant-divider"></span>
          <a href="" className="ant-dropdown-link">
            更多 <Icon type="down" />
          </a>
        </span>
      ),
    }];
    return (
      <React.Fragment>
        <TitleComp title="店铺管理" btnTxt="新增店铺" />
        <div className="bg_fff p_15">
          <span className={[`${styles.p_l_r}`, `${tabCategory === 1 ? styles.select_item : ''}`].join(' ')} onClick={this.selectItem.bind(this, 1)}>直营店</span>
          <span className={[`${styles.p_l_r}`, `${tabCategory === 2 ? styles.select_item : ''}`].join(' ')} onClick={this.selectItem.bind(this, 2)}>院方</span>
        </div>
        <div className="block_container">
          {
            tabCategory === 1 ? (
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
              <div className="home_p_24 m_t_15">
              <Table columns={columns} dataSource={data} />
              </div>
              </React.Fragment>
            ) : null
          }
          {
            tabCategory === 2 ? (
              <div className="home_p_24">
                院方
              </div>
            ) : null
          }
        </div>
      </React.Fragment>
    )
  }
}
export default ShopManagement;