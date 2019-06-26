import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Spin } from 'antd';
import axios from 'axios';
import actions from '../redux/actions';

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      loading: false
    }
  }
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
    this.fetchTodoList();
  }

  fetchTodoList = () => {
    const { dispatch } = this.props;
    this.setState({
      loading: true
    })
    axios.get("http://localhost:5000/api/todos")
      .then((response) => {
        this.setState({loading: false})
        dispatch({
          type: actions.FETCH_TODO_LIST,
          payload: response.data.todos
        })
      }).catch((error) => {
        this.setState({loading: false})
        console.log("error", error)
      })
  }

  render() {
    console.log("todos", this.props.todo)
    const { todo: { todos } } = this.props;
    const { loading } = this.state;
    return (
      <Spin spinning={loading}>
        <h2>Todo List Table</h2>
        <Link to="/todo/add">Add New Todo</Link>
        <Table
          columns={this.columns}
          dataSource={todos}
        />
      </Spin>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    todo: store.todo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);