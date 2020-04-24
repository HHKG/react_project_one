import React,{Component} from 'react';

import { withRouter } from "react-router-dom";

class NoMatch extends React.PureComponent {
  componentWillMount() {
      // this.props.history.push('/');
  }
  render() {
      return (
        <h1>页面不存在！</h1>
      );
  }
}

export default NoMatch;