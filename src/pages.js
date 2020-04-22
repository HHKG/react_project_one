import React,{Suspense,lazy} from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {Spin} from 'antd';

const Home=lazy(()=>import('../src/pages/Home'));
const NoMatch = lazy(()=>import('../src/components/noMatch'));
const Login=lazy(()=>import('../src/pages/Login'));


export default ()=>(
  // 用哈希路由
  <Router>
      <Suspense fallback={<Spin></Spin>}>
          <Switch>
            <Route exact path="/" render={()=><Redirect to="/Login" push></Redirect>}></Route>
            <Route path="/Home" component={Home}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
      </Suspense>
  </Router>
);