import React from 'react';
import BodyChild from './bodychild'
export default class BodyIndex extends React.Component {
  //React 事件与数据的双向绑定
  constructor() {
    super(); //调用基类的所有的初始化方法
    this.state = {
      username: "Parry",
      age:20
    };//初始化赋值
  }

  handleChildValueChange(event){
    this.setState({age: event.target.value});//取出子页面的值
  }

  changeUserInfo(){
    this.setState({age:50});
  };

  render() {
    return (
      <div>
        <h2>页面主题内容</h2>
      <p>name: {this.state.username} </p>
        <p>age: {this.state.age}</p>
        <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
        <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>
    )
  }
}
