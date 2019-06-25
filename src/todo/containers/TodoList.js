import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';

class TodoList extends Component {


  columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Date",
      dataIndex: "date",
    }
  ];


  componentDidMount() {

  }

  fetchTodoList = () => {
    axios.get("http://localhost:5000/api/todos")
      .then((response) => {
        console.log("response", response)
      }).catch((error) => {
        console.log("error", error)
      })
  }

  render() {
    return (
      <div>
        <h2>Todo List Table</h2>
        <Table
          columns={this.columns}
          dataSource={[]}
        />
      </div>
    )
  }
}

export default TodoList;