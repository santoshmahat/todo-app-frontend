import React from "react";
import { Form, Row, Col, Input, Button } from "antd";
import { Field } from "redux-form";
import InputField from "../../common/components/InputField";
const FormItem = Form.Item;

const required = value => {
  return value ? undefined : "This field is required";
};
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export default ({ handleInputFieldChange, loginHandler }) => {
  console.log();
  return (
    <Form>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Email">
            <Field
              validate={[required, email]}
              name="email"
              component={InputField}
              type="text"
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Password">
            <Field
              validate={required}
              name="password"
              component={InputField}
              type="text"
            />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <FormItem>
          <Button type="primary" onClick={loginHandler}>
            Login
          </Button>
        </FormItem>
      </Row>
    </Form>
  );
};
