import React,{Component} from 'react';
import TabChange from '../../components/tabChange';
import TitleComp from '../../components/titleComp';

class ContentSetting extends Component{
  constructor(props){
    super(props);
    this.state={
      tabTxt:['知识图库','综合说明','程度说明'],
      tabCategory:0
    };
  }
  selectItem=(currentIndex)=>{
    this.setState({
      tabCategory:currentIndex
    })
  }
  render(){
    let {tabCategory}=this.state;
    return(
      <React.Fragment>
        <TitleComp title="内容设置" btnTxt="" handleFn=""></TitleComp>
        <TabChange tabTxtArr={this.state.tabTxt} selectItem={this.selectItem}></TabChange>
        <div className="block_container">
          <div className="home_p_24">
              {
                tabCategory===0?(
                  <div>
                    知识图库
                  </div>
                ):null
              }
              {
                tabCategory===1?(
                  <div>
                    综合说明
                  </div>
                ):null
              }
              {
                tabCategory===2?(
                  <div>
                    程度说明
                  </div>
                ):null
              }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default ContentSetting;