import React, { Component } from 'react';
import { Button } from 'antd';

class TitleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleButton = () => {
    this.props.handleFn();
  }
  gotoAddProject=()=>{
    this.props.btnTxt[0].gotoAddProject();
  }
  managementFlow=()=>{
    this.props.btnTxt[2].managementFlow(true);
  }
  managementTab=()=>{
    this.props.btnTxt[1].managementTab(true);
  }
  render() {
    let btnDom = null;
    if (this.props.btnTxt && typeof (this.props.btnTxt) === 'string') {
      btnDom = <Button type="primary" onClick={this.handleButton}>{this.props.btnTxt}</Button>
    } else if (this.props.btnTxt && typeof (this.props.btnTxt) === 'object') {
      btnDom = this.props.btnTxt.map((val,index)=> {
        return (<Button className="m_l_20" type="primary" onClick={val.fn} key={index}>{val.txt}</Button>)
      })
    }
    console.log(typeof (this.props.btnTxt));
    return (
      <div className="bg_fff m_b_10 d_flex j_c_btw p_l_r_16">
        <h1 className="font_size_20">{this.props.title}</h1>
        <div className="d_flex">
        {btnDom}
        </div>
      </div>
    )
  }
}
export default TitleComp;