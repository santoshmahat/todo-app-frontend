import React, { Component } from 'react';
import CreateTodoForm from '../components/CreateTodoForm';
import axios from 'axios';
import { message, Spin } from 'antd';


class CreateTodo extends Component {


  constructor() {
    super();
    this.state = {
      title: '',
      date: '',
      description: '',
      loading:false
    }
  }

  handleInputFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  saveTodoFormData = () => {
    const { history } = this.props;
    this.setState({loading:true})
    axios.post("http://localhost:5000/api/todos", this.state )
      .then((response) => {
        console.log("response", response)
        this.setState({loading:false})
        history.push("/");
        message.success("Todo is created Successfully")
      }).catch((error) => {
        console.log("error", error)
        this.setState({loading:false})
        message.error("Failed.")
      })
  }

  render() {
    const { loading } = this.state;
    return (
      <Spin spinning={loading}>
        <h2>Add New Todo </h2>
        <CreateTodoForm
          handleInputFieldChange={this.handleInputFieldChange}
          saveTodoFormData={this.saveTodoFormData}
        />
      </Spin>
    )
  }
}

export default CreateTodo;