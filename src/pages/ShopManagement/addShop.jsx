import React, { Component } from 'react';
import TitleComp from '../../components/titleComp';
import emitter from '../../util/event';
import { Form, Input, InputNumber, Button, Select,Radio } from 'antd';
import GlobalTip from '../../components/globalTips';
import {withRouter} from 'react-router-dom';

const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu', 'guangdong'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  guangdong: ['广州', '深圳', '佛山']
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

class AddShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
      threeCity: cityData[provinceData[2]][0]
    }
  }
  componentDidMount = () => {
    console.log(this.props);
    console.log('执行');
    emitter.emit('getChildrenPageTxt', '新增店铺');
  }
  goback = () => {
    window.history.back(-1)
  }
  onFinish = (values) => {
    console.log(values, '表单数据');
    setTimeout(()=>{
      this.goback();
    },1000)
  }
  handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  };

  onSecondCityChange = value => {
    this.setState({
      secondCity: value,
    });
  };
  onThreeCityChange = value => {
    this.setState({
      threeCity: value,
    });
  }
  // 店铺地址
  shopAddress = (cities) => {
    return (
      <React.Fragment>
        <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={this.handleProvinceChange}>
          {provinceData.map(province => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
        <Select style={{ width: 120 }} value={this.state.secondCity} onChange={this.onSecondCityChange}>
          {cities.map(city => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
        <Select style={{ width: 120 }} value={this.state.threeCity} onChange={this.onThreeCityChange}>
          {cities.map(city => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
      </React.Fragment>
    )
  }
  render() {
    const { cities } = this.state;
    let shopAddress = this.shopAddress(cities);
    return (
      <React.Fragment>
        <TitleComp title="新增店铺" btnTxt="<返回" handleFn={this.goback} />
        <div className="block_container">
          <div className="home_p_24">
            <Form {...layout} name="nest-messages" style={{ width: 600 }} onFinish={this.onFinish} validateMessages={validateMessages}>
              <Form.Item name={['addShop', 'shopCategory']} label="店铺类型" rules={[{ required: true, },]}>
                <Select>
                  <Select.Option value="选择门店">选择门店</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name={['addShop', 'shopName']} label="店铺名称" rules={[{ required: true, },]}>
                <Input />
              </Form.Item>
              <Form.Item name={{ 'addShop': ['shopName'] }} label="店铺位置" rules={[{ required: true, },]}>
                {shopAddress}
                <Input placeholder="请输入详细地址"></Input>
              </Form.Item>
              <Form.Item name={['addShop', 'contact']} label="关联渠道" rules={[{ required: true, },]}>
                <Select>
                  <Select.Option value="选择门店">选择门店</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name={['addShop', 'ContactShopName']} label="关联门店" rules={[{ required: true, },]}>
                <Input />
              </Form.Item>
              <Form.Item name={['addShop', 'leadingCadre']} label="负责人" rules={[{ required: true, },]}>
                <Input />
              </Form.Item>
              <Form.Item name={['addShop', 'ContactPhone']} label="联系电话" rules={[{ required: true, },]}>
                <Input />
              </Form.Item>
              {/* <Form.Item name={['addShop', 'email']} label="Email" rules={[{ type: 'email', required: true },]}>
                <Input />
              </Form.Item>
              <Form.Item name={['addShop', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99, required: true },]}>
                <InputNumber />
              </Form.Item>
              <Form.Item name={['addShop', 'website']} label="Website" rules={[{ required: true, },]}>
                <Input />
              </Form.Item>
              <Form.Item name={['addShop', 'introduction']} label="Introduction" rules={[{ required: true, },]}>
                <Input.TextArea />
              </Form.Item> */}
              <Form.Item name={['addShop', 'showShop']} label="演示门店">
                <Radio>设为演示门店</Radio>
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} rules={[{ required: true, },]}>
                <Button type="primary" htmlType="submit">提交</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default withRouter(GlobalTip(AddShop));