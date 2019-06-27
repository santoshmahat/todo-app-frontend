import React, { Component } from "react";
import { Spin } from "antd";
import { connect } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import LoginForm from "../components/LoginForm";
import actions from "../redux/actions";
import { Field, reduxForm } from "redux-form";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  loginHandler = data => {
    const { dispatch, history } = this.props;
    console.log("DATA", data);
    axios
      .post("http://localhost:5000/api/users/login", data)
      .then(response => {
        const { token } = response.data;
        window.localStorage.setItem("token", token);
        const user = jwtDecode(token);
        console.log("user", user);
        dispatch({
          type: actions.LOAD_CURRENT_ACCOUNT,
          payload: user
        });
        history.push("/");
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  // onClickButton = data => {
  //   console.log("CLICK", data);
  // };

  render() {
    const { handleSubmit } = this.props;
    const { loading } = this.state;
    return (
      <Spin spinning={loading}>
        <LoginForm
          handleInputFieldChange={this.handleInputFieldChange}
          loginHandler={handleSubmit(this.loginHandler)}
        />
        {/* 
        <div>
          <label htmlFor="Email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="Passwor">Password</label>
          <Field name="password" component="input" type="text" />
        </div>
        <button onClick={handleSubmit(this.loginHandler)}>Submit</button> */}
      </Spin>
    );
  }
}

const loginFormConnect = reduxForm({
  form: "Login"
})(Login);

export default connect(
  store => {
    return {
      user: store.user
    };
  },
  dispatch => ({ dispatch })
)(loginFormConnect);
