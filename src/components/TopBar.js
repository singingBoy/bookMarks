import React from 'react';
import './tobBar.less';
import {Icon, Modal, Input} from 'antd';
import {connect} from 'dva';

@connect()
class TopBar extends React.Component {
  // 构造
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      visible: false,
    }
  }

  reset =()=>{
    this.userNameInput.focus();
    this.setState({ userName: '' }); 
  }

  onChange =(e)=>{
     this.setState({ userName: e.target.value });
  }

  commit=()=>{
    this.hide();
    console.log(this.state.userName);
  }

  hide = ()=>{
    this.setState({visible: false});
  }

  show = ()=>{
    this.setState({visible: true});
  }

  render(){
  	return (
	    <div className="tobBarContain">
	        <img className="logoImg" src={require('../assets/bookMarks.png')}/>
	      	<div className="loginBtn">
	        	<Icon type="github" onClick={this.show}/>
	      	</div>
          <Modal 
              title="选择用户的数据"
              visible={this.state.visible}
              onOk={this.commit}
              onCancel={this.hide}
          >
            <Input
              placeholder="Enter your userName"
              prefix={<Icon type="user" />}
              suffix={<Icon type="close-circle" onClick={this.reset} />}
              value={this.state.userName}
              onChange = {this.onChange}
              ref={node => this.userNameInput = node}
            />
          </Modal>
	    </div>
	  );
  }
}

TopBar.propTypes = {};

export default TopBar;
