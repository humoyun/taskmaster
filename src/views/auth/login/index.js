// https://www.youtube.com/watch?v=o-nCM1857AQ&t=333s

import React from "react";
import { Card } from "antd";
import styled from "styled-components";
import { Form, Icon, Input, Button, Checkbox } from "antd";
// import "./style.less";

const LoginPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("/assets/bg-pattern.png");
  background-color: #6658dd;
  color: #929ba3;

  .login-text {
    color: #929ba3;
    font-size: 0.9rem;
  }
`;

const LoginWrapper = styled.div`
  display: flex;

  background-image: url("/assets/bg-pattern.png");
  background-color: #6658dd;

  .login-text {
    font-size: 0.9rem;
  }
`;

const FormHeader = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
`;

const FormFooter = styled.div`
  width: 100%;
  height: 100px;
  color: #929ba3;
  text-align: center;
`;

const LoginFooter = styled.div`
  width: 400px;
  height: 50px;
  text-align: center;
`;

const SocialIcons = styled.div`
  width: 200px;
  display: flex;

  .social-icon {
    width: ;
  }
`;

// LoginWrapper.attrs({
//   className: "tm-login-page"
// });

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    // console.log(this.props.form.getFieldsValue(["password"]));
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        console.log("Received values of form: ", values);
        this.props.form.setFieldsValue({
          email: "",
          password: "",
          remember: false
        });

        setTimeout(() => {
          this.setState({ loading: false });
        }, 1500);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const cardStyle = {
      width: 400,
      borderRadius: 5
      // backgroundColor: "#f5f6f8"
    };
    const formItemStyle = {
      marginBottom: "12px"
    };
    const textColor = "#929ba3";

    return (
      <LoginPage className="tm-login-page">
        <Card style={cardStyle}>
          <FormHeader>
            <h2>TASK MASTER</h2>
            <p className="login-text">
              Don't have an account? Create your account, it takes less than a
              minute
            </p>
          </FormHeader>

          <Form
            onSubmit={this.handleSubmit}
            className="login-form"
            layout="vertical"
            labelAlign="left"
          >
            <Form.Item label="Email" style={formItemStyle}>
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    message: "Please input your email!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email..."
                />
              )}
            </Form.Item>

            <Form.Item label="Password" style={formItemStyle}>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Password!"
                  }
                ]
              })(
                <Input.Password
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  allowClear
                  placeholder="Password..."
                />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: false
              })(
                <Checkbox style={{ width: "100%", margin: "10px 0" }}>
                  Remember me
                </Checkbox>
              )}
              <Button
                className="login-form-button"
                htmlType="submit"
                type="primary"
                loading={this.state.loading}
                block
              >
                Log in
              </Button>
            </Form.Item>
          </Form>

          <FormFooter>
            <p>Sign in with</p>

            <SocialIcons className="social-icons-box">
              <div className="social-icon">G</div>
              <div className="social-icon">F</div>
              <div className="social-icon">T</div>
            </SocialIcons>
          </FormFooter>
        </Card>

        <LoginFooter className="login-footer">
          <div className="">
            <Button type="link" href="#">
              Forgot your password?
            </Button>
          </div>
          <div className="">
            Don't have an account?
            <Button type="link" href="#">
              Sign Up
            </Button>
          </div>
        </LoginFooter>
      </LoginPage>
    );
  }
}

const Login = Form.create({ name: "login_form" })(LoginForm);

export default Login;
