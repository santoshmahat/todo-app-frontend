import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';
import { message, Spin} from 'antd';
import axios from 'axios';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      role: '',
      avatar: '',
    }
  }

  handleInputFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSelectFieldChange = (value, fieldName) => {
    console.log("value", value, fieldName)
    this.setState({
      [fieldName]: value
    })
  }

  handleFileFieldChange = (event) => {
    this.setState({
      avatar: event.target.files[0]
    })
  }


  signupFormHandler = () => {
    this.setState({
      loading: true
    });
    const { history } = this.props;
    const userData = this.state;
    const formData = new FormData();
    for (let key in userData) {
      formData.append(key, userData[key]);
    }
    axios.post("http://localhost:5000/api/users", formData)
      .then((response) => {
        this.setState({
          loading: false
        });
        history.push("/user/login")
        message.success("You have sauccessfully created your account");
      }).catch((error) => {
        this.setState({
          loading: false
        });
        message.success("Failed");
      })

  }


  render() {
    console.log("state", this.state)
    const { loading } = this.state;
    return (
      <Spin spinning={loading}>
        <SignupForm
          handleInputFieldChange={this.handleInputFieldChange}
          handleSelectFieldChange={this.handleSelectFieldChange}
          handleFileFieldChange={this.handleFileFieldChange}
          signupFormHandler={this.signupFormHandler}
        />
      </Spin>
    )
  }
}

export default Signup;