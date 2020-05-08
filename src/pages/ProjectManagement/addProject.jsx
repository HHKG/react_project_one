import React, { Component } from 'react';
import TitleComp from '../../components/titleComp';
import { Form, Input, Select, InputNumber, Switch, Radio, Slider, Button, Upload, Rate, Checkbox, Row, Col, } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowArr:[]
    }
  }
  normFile = e => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  onFinish = values => {
    console.log('Received values of form: ', values);
  };
  // 返回产品数据列表
  goback = () => {
    window.history.back(-1);
  }
  addFormItem = () => {
    let {flowArr}=this.state;
    flowArr.push('添加项目');
    this.setState({
      flowArr
    })
  }
  removeCurrentItem=(currentIndex)=>{
    let {flowArr}=this.state;
    flowArr.splice(currentIndex,1);
    this.setState({
      flowArr
    })
  }


  render() {
    let {flowArr}=this.state;
    let finalDom=flowArr.map((val,index)=>{
      return (
        <div key={index}>
          <div className="clear_f">
            <Form.Item name="ProjectInt_selectProjectTab" style={{ width: 200, float: "left" }} hasFeedback rules={[{ required: true, message: 'Please select your country!', },]}>
              <Select placeholder="选择项目标签">
                <Option value="项目一">项目一</Option>
                <Option value="项目二">项目二</Option>
              </Select>
            </Form.Item>
            <Form.Item name="ProjectInt_projectName" style={{ width: 200, float: "left", marginLeft: "20px" }} rules={[{ message: '时间能为空！', }, { required: true, message: '请输入时间！', },]}>
              <Input placeholder="分钟" />
            </Form.Item>
          <Button type="primary" className="m_l_20 f_l" onClick={this.removeCurrentItem.bind(this,index)}>删除</Button>
          </div>
          <div>
            <Form.Item name="ProjectInt"
              rules={[{ message: '流程步骤不能为空！', }, { required: true, message: '请输入流程步骤！', },]}>
              <Input.TextArea maxLength={300} placeholder="请输入流程步骤" />
            </Form.Item>
            <Form.Item name="ProjectInt"
              rules={[{ message: '步骤说明不能为空！', }, { required: true, message: '请输入步骤说明！', },]}>
              <Input.TextArea maxLength={300} placeholder="请输入步骤说明" />
            </Form.Item>
            <Form.Item name="uploadDateImage" valuePropName="fileList" getValueFromEvent={this.normFile} extra="">
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <UploadOutlined />上传详情图图片
                            </Button>
              </Upload>
            </Form.Item>
          </div>
        </div>
      )
    })
    return (
      <div>
        <TitleComp title="新增项目" btnTxt="<返回" handleFn={this.goback} />
        <div className="block_container">
          <React.Fragment>
            <div className="home_p_24">
              <Form name="validate_other" {...formItemLayout} onFinish={this.onFinish} initialValues={{ 'input-number': 3, 'checkbox-group': ['A', 'B'], rate: 3.5, }}>
                <Form.Item name="projectName" label="项目名称："
                  rules={[{ message: '项目名称不能为空！', }, { required: true, message: '请输入项目名称！', },]}>
                  <Input />
                </Form.Item>
                <Form.Item name="projectIntroduction" label="项目简介简介："
                  rules={[{ message: '项目简介不能为空！', }, { required: true, message: '请输入项目简介！', },]}>
                  <Input.TextArea maxLength={300} />
                </Form.Item>
                <Form.Item name="selectProjectTab" label="选择项目标签" hasFeedback rules={[{ required: true, message: 'Please select your country!', },]}>
                  <Select placeholder="选择项目标签">
                    <Option value="项目一">项目一</Option>
                    <Option value="项目二">项目二</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="ProjectPrice" label="项目价格："
                  rules={[{ message: '项目价格不超过5位数！', }, { required: true, message: '请输入项目价格！', },]}>
                  <Input maxLength={5} />
                </Form.Item>

                <Form.Item name="uploadImage" label="项目图片" valuePropName="fileList" getValueFromEvent={this.normFile} extra="">
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                      <UploadOutlined />上传图片
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item name="ProjectInt" label="项目介绍介绍："
                  rules={[{ message: '项目介绍不能为空！', }, { required: true, message: '请输入项目介绍！', },]}>
                  <Input.TextArea maxLength={300} />
                </Form.Item>
                <Form.Item name="uploadDateImage" label="详情图" valuePropName="fileList" getValueFromEvent={this.normFile} extra="">
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                      <UploadOutlined />上传详情图图片
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item label="服务流程：">
                  {finalDom}
                  <Button type="primary" onClick={this.addFormItem}>添加流程</Button>
                </Form.Item>
                <Form.Item name="PayAtention" label="注意事项："
                  rules={[{ message: '注意事项不能为空！', }, { required: true, message: '请输入注意事项！', },]}>
                  <Input.TextArea maxLength={300} />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6, }}>
                  <Button type="primary" htmlType="submit">保存</Button><Button className="m_l_20" type="primary" htmlType="submit">上架</Button>
                </Form.Item>
              </Form>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}
export default AddProject;