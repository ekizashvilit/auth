import { Form, Input } from "antd";

const TextInput = ({ label, name }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: `Please input your ${name}!`,
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};
export default TextInput;
