import React, {Component} from "react";
import {List, InputItem, Button, WingBlank, Checkbox, Flex} from "antd-mobile";
import {createForm} from "rc-form";
import Agreement from "../AgreementComponent/agreement";
import "../../../assets/css/resister.less";

const AgreeItem = Checkbox.AgreeItem;

/**
 * @author Visupervi
 * @date 2019/9/18 12:11
 * @name Register
 * @param  1.isChecked控制checkeBox是否可以选中，2.isShow控制组件是否显示
 @return
 */
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [
        {
          title: "用户名",
          formName: {
            name: "managerName",
            value: ""
          },
          // imageUrl: require("../assets/images/name.png"),
          placeHolder: "请输入用户名"
        },
        {
          title: "企业名",
          formName: {
            name: "custName",
            value: ""
          },
          // imageUrl: require("../assets/images/enterprise.png"),
          placeHolder: "请输入企业名称"
        },
        {
          title: "行业名",
          formName: {
            name: "industry",
            value: ""
          },
          // imageUrl: require("../assets/images/industry.png"),
          placeHolder: "请输入行业名"
        },
        {
          title: "手机号",
          formName: {
            name: "managerPhone",
            value: ""
          },
          // imageUrl: require("../assets/images/tel.png"),
          placeHolder: "请输入联系人手机号"
        },
        {
          title: "职位",
          formName: {
            name: "managerPosition",
            value: ""
          },
          // imageUrl: require("../assets/images/position.png"),
          placeHolder: "请输入系人职位"
        },
        {
          title: "推荐人",
          formName: {
            name: "referrer",
            value: ""
          },
          // imageUrl: require("../assets/images/referrer.png"),
          placeHolder: "请输入推荐人姓名"
        },
        {
          title: "员工规模",
          formName: {
            name: "staffSize",
            value: ""
          },
          // imageUrl: require("../assets/images/staff.png"),
          placeHolder: "请输入员工规模"
        },
        {
          title: "门店规模",
          formName: {
            name: "shopSize",
            value: ""
          },
          // imageUrl: require("../assets/images/store.png"),
          placeHolder: "请输入门店规模"
        },
      ],
      isChecked: false,
      isShow:false
    }
  }

  //提交函数
  submit() {
    this.props.form.validateFields((err, val) => {
      console.log(err, val);
    })
  }

  //取消函数
  cancelSubmit() {
    for (let i = 0; i < this.state.userInfo.length; i++) {
      this.props.form.resetFields()
    }
  }

  //check函数
  handleChecked(event) {
    console.log(event.target.checked);
    console.log("3333");
    console.log(this.state.isShow);
    if(this.state.isChecked){
      console.log(233);
      this.setState({
        isChecked: event.target.checked
      });
      return
    }
    console.log(456);



  }

  //阅读组件弹出
  handleAgreement(event) {
    event.preventDefault();
    this.setState({
      isShow:!this.state.isShow
    })
  }
  //接受子组件传递的值
  getChildMsg(msg){
    this.setState({
      isShow:!msg.isShow,
      isChecked:msg.isChecked
    })
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    const {getFieldProps} = this.props.form;
    return (
      <div className={"list-wrap"}>
        <List>
          {
            this.state.userInfo.map((item, index, array) => {
              return (
                <InputItem
                  {...getFieldProps(item.formName.name, {
                    initialValue: item.formName.value
                  })}
                  clear
                  placeholder={item.placeHolder}
                  key={index}
                  type={item.formName.name}
                >{item.title}</InputItem>
              )
            })
          }
        </List>
        <div className={"checkBox-wrap"}>
          <Flex>
            <Flex.Item>
              <AgreeItem data-seed="logId" onChange={this.handleChecked.bind(this)} checked={this.state.isChecked} >
                <a onClick={this.handleAgreement.bind(this)}>《请阅读用户服务协议》</a>
              </AgreeItem>
            </Flex.Item>
          </Flex>
        </div>
        <div className={"btn-wrap"}>
          <WingBlank>
            <Button type="primary" onClick={this.submit.bind(this)}>提交</Button>
            <Button type="warning" onClick={this.cancelSubmit.bind(this)}>取消</Button>
          </WingBlank>
        </div>
        <Agreement msg={{isShow:this.state.isShow,isChecked:this.state.isChecked}} getMsg={this.getChildMsg.bind(this)}></Agreement>
      </div>
    )
  }
}

const registerComponent = createForm()(Register);
export default registerComponent;