import React, { Component } from 'react';
import { Table } from 'antd';

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