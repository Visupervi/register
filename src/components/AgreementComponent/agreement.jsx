import React, {Component} from "react";
import {List, InputItem, Button, WingBlank, Checkbox, Flex} from 'antd-mobile';

import '../../../assets/css/agreement.less'

class Agreement extends Component {
  constructor(props) {
    super(props);
    this.timer="";
    this.state = {
      isShow: false,
      isChecked:false
    }
  }
  //1.给父组件传值，让其checkBox选中，2.关闭子组件
  handleFun(msg){
    clearInterval(this.timer);
    this.setState({
      isShow:false,
      isChecked:true
    });
    this.props.getMsg({isShow:this.state.isShow,isChecked:this.state.isChecked});

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    clearInterval(this.timer);
    this.timer = setInterval(()=>{
      console.log(this.props.msg);
      this.setState({
        isShow:this.props.msg.isShow,
        isChecked:!this.props.msg.isChecked,
      },()=>{
        clearInterval(this.timer)
      })
    },0);

}
componentWillUnmount() {

}

  render() {
    if (this.state.isShow) {
      return (
        <div className={"agreement"}>
          <div className={"btn-wrap"}>
            <WingBlank>
              <Button type="primary" onClick={this.handleFun.bind(this)}>同意并继续</Button>
            </WingBlank>
          </div>
        </div>
      )
    } else {
      return ("")
    }
  }
}

export default Agreement;
