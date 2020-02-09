// https://www.youtube.com/watch?v=o-nCM1857AQ&t=333s

import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import Twitter from "../../../icons/twitter_mini.svg";
import { SocialIcons, SocialIcon } from "../common/style";
import { AuthPage } from "../../../theme/global";

const RegisterWrapper = styled.div`
  display: flex;

  background-image: url("/assets/bg-pattern.png");
  background-color: #6658dd;

  .register-text {
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

const RegisterFooter = styled.div`
  width: 400px;
  height: 50px;
  margin-top: 10px;
  color: #d4d7d9;
`;

// LoginWrapper.attrs({
//   className: "tm-login-page"
// });

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          username: "",
          email: "",
          password: "",
          accept: false
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
      <AuthPage className="tm-register-page">
        <Card style={cardStyle}>
          <FormHeader>
            <h1>Task Master</h1>
            <p className="form-header-text">
              Don't have an account? Create your account, it takes less than a
              minute
            </p>
          </FormHeader>

          <Form
            onSubmit={this.handleSubmit}
            className="register-form"
            layout="vertical"
            labelAlign="left"
          >
            <Form.Item label="Username" style={formItemStyle}>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "Please input your username!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  allowClear
                  placeholder="Username..."
                />
              )}
            </Form.Item>
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
              {getFieldDecorator("accept", {
                valuePropName: "checked",
                initialValue: false
              })(
                <Checkbox
                  style={{
                    width: "25%",
                    margin: "10px 0",
                    textAlign: "start"
                  }}
                >
                  I accept
                </Checkbox>
              )}
              <Button type="link" href="#" style={{ paddingLeft: "0" }}>
                Terms and Conditions
              </Button>
              <Button
                disabled={!this.props.form.getFieldValue("accept")}
                className="register-form-button"
                htmlType="submit"
                type="primary"
                loading={this.state.loading}
                block
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <FormFooter>
            <p>Sign Up with</p>

            <SocialIcons className="social-icons-box">
              <SocialIcon color="red">G</SocialIcon>
              <SocialIcon color="#3b5998">f</SocialIcon>
              <SocialIcon color="#1da1f2">
                <Twitter width="12" height="12"></Twitter>
              </SocialIcon>
            </SocialIcons>
          </FormFooter>
        </Card>

        <RegisterFooter className="register-footer">
          <div className="">
            Already have an account?
            {/* <Button type="link" href="#" style={{ color: "#fff" }}> */}
            <Link to="/login" style={{ color: "#fff", marginLeft: "10px" }}>
              Login
            </Link>
            {/* </Button> */}
          </div>
        </RegisterFooter>
      </AuthPage>
    );
  }
}

const Register = Form.create({ name: "register_form" })(RegisterForm);

export default Register;
