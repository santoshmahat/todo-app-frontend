import React, { Component } from 'react';
import { Spin } from 'antd';
import LoginForm from '../components/LoginForm';

class Login extends Component {

  constructor(){
    super();
    this.state = {
      loading:false,
      email:'',
      password:''
    }
  }

  handleInputFieldChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  loginHandler = () => {

  }

  render(){
    const { loading } = this.state;
    return (
      <Spin spinning={loading}>
        <LoginForm 
          handleInputFieldChange={this.handleInputFieldChange}
          loginHandler={this.loginHandler}
        />
      </Spin>
    )
  }
}
export default Login;