import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import indexStyle from './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import globalTips from '../../components/globalTips';
import queryString from 'query-string';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  formFn=()=> {
    const layout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 24 },
    };
    const onFinish = values => {
      // 获取表单数据
      if(values.username!==''&&values.password!==''){
        this.props.success();
        setTimeout(()=>{
          this.props.history.push({
            pathname:'/Home',search:queryString.stringify({'phone':values.username})
          })
        },1300)
      }
      
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
      this.props.openNotification();
    };
  
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label=""
          name="username"
          rules={[{ required: true, message: '用户名不能为空！'}]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
  
        <Form.Item
          label=""
          name="password"
          rules={[{ required: true, message: '用户名密码不能为空！' }]}
        >
          <Input.Password placeholder="请输入用户名密码"/>
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住账号密码</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  };



  render(){
    return(<div className={indexStyle.root}>
      <div className={indexStyle.login_pop}> 
        <h3>登录</h3>
        {this.formFn()}
      </div>
    </div>);
  }
}

export default globalTips(withRouter(Login));