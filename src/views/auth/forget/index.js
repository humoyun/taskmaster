// https://www.youtube.com/watch?v=o-nCM1857AQ&t=333s

import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
import { Form, Icon, Input, Button } from "antd";
import { AuthPage } from "../../../theme/global";

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

const ResetFooter = styled.div`
  width: 400px;
  height: 50px;
  margin-top: 10px;
  color: #d4d7d9;
`;

class ResetForm extends React.Component {
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
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        console.log("Received values of form: ", values);
        this.props.form.setFieldsValue({
          email: ""
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
      <AuthPage className="tm-reset-page">
        <Card style={cardStyle}>
          <FormHeader>
            <h1>Task Master</h1>
            <p className="form-header-text">
              Enter your email address and we'll send you an email with
              instructions to reset your password.
            </p>
          </FormHeader>

          <Form
            onSubmit={this.handleSubmit}
            className="reset-form"
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
            <Button
              className="register-form-button"
              htmlType="submit"
              type="primary"
              loading={this.state.loading}
              block
            >
              Reset Password
            </Button>
          </Form>
        </Card>

        <ResetFooter className="reset-footer">
          <div className="">
            Back to Login
            <Link
              to="/auth/login"
              style={{ color: "#fff", marginLeft: "10px" }}
            >
              Login
            </Link>
          </div>
        </ResetFooter>
      </AuthPage>
    );
  }
}

const Reset = Form.create({ name: "reset_form" })(ResetForm);

export default Reset;
