import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;

export default ({ handleInputFieldChange, saveTodoFormData }) => {
  console.log();
  return (
    <Form>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Title">
            <Input type="text" name="title" onChange={handleInputFieldChange} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Date">
            <Input type="text" name="date" onChange={handleInputFieldChange} />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem label="Description">
            <Input.TextArea rows={8} name="description" onChange={handleInputFieldChange} />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormItem>
            <Button type="primary" onClick={saveTodoFormData} >Save</Button>
          </FormItem>
          <FormItem>
            <Link to="/">
              <Button type="danger">Cancel</Button>
            </Link>
          </FormItem>
        </Col>
      </Row>
    </Form>
  )
}
