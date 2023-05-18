import { Button, Form, Input } from 'antd';
import { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin && (
        <Form name="login" initialValues={{ remember: true }} labelCol={{ span: 8 }}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入您的用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="手机号"
            name="number"
            rules={[{ required: true, pattern: /^1\d{10}$/, message: '请输入正确的手机号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入您的密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={() => setIsLogin(true)}>
              登录
            </Button>
          </Form.Item>
        </Form>
      )}
      ;
    </>
  );
};
export default Login;
