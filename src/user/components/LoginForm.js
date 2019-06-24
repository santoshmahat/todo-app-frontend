import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';

const FormItem = Form.Item;

export default ({handleInputFieldChange, loginHandler}) => {
  console.log()
  return (
    <Form>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Email">
            <Input type="text" name="email"  onChange={handleInputFieldChange} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Password">
            <Input type="text" name="password" onChange={handleInputFieldChange} />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <FormItem>
          <Button type="primary" onClick={loginHandler} >Login</Button>
        </FormItem>
      </Row>
    </Form>
  )
}