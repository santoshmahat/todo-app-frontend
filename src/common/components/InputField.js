import React from "react";
import { Input } from "antd";

const InputField = ({ input, meta, type }) => {
  const { touched, error } = meta;
  const hasError = touched && error !== undefined;
  return (
    <div>
      <Input {...input} type={type} />
      {hasError && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputField;
