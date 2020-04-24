import React,{Component,Suspense,lazy} from 'react';
import {HashRouter as Router,Route,Switch,Redirect,withRouter} from 'react-router-dom';
import {Spin} from 'antd';

const Account=lazy(()=>import('../pages/AccountManagement'));
const ContentSetting=lazy(()=>import('../pages/ContentSetting'));
const Feedback=lazy(()=>import('../pages/Feedback'));
const OnlineTest=lazy(()=>import('../pages/OnlineTest'));
const Product=lazy(()=>import('../pages/Product'));
const ProjectManagement=lazy(()=>import('../pages/ProjectManagement'));
const Solution=lazy(()=>import('../pages/Solution'));
const SystemManagement=lazy(()=>import('../pages/SystemManagement'));
const TestData=lazy(()=>import('../pages/TestData'));
const UserManagement=lazy(()=>import('../pages/UserManagement'));
const NoMatch=lazy(()=>import('../components/noMatch'));

class ComponentRoute extends Component{
  constructor(props){
    super(props);
    this.state={
      pathName:''
    }
  }
  componentDidMount=()=>{
    this.setState({
      pathName:this.props.history.location.pathname
    })
  }
  render(){
    let {pathName}=this.state;
    return(
      <Router>
        <Suspense fallback={<Spin />}>
          <Switch>
            <Route path="/Home/Account" component={Account}></Route>
            <Route path="/Home/ContentSetting" component={ContentSetting}></Route>
            <Route path="/Home/Feedback" component={Feedback}></Route>
            <Route path="/Home/OnlineTest" component={OnlineTest}></Route>
            <Route path="/Home/Product" component={Product}></Route>
            <Route path="/Home/ProjectManagement" component={ProjectManagement}></Route>
            <Route path="/Home/Solution" component={Solution}></Route>
            <Route path="/Home/SystemManagement" component={SystemManagement}></Route>
            <Route path="/Home/TestData" component={TestData}></Route>
            <Route path="/Home/UserManagement" component={UserManagement}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
export default withRouter(ComponentRoute);