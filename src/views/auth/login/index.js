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
  background-color: #369aff;
  color: #929ba3;
  text-align: center;

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
`;

const FormFooter = styled.div`
  width: 100%;
  height: 75px;
  color: #929ba3;
`;

const LoginFooter = styled.div`
  width: 400px;
  height: 50px;
  color: #d4d7d9;
`;

const SocialIcons = styled.div`
  margin: 0 auto;
  width: 200px;
  display: flex;
  justify-content: space-evenly;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 1.2em;
  border: 2px solid ${props => (props.color ? props.color : "#ccc")};
  border-radius: 50%;
  color: ${props => (props.color ? props.color : "#ccc")};
  cursor: pointer;

  &:hover {
    background: #f5f5f1;
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
      marginBottom: "12px",
      textAlign: "start"
    };
    const textColor = "#929ba3";

    return (
      <LoginPage className="tm-login-page">
        <Card style={cardStyle}>
          <FormHeader>
            <h2>TASK MASTER</h2>
            <p className="login-text">
              Enter your email address and password to access your workspace.
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

            <Form.Item style={formItemStyle}>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: false
              })(
                <Checkbox
                  style={{
                    width: "40%",
                    margin: "10px 0",
                    textAlign: "start"
                  }}
                >
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
              <SocialIcon color="red">G</SocialIcon>
              <SocialIcon color="blue">f</SocialIcon>
              <SocialIcon color="#4fc6e1">t</SocialIcon>
            </SocialIcons>
          </FormFooter>
        </Card>

        <LoginFooter className="login-footer">
          <div className="">
            <Button type="link" href="#" style={{ color: "#fff" }}>
              Forgot your password?
            </Button>
          </div>
          <div className="">
            Don't have an account?
            <Button type="link" href="#" style={{ color: "#fff" }}>
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
