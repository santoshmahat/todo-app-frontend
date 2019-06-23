import React from 'react';
import { Form, Row, Col, Input, Select, Button } from 'antd';

const SelectOption = Select.Option;
const FormItem = Form.Item;

export default ({signupFormHandler, handleInputFieldChange, handleSelectFieldChange, handleFileFieldChange}) => {
  console.log()
  return (
    <Form>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="First Name">
            <Input type="text" name="firstName"  onChange={handleInputFieldChange} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Last Name">
            <Input type="text" name="lastName" onChange={handleInputFieldChange} />
          </FormItem>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Gender">
            <Select name="gender" onChange={(value) => handleSelectFieldChange(value, "gender")}>
              <SelectOption value="">Select</SelectOption>
              <SelectOption value="Male">Male</SelectOption>
              <SelectOption value="Female">Female</SelectOption>
            </Select>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Role">
            <Select name="role" onChange={(value) => handleSelectFieldChange(value, "role")}>
              <SelectOption value="">Select</SelectOption>
              <SelectOption value="Paid">Paid</SelectOption>
              <SelectOption value="Free">Free</SelectOption>
            </Select>
          </FormItem>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="Email">
            <Input type="text" name="email" onChange={handleInputFieldChange} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Password">
            <Input type="text" name="password" onChange={handleInputFieldChange} />
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <FormItem label="Avatar">
            <Input type="file" name="avatar" onChange={handleFileFieldChange} />
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <FormItem>
           <Button type="primary" onClick={signupFormHandler}>Save</Button>
          </FormItem>
        </Col>
      </Row>
    </Form>
  )
}