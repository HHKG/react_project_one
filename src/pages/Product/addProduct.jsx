import React, { Component } from 'react';
import TitleComp from '../../components/titleComp';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  // 返回产品数据列表
  goback = () => {
    window.history.back(-1);
  }
  render() {
    return (
      <div>
        <TitleComp title="新增产品" btnTxt="<返回" handleFn={this.goback} />
        <div className="block_container">
          <React.Fragment>
            <div className="home_p_24">
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default AddProduct;