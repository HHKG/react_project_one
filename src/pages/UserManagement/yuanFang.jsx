import React, { Component } from 'react';
import { Tabs, Input, Select, DatePicker, Button,Table  } from 'antd';
import TitleComp from '../../components/titleComp';
import styles from './user.css';
const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: '序号',
    dataIndex: 'number',
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
  },
  {
    title: '手机号',
    dataIndex: 'phone',
  },
  {
    title: '生日',
    dataIndex: 'brithday',
  },
  {
    title: '皮肤类型',
    dataIndex: 'skinCategory',
  },
  {
    title: '检测次数',
    dataIndex: 'checkSum',
  },
  {
    title: '最近测试时间',
    dataIndex: 'checkTime',
  },
  {
    title: '注册时间',
    dataIndex: 'resigterTime',
  },
];
const data = [
  {
    key: '1',
    number:'1',
    sex:'man',
    phone:'12345678912',
    brithday:'2020-05-06',
    skinCategory:'轻油',
    checkSum:'一次',
    checkTime:'2020-05-06',
    resigterTime:'2020-05-06',
    name: 'John Brown',
  },
  {
    key: '2',
    number:'2',
    sex:'man',
    phone:'12345678912',
    brithday:'2020-05-06',
    skinCategory:'轻油',
    checkSum:'一次',
    checkTime:'2020-05-06',
    resigterTime:'2020-05-06',
    name: 'Jim Green',
  },
  {
    key: '3',
    number:'3',
    sex:'man',
    phone:'12345678912',
    brithday:'2020-05-06',
    skinCategory:'轻油',
    checkSum:'一次',
    checkTime:'2020-05-06',
    resigterTime:'2020-05-06',
    name: 'Joe Black',
  },
];
class YuanFan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  callback = (key) => {
    console.log(key);
  }
  handleChange = (value) => {
    console.log(value)
  }  
  render() {
    return (
      <React.Fragment>
        <div style={{ background: '#fff', padding: '0 15px 15px' }}>
          <div>
            <label className={`m_t_15 ${styles.display_i_b}`}>
              用户名称/手机号：
             <Input type="text" placeholder="请输入用户名称或手机号" style={{ width: "200px" }} />
            </label>
            <label className={`m_l_20 m_t_15 ${styles.display_i_b}`}>
              皮肤类型：
              <Select defaultValue="请选择" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="细皱">细皱</Option>
                <Option value="敏感">敏感</Option>
                <Option value="黑头">黑头</Option>
              </Select>
            </label>
            <label className={`m_l_20 m_t_15 ${styles.display_i_b}`}>
              注册时间：
              <RangePicker size='default' />
            </label>
            <label className={`m_l_20 m_t_15 ${styles.display_i_b}`}>
              生日时间：
              <RangePicker size='default' />
            </label>
            <label className={`m_l_20 m_t_15 ${styles.display_i_b}`}>
              最近测试时间：
              <RangePicker size='default' />
            </label>
            <label className={`m_l_20 m_t_15 ${styles.display_i_b}`}>
              所属店铺：
              <Select defaultValue="请选择" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="直营店01">直营店01</Option>
                <Option value="直营店02">直营店02</Option>
                <Option value="直营店03">直营店03</Option>
              </Select>
            </label>
            <label className={`m_l_20 m_t_15 ${styles.display_i_b}`}>
              检测次数：
              <Select defaultValue="请选择" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="无">无</Option>
                <Option value="一次">一次</Option>
                <Option value="两次">两次</Option>
                <Option value="三次">三次</Option>
                <Option value="三次以上">三次以上</Option>
              </Select>
            </label>
            <label className={`m_l_20 m_t_15 f_r ${styles.display_i_b}`}>
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </label>
            <Table className="m_t_15" columns={columns} dataSource={data} size="middle" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default YuanFan;