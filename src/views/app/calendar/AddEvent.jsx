import React from "react";
import { Form, Icon, Input, Modal, Select } from "antd";
const { Option } = Select;

function AddEvent(props) {
  const colors = [
    { label: "primary", value: "#6658dd" },
    { label: "success", value: "#1abc9c" },
    { label: "danger", value: "#f1556c" },
    { label: "info", value: "#4fc6e1" },
    { label: "warning", value: "#f7b84b" },
    { label: "dark", value: "#323a46" }
  ];

  const handleOk = () => {
    props.closeModal();
  };

  const handleCancel = () => {
    props.closeModal();
  };

  const handleSelect = e => {
    console.log(e);
  };

  const formItemStyle = {
    marginBottom: "12px",
    textAlign: "start"
  };

  const capitalize = str => `${str[0].toUpperCase()}${str.substr(1)}`;

  return (
    <div>
      <Modal
        title="Add New Event"
        width={400}
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form className="add-event-form" layout="vertical" labelAlign="left">
          <Form.Item label="Event name" style={formItemStyle}>
            {/* {<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} */}
            <Input allowClear placeholder="Event name..." />
          </Form.Item>

          <Form.Item label="Choose event color" style={formItemStyle}>
            <Select defaultValue="Primary" onSelect={handleSelect}>
              {colors.map(color => (
                <Option key={color.label} value={color.value}>
                  {capitalize(color.label)}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AddEvent;
