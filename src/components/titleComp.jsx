import React,{Component} from 'react';
import {Button} from 'antd';

class TitleComp extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return(
      <div className="bg_fff m_b_10 d_flex j_c_btw p_l_r_16">
        <h1 className="font_size_20">{this.props.title}</h1>
        {
          this.props.btnTxt?<Button type="primary">{this.props.btnTxt}</Button>:null
        }
      </div>
    )
  }
}
export default TitleComp;