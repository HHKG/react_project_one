import React,{Component} from 'react';
import indexStyle from './index.css';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(<div className={indexStyle.root}>
      <div className={indexStyle.login_pop}> 
        <h3>登录</h3>
      </div>
    </div>);
  }
}

export default Login;