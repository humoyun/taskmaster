// https://www.youtube.com/watch?v=o-nCM1857AQ&t=333s

import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import Twitter from "@/icons/twitter_mini.svg";
import { SocialIcons, SocialIcon } from "../common/style";
import myCookie from "@/common/myCookie";
import { connect } from "react-redux";
import { login } from "@/store/actions/auth";

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
  margin-top: 10px;
  color: #d4d7d9;
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log("validateFields: error", values);
        return;
      }
    });

    const { email } = this.props.form.getFieldsValue(["email"]);
    const { password } = this.props.form.getFieldsValue(["password"]);
    const payload = {
      username: email,
      password
    };
    // console.log(this.props);

    this.setState({ loading: true });
    const result = await this.props.loginUser(payload);
    if (result) {
      this.props.history.push("/");
    } else {
      this.props.form.setFieldsValue({
        email: "",
        password: "",
        remember: false
      });
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    console.log("1. componentDidMount");
  }

  componentWillMount() {
    console.log("2. componentWillMount");
  }

  componentWillUpdate() {
    console.log("3. componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("4. componentDidUpdate");
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
    // const textColor = "#929ba3";

    return (
      <React.Fragment>
        <Card style={cardStyle}>
          <FormHeader>
            <h1>Task Master</h1>
            <p className="form-header-text">
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
                  allowClear
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
              <SocialIcon color="#3b5998">f</SocialIcon>
              <SocialIcon color="#1da1f2">
                <Twitter width="12" height="12"></Twitter>
              </SocialIcon>
            </SocialIcons>
          </FormFooter>
        </Card>

        <LoginFooter className="login-footer">
          <div className="">
            <Link to="/auth/forget-password" style={{ color: "#fff" }}>
              Forgot your password?
            </Link>
          </div>
          <div className="">
            Don't have an account?
            <Link
              to="/auth/register"
              style={{ color: "#fff", marginLeft: "10px" }}
            >
              Sign Up
            </Link>
          </div>
        </LoginFooter>
      </React.Fragment>
    );
  }
}

const Login = Form.create({ name: "login_form" })(LoginForm);

// redux staff
const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => dispatch(login(data))
  };
};

export default connect(null, mapDispatchToProps)(Login);
