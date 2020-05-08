import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Spin } from 'antd';

const NoMatch = lazy(() => import('../components/noMatch'));
const HomePage = lazy(() => import('../pages/HomePage'));
const UserManagement = lazy(() => import('../pages/UserManagement'));
const ContentSetting = lazy(() => import('../pages/ContentSetting'));
const Feedback = lazy(() => import('../pages/Feedback'));
const OnlineTest = lazy(() => import('../pages/OnlineTest'));
const Product = lazy(() => import('../pages/Product'));
const ProjectManagement = lazy(() => import('../pages/ProjectManagement'));
const Solution = lazy(() => import('../pages/Solution'));
const SystemManagement = lazy(() => import('../pages/SystemManagement'));
const TestData = lazy(() => import('../pages/TestData'));
const AccountManagement = lazy(() => import('../pages/AccountManagement'));

// 店铺管理
const ShopManagement = lazy(() => import('../pages/ShopManagement'));//店铺列表
const AddShop = lazy(() => import('../pages/ShopManagement/addShop'));//新增店铺

// 新增产品
const AddProduct = lazy(() => import('../pages/Product/addProduct'));

// 新增项目
const AddProject = lazy(() => import('../pages/ProjectManagement/addProject'));

// 新增后台账号
const AddAccount = lazy(() => import('../pages/AccountManagement/addAccount'));

export default class MRouter extends React.Component {
  render() {
    return (
      // 目前的路由配置规则，是在前面路由相同的的情况下，把较长的路由按照顺序放在后面，比如下面的店铺管理的路由（待优化）
      <Router>
        <Suspense fallback={<Spin />}>
          <Switch>
            <Route exact path="/Home" render={() => <Redirect to="/Home/HomePage"></Redirect>}></Route>
            <Route path="/Home/HomePage" component={HomePage}></Route>
            <Route path="/Home/UserManagement" component={UserManagement}></Route>
            <Route path="/Home/ContentSetting" component={ContentSetting}></Route>
            <Route path="/Home/Feedback" component={Feedback}></Route>
            <Route path="/Home/OnlineTest" component={OnlineTest}></Route>

            <Route path="/Home/Solution" component={Solution}></Route>
            <Route path="/Home/SystemManagement" component={SystemManagement}></Route>
            <Route path="/Home/TestData" component={TestData}></Route>

            {/* 店铺管理 */}
            <Route path="/Home/ShopManagement/AddShop" component={AddShop}></Route>
            <Route path="/Home/ShopManagement" component={ShopManagement}></Route>

            {/* 产品管理 */}
            <Route path="/Home/Product/AddProduct" component={AddProduct}></Route>
            <Route path="/Home/Product" component={Product}></Route>

            {/* 项目管理 */}
            <Route path="/Home/ProjectManagement/AddProject" component={AddProject}></Route>
            <Route path="/Home/ProjectManagement" component={ProjectManagement}></Route>

            {/* 账号管理 */}
            <Route path="/Home/AccountManagement/AddAccount" component={AddAccount}></Route>
            <Route path="/Home/AccountManagement" component={AccountManagement}></Route>

            <Route component={NoMatch}></Route>
          </Switch>
        </Suspense>
      </Router>

    )
  }
}