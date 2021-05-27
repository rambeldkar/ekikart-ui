import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  Divider,
  Modal,
  Form,
  Input,
  TimePicker,
  Row,
  Col,
  message,
} from "antd";
import { PlusOutlined, FieldTimeOutlined } from "@ant-design/icons";
const { Option } = Select;

const selectOnChange = (value) => {
  console.log(`selected ${value}`);
};
/*----------------All Message--------------
message.success({
  content: 'This is a message of success',
  duration: 2
});
message.error({
  content: 'This is an error message',
  duration: 2
});
message.warning ({
  content: 'This is a warning message',
  duration: 2
});
message.info ({
  content: 'This is a normal message',
  duration: 2
});
------------------------------------------*/

const ShiftDetailsForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const format = "HH:mm A";
  return (
    <Modal
      visible={visible}
      centered
      title="Add reporting hours"
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="reporting_hours_form"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="shiftName"
          label="Shift name"
          rules={[
            {
              required: true,
              message: "Please enter shift name",
            },
          ]}
        >
          <Input placeholder="Enter shift name" />
        </Form.Item>
        <Form.Item>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="startTime"
                label="Start time"
                rules={[
                  { required: true, message: "Please enter  start time" },
                ]}
                style={{
                  display: "inline-block",
                  width: "100%",
                  marginBottom: "0px",
                }}
              >
                <TimePicker format={format} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="endTime"
                label="End time"
                rules={[{ required: true, message: "Please enter end time" }]}
                style={{
                  display: "inline-block",
                  width: "100%",
                  marginBottom: "0px",
                }}
              >
                <TimePicker format={format} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="timezone"
          label="Timezone"
          rules={[
            {
              required: true,
              message: "Please enter timezone",
            },
          ]}
        >
          <Select
            placeholder="Select timezone"
            className="locationSelect"
            dropdownClassName="locationDropdown"
            style={{ width: "100%" }}
          >
            <Option value="eastern"> Eastern Time Zone</Option>
            <Option value="central"> Central Time Zone</Option>
            <Option value="mountain"> Mountain Time Zone</Option>
            <Option value="arizona"> Mountain Time Zone - Arizona</Option>
            <Option value="pacific"> Pacific Time Zone</Option>
            <Option value="alaska"> Alaska Time Zone</Option>
            <Option value="hawaii"> Hawaii-Aleutian Time Zone</Option>
            <Option value="samoa"> Samoa Time Zone</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Allday = (props) => {
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
    message.success({
      content: "This is a message of success",
      duration: 2,
    });
  };

  return (
    <>
      <ShiftDetailsForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Select
        defaultValue={props.selectvalue}
        className="locationSelect"
        dropdownClassName="locationDropdown"
        style={{ width: 160 }}
        onChange={selectOnChange}
        dropdownRender={(menu) => (
          <div>
            {menu}
            <Divider style={{ margin: "4px 0" }} />
            <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
              <Link
                to=""
                onClick={() => {
                  setVisible(true);
                }}
                style={{
                  flex: "none",
                  padding: "0px",
                  display: "block",
                  cursor: "pointer",
                }}
              >
                <PlusOutlined /> Add reporting hours
              </Link>
            </div>
          </div>
        )}
      >
        <Option value="Allday">
          <FieldTimeOutlined /> All day
        </Option>
        <Option value="Shift1">
          <FieldTimeOutlined /> Shift 1
        </Option>
      </Select>
    </>
  );
};
export default Allday;
