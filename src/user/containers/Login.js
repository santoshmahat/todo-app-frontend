import React, { Component } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import axios  from 'axios';
import jwtDecode from 'jwt-decode';
import LoginForm from '../components/LoginForm';
import actions from '../redux/actions';

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

      const { token } = response.data;
      window.localStorage.setItem("token", token);
      const user = jwtDecode(token);
      console.log("user", user)
      dispatch({
        type:actions.LOAD_CURRENT_ACCOUNT,
        payload:user,
      })
      history.push("/")

    }).catch((error)=> {
      console.log("error", error)
    })

  }

  render(){
    console.log("login prop", this.props.user)
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



