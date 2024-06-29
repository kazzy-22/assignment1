import React, { useState } from "react";
import {
  Button,
  Form,
  DatePicker,
  Select,
  Space,
  Table,
  Pagination,
  Modal,
  Input,
  Image,
} from "antd";
import "./template.scss";
import add from './add-folder 2.png';
const Template = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const columns = [
    {
      title: "Template ID",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Template Name",
      dataIndex: "Template",
      key: "Template",
    },
    {
      title: "Region",
      dataIndex: "Region",
      key: "Region",
    },
    {
      title: "Modified By",
      key: "by",
      dataIndex: "by",
    },
    {
      title: "Modified On",
      key: "on",
      dataIndex: "on",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <span>
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
          <span>
            <i class="fa-solid fa-trash"></i>
          </span>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "T01",
      Template: "US-FDA-01",
      Region: "USA",
      by: "CuneSoft Support",
      on: "01-01-1970",
    },
    {
      key: "2",
      name: "T01",
      Template: "US-FDA-02",
      Region: "USA",
      by: "CuneSoft Support",
      on: "01-01-1970",
    },
    {
      key: "3",
      name: "T01",
      Template: "Europe-CESP-01",
      Region: "INDIA",
      by: "CuneSoft Support",
      on: "01-01-1970",
    },
  ];

  return (
    <div className="template-container">
      <div className="template-header">
        <h4>Templates</h4>
        <Button type="primary" onClick={()=>setOpen(true)}>+ Create Template</Button>
      </div>
      <div className="filter">
        <Form.Item label="Start Date">
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item label="End Date">
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item label="Region">
          <Select>
            <Select.Option>USA</Select.Option>
            <Select.Option>INDIA</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">
            <i class="fa-solid fa-magnifying-glass"></i> Search
          </Button>
        </Form.Item>
      </div>
      <div className="table-container">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      <div className="table-footer">
        <Pagination
          size="small"
          total={3}
          defaultCurrent={1}
          defaultPageSize={3}
        />
      </div>
      <Modal
        open={open}
        title="Create Template"
        onOk={handleOk}
closable={false}
        className="create-modal"
        footer={[
         
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
          >
           <i class="fa-solid fa-server"></i> Modify Template
          </Button>,
          <Button
            key="link"
            type="primary"
            onClick={handleOk}
          >
            <i class="fa-solid fa-check"></i> Save
          </Button>,
           <Button key="back" onClick={handleCancel}>
          <i class="fa-solid fa-xmark"></i> Cancel
         </Button>,
        ]}
      >
        <div className="modal-body-container">
        <div className="create-filter">
        <Form.Item label="Name">
          <Input  />
        </Form.Item>
       
        <Form.Item label="Region">
          <Select>
            <Select.Option>USA</Select.Option>
            <Select.Option>INDIA</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">
            + Create Structure
          </Button>
        </Form.Item>
      </div>
      <div className="img-container">
        <Image src={add} />
      </div>
        </div>
      </Modal>
    </div>
  );
};
export default Template;
