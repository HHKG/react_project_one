// 全局提示都写在这里统一管理
import React,{Component} from 'react';
import {notification,message} from 'antd';

const GlobalTip=(ChildrenComponent)=>{
  class GlobalTip extends Component{
    constructor(props){
      super(props);
      this.state={}
    }
    openNotification = () => {
      notification.open({
        message: '高阶组件',
        description:
          '使用高阶组件优化提示代码',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };
    success=()=>{
      const key = 'updatable';
      message.loading({ content: '登录中...', key });
      setTimeout(() => {
        message.success({ content: '登录成功！', key, duration: 2 });
      }, 1000);
    }
    submit=()=>{
      const key = 'submit';
      message.loading({ content: '正在提交...', key });
      setTimeout(() => {
        message.success({ content: '登录成功！', key, duration: 2 });
      }, 1000);
    }
    render(){
      return(
        <ChildrenComponent openNotification={this.openNotification} success={this.success}></ChildrenComponent>
      );
    }
  }
  return GlobalTip;
}

export default GlobalTip;