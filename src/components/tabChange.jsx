import React, { Component } from 'react';
import styles from './tabChange.css';

class TabChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabCategory: 0,
      tabCategoryArr:this.props.tabTxtArr
    }
  }

  // 获取当前的tab
  getCurrentTab=(index)=>{
    this.props.selectItem(index);
    this.setState({
      tabCategory:index
    })
  }

  getTabDom=()=>{
    let {tabCategoryArr,tabCategory}=this.state;
    return(
      tabCategoryArr.length>0?(
        tabCategoryArr.map((val,index)=>{
        return (<span key={index} className={[`${styles.p_l_r}`, `${tabCategory === index ? styles.select_item : ''}`].join(' ')} onClick={this.getCurrentTab.bind(this, index)}>{val}</span>)
        })
      ):null
    );
  }

  render() {
    return (
      <div>
        <div className="bg_fff p_15">
          {this.getTabDom()}
        </div>
      </div>
    );
  }
}

export default TabChange;