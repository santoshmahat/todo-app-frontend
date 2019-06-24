import React, { Component } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import axios  from 'axios';
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
    const { dispatch, history } = this.props;
    console.log("login prop", this.props)
    axios.post("http://localhost:5000/api/users/login", this.state)
    .then((response)=> {
      dispatch({
        type:"user/LOGIN_USER",
        payload:response.data,
      })
      history.push("/")

    }).catch((error)=> {
      console.log("error", error)
    })

  }

  render(){
    console.log("login prop", this.props)
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

// const mapStateToProps = (store)  => {

// }

// const mapDispatchToProps = (dispatch) => {
//   return { 
//     dispatch:dispatch
//   }
// }

export default connect((store)=> {
return {
  user:store.user
}
}, (dispatch)=>({dispatch}))(Login);