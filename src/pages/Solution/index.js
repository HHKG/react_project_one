import React, { Component } from 'react';
import TabChange from '../../components/tabChange';
import TitleComp from '../../components/titleComp';
import styles from './solution.css';


class Solution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabTxt: ['解决方案', '家居推荐', '店内推荐', '产品文案'],
      solutionTxt: ['干/耐/色/紧（DRPT）', '干/耐/非色/紧（DRNT）', '干/敏/色/紧（DSPT）', '干/敏/非色/紧（DSNT）', '干/耐/色/皱（DRPW）', '干/耐/非色/皱（DRNW）', '干/敏/色/皱（DSPW）', '干/敏/非色/皱（DSNW）', '油/耐/色/紧（ORPT）', '油/耐/非色/紧（ORNT）'],
      tabCategory: 0
    };
  }
  selectItem = (currentIndex) => {
    this.setState({
      tabCategory: currentIndex
    })
  }
  render() {
    let { tabCategory, solutionTxt } = this.state;
    let showCurrentItem = null;
    let solutionDom = solutionTxt.map((val,index)=> {
      return (<div className={styles.problem_list} key={index}>
        {val}
      </div>)
    })
    switch (tabCategory) {
      case 0: {
        showCurrentItem = (
          <div className={styles.solution}>
            {
              solutionDom
            }
          </div>
        );
        break;
      }
      case 1: {
        showCurrentItem = <div>家居推荐</div>;
        break;
      }
      case 2: {
        showCurrentItem = <div>店内推荐</div>;
        break;
      }
      case 3: {
        showCurrentItem = <div>产品文案</div>;
        break;
      }

    }
    console.log(showCurrentItem);
    return (
      <React.Fragment>
        <TitleComp title="解决方案" btnTxt=""></TitleComp>
        <TabChange tabTxtArr={this.state.tabTxt} selectItem={this.selectItem}></TabChange>

        <div className="block_container">
          <div className="home_p_24">
            {showCurrentItem}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Solution;