import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';
import axios  from 'axios';

class Signup extends Component {

  constructor(){
    super();
    this.state = {
      firstName:'',
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
      [event.target.name]:event.target.value
    })
  }


  handleSelectFieldChange = (value, fieldName) => {
    console.log("value", value, fieldName)
    this.setState({
      [fieldName]:value
    })
  }

  handleFileFieldChange = (event) => {
    this.setState({
      avatar:event.target.files[0]
    })
  }


  signupFormHandler = () => {
    const userData = this.state;
    const formData = new FormData();
    for(let key in userData){
      formData.append(key, userData[key]);
    }
    axios.post("http://localhost:5000/api/users", formData)
    .then((response)=> {
      console.log("responser", response)
    }).catch((error)=>{
      console.log("error", error)
    })

  }


  render(){
    console.log("state", this.state)
    return (
      <div>
        hello
        <SignupForm  
          handleInputFieldChange={this.handleInputFieldChange}
          handleSelectFieldChange={this.handleSelectFieldChange}
          handleFileFieldChange={this.handleFileFieldChange}
          signupFormHandler={this.signupFormHandler}
        />
      </div>
    )
  }
}

export default Signup;