import React, { Component } from 'react';
import { Select, DatePicker, Table } from 'antd';
import TitleComp from '../../components/titleComp';
const { RangePicker } = DatePicker;
const { Option } = Select;
class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (value) => {
    console.log(value);
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
          <a >编辑</a>
        </span>
      ),
    }];
    return (
      <React.Fragment>
        <TitleComp title="反馈内容" btnTxt=""></TitleComp>
        <div className="block_container">
          <div className="home_p_24 m_b_15">
            <label>时间：
            <RangePicker
                allowClear={false}
                style={{ width: 240 }}
              />
            </label>
            <label className="m_l_20">
              门店：
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </label>
          </div>
        </div>
        <div className="block_container">
          <div className="home_p_24 m_b_15">
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Feedback;