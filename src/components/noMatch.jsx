import React,{Component} from 'react';

import { withRouter } from "react-router-dom";

class NoMatch extends React.PureComponent {
  componentWillMount() {
      // this.props.history.push('/');
  }
  render() {
      return null;
  }
}

export default NoMatch;