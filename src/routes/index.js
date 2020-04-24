import React, { Suspense,lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Spin} from 'antd';

const NoMatch = lazy(()=>import('../components/noMatch'));
const HomePage = lazy(()=>import('../pages/HomePage'));
const UserManagement = lazy(()=>import('../pages/UserManagement'));
const ContentSetting = lazy(()=>import('../pages/ContentSetting'));
const Feedback = lazy(()=>import('../pages/Feedback'));
const OnlineTest = lazy(()=>import('../pages/OnlineTest'));
const Product = lazy(()=>import('../pages/Product'));
const ProjectManagement = lazy(()=>import('../pages/ProjectManagement'));
const Solution = lazy(()=>import('../pages/Solution'));
const SystemManagement = lazy(()=>import('../pages/SystemManagement'));
const TestData = lazy(()=>import('../pages/TestData'));
const AccountManagement = lazy(()=>import('../pages/AccountManagement'));
const ShopManagement = lazy(()=>import('../pages/ShopManagement'));

export default class MRouter extends React.Component{
    render(){
        return (
          <Suspense fallback={<Spin/>}>
            <Switch>
              <Route exact path="/Home" render={()=><Redirect to="/Home/HomePage"></Redirect>}></Route>
              <Route path="/Home/HomePage" component={HomePage}></Route>
              <Route path="/Home/UserManagement" component={UserManagement}></Route>
              <Route path="/Home/ContentSetting" component={ContentSetting}></Route>
              <Route path="/Home/Feedback" component={Feedback}></Route>
              <Route path="/Home/OnlineTest" component={OnlineTest}></Route>
              <Route path="/Home/Product" component={Product}></Route>
              <Route path="/Home/ProjectManagement" component={ProjectManagement}></Route>
              <Route path="/Home/Solution" component={Solution}></Route>
              <Route path="/Home/SystemManagement" component={SystemManagement}></Route>
              <Route path="/Home/TestData" component={TestData}></Route>
              <Route path="/Home/AccountManagement" component={AccountManagement}></Route>
              <Route path="/Home/ShopManagement" component={ShopManagement}></Route>
              <Route component={NoMatch}></Route>
            </Switch>
          </Suspense>
           
        )
    }
}