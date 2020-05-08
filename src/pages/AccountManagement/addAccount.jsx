import React,{Component} from 'react';
import { Form, Input, Select, InputNumber, Switch, Radio, Slider, Button, Upload, Rate, Checkbox, Row, Col, } from 'antd';
import TitleComp from '../../components/titleComp';
const {Option}=Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};  
class AddAccount extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  goback=()=>{
    window.history.back(-1);
  }
  onFinish = values => {
    console.log('Received values of form: ', values);
  };
  render(){
    return (
      <React.Fragment>
         <TitleComp title="新增后台账号" btnTxt="<返回" handleFn={this.goback} />
         <div className="block_container">
           <div className="home_p_24">
           <Form name="validate_other" {...formItemLayout} onFinish={this.onFinish} initialValues={{ 'input-number': 3, 'checkbox-group': ['A', 'B'], rate: 3.5, }}>
                <Form.Item name="name" label="姓名："
                  rules={[{message: '姓名不能为空！',},{required: true,message: '请输入姓名！',},]}>
                  <Input placeholder="请输入姓名"/>
                </Form.Item>
                <Form.Item name="phoneNum" label="手机号："
                  rules={[{message: '手机号不能为空！',},{required: true,message: '请输入手机号！',},]}>
                  <Input placeholder="请输入手机号"/>
                </Form.Item>
                <Form.Item name="belongShop" label="所属门店" hasFeedback rules={[{ required: true, message: 'Please select your country!', },]}>
                  <Select placeholder="选择产品类型">
                    <Option value="南山店">南山店</Option>
                    <Option value="宝安店">宝安店</Option>
                    <Option value="福田店">福田店</Option>
                    <Option value="龙华店">龙华店</Option>
                    <Option value="龙岗店">龙岗店</Option>
                  </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6, }}>
                  <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
              </Form>
           </div>
         </div>
      </React.Fragment>
    )
  }
}
export default AddAccount;