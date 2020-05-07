import React, { Component } from 'react';
import TitleComp from '../../components/titleComp';
import { Form,Input, Select, InputNumber, Switch, Radio, Slider, Button, Upload, Rate, Checkbox, Row, Col, } from 'antd';
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
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
  render() {
    return (
      <div>
        <TitleComp title="新增产品" btnTxt="<返回" handleFn={this.goback} />
        <div className="block_container">
          <React.Fragment>
            <div className="home_p_24">
              <Form name="validate_other" {...formItemLayout} onFinish={this.onFinish} initialValues={{ 'input-number': 3, 'checkbox-group': ['A', 'B'], rate: 3.5, }}>
                <Form.Item name="productName" label="产品名称："
                  rules={[{message: '产品名称不能为空！',},{required: true,message: '请输入产品名称！',},]}>
                  <Input />
                </Form.Item>
                <Form.Item name="ProductIntroduction" label="产品简介："
                  rules={[{message: '产品简介不能为空！',},{required: true,message: '请输入产品简介！',},]}>
                  <Input />
                </Form.Item>
                <Form.Item name="selectProductCategory" label="选择产品类型" hasFeedback rules={[{ required: true, message: 'Please select your country!', },]}>
                  <Select placeholder="选择产品类型">
                    <Option value="喷雾">喷雾</Option>
                    <Option value="眼霜">眼霜</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="aiming_state" label="针对状态">
                  <Checkbox.Group>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="重干" style={{ lineHeight: '32px', }}>重干</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="中干" style={{ lineHeight: '32px', }}>中干</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="轻干" style={{ lineHeight: '32px', }}>轻干</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="良好" style={{ lineHeight: '32px', }}>良好</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="重油" style={{ lineHeight: '32px', }}>重油</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="中油" style={{ lineHeight: '32px', }}>中油</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
                <Form.Item name="ProductPrice" label="产品价格："
                  rules={[{message: '产品价格不差过5位数！',},{required: true,message:'请输入产品价格！',},]}>
                  <Input maxLength={5}/>
                </Form.Item>

                <Form.Item name="uploadImage" label="产品图片" valuePropName="fileList" getValueFromEvent={this.normFile} extra="">
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                      <UploadOutlined />上传图片
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item name="ProductComposition" label="产品成分："
                  rules={[{message: '产品成分不能为空！',},{required: true,message: '请输入产品成分！',},]}>
                  <Input.TextArea maxLength={300} />
                </Form.Item>
                <Form.Item name="ProductFunctionAnalysis" label="功效解析："
                  rules={[{message: '功效解析不能为空！',},{required: true,message: '请输入功效解析！',},]}>
                  <Input.TextArea maxLength={300} />
                </Form.Item>
                <Form.Item name="ProductInt" label="产品介绍："
                  rules={[{message: '产品介绍不能为空！',},{required: true,message: '请输入产品介绍！',},]}>
                  <Input.TextArea maxLength={300} />
                </Form.Item>

                <Form.Item name="uploadDateImage" label="详情图" valuePropName="fileList" getValueFromEvent={this.normFile} extra="">
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                      <UploadOutlined />上传详情图图片
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6, }}>
                  <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
              </Form>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default AddProduct;