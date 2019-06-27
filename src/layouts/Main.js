import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import './style.css'

class Main extends Component {
  render() {
    const { children } = this.props;
    console.log("prooooops", children)
    return (
      <div>
        <Header />
        <Layout.Content>
          <div className="container">
            {children}
          </div>
        </Layout.Content>
        <Footer />
      </div>
    )
  }
}
export default Main;