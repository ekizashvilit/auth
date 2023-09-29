import { Button, Form, Input } from "antd";
import TextInput from "../../inputs/textInpt/TextInput";
import { useGlobalContext } from "../../../context";

const LoginForm = ({ onFinish, onFinishFailed }) => {
  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <TextInput label="ტელ. ნომერი / პირადი ნომერი" name="username" />
      <TextInput label="პაროლი" name="password" />

      <div className="mb-8 text-right custom-font text-xs text-black">
        დაგავიწყდა პაროლი?{" "}
        <span className="underline text-grRed cursor-pointer ">
          პაროლის აღდგენა
        </span>
      </div>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button block type="primary" htmlType="submit">
          შესვლა
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
