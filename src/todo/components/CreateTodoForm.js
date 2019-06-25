import React from 'react';
import { Row, Col, Form, Input } from 'antd';

const FormItem = Form.Item;

export default () => {
  console.log();
  return (
    <Form>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem>
            <Input type="text" name="title" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem>
            <Input type="text" name="date" />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem>
            <Input.TextArea rows={8} name="description" />
          </FormItem>
        </Col>
      </Row>
    </Form>
  )
}
