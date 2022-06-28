import React, { useState, useEffect } from "react";
// import posts from '../data/posts.json'
import {
  Col,
  Row,
  Button,
  Breadcrumb,
  Dropdown,
  Menu,
  message,
  Space,
  Table,
  Popconfirm,
  Form,
  Modal,
  Input
} from "antd";
import AgLayout from "../components/Layout";
import {
  PlusCircleOutlined,
  DownOutlined,
  FormOutlined,
  DesktopOutlined,
  DeleteOutlined,
  FunnelPlotOutlined,
} from "@ant-design/icons";

// import Link from "next/link";

const Index = (props) => {
  // const [datajson, setData] = useState(posts); 
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);



  const [data, setData1] = useState([]);
  for (let i = 1; i < 101; i++) {
    data.push({
      key: i,
      name: `Joe Black ${i}`,
      tel: "0891234567",
      company: "เอบีซี จำกัด",
      contact: "15 พ.ค. 2563 12.34น."
    });
  }

  const columns = [
    {
      title: "ผู้ติดต่อ",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "เบอร์โทรศัพท์มือถือ",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "บริษัท",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "ติดต่อล่าสุด",
      key: "contact",
      dataIndex: "contact",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => editdata(record)}>Edit {record.name}</a>
          <Popconfirm
            title="ต้องการจะลบผู้ติดต่อ ?"
            onConfirm={() => handleDelete(record.key)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];


  const handleMenuClick = (value) => {
    message.info("Click on menu item.");
    console.log(value.key);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Select to display",
          key: "1",
          icon: <DesktopOutlined />,
        },
        {
          label: "Filter",
          key: "2",
          icon: <FunnelPlotOutlined />,
        },
        {
          label: "Delete this Filter",
          key: "3",
          icon: <DeleteOutlined />,
        },
      ]}
    />
  );




  const editdata = (record) => {
    console.log(record)
    // form.setFieldsValue({ name: '', tel: '', company: '', contact: '', ...record });
    // setEditingKey(record.key);

  };

  const onFinish = (values) => {
    console.log('Success:', values);
    setIsModalVisible(false);
    form.resetFields();
    message.success("เพิ่มข้อมูลสำเร็จ");
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    message.error("ยกเลิกการเพิ่มข้อมูล");
  };




  const handleDelete = (key) => {
    console.log(key);
    const newData = data.filter(item => item.key !== key);
    setData1(newData);
    message.success("ลบข้อมูลสำเร็จ");
  };

  const cancel = (value) => {
    console.log(value);
    message.error("ลบข้อมูลล้มเหลว");
  };

  return (
    <AgLayout>
      <Row>
        <Col span={8}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Contact Person List</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={4} offset={12}>
          <Button onClick={showModal}>
            <PlusCircleOutlined /> Add Contact Person
          </Button>
          <Modal title="Add Contact Person" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
            footer={[

            ]}>
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="ผู้ติดต่อ"
                name="name"
                rules={[{ required: true, message: 'กรุณากรอกข้อมูลผู้ติดต่อ !' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="เบอร์โทรศัพท์มือถือ"
                name="tel"
                rules={[{ required: true, message: 'กรุณากรอกข้อมูลเบอร์โทรศัพท์มือถือ !' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="บริษัท"
                name="company"
                rules={[{ required: true, message: 'กรุณากรอกข้อมูลบริษัท !' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="ติดต่อล่าสุด"
                name="contact"
                rules={[{ required: true, message: 'กรุณากรอกข้อมูลการติดต่อล่าสุด !' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  ยืนยัน
                </Button>
                <Button type="danger" onClick={handleCancel} style={{ marginLeft: "10px" }}>
                  ยกเลิก
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div>Filter Data : Costomer 2021</div>
        </Col>
        <Col span={4} offset={12}>
          <Dropdown overlay={menu}>
            <Button>
              <Space>
                <FormOutlined />
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />

      {/* <div>
        {posts.map((data,index) =>
          <div
            key={index}
            style={{ data: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{data.name}</h2>
            <p>{data.tel}</p>
            <p>{data.contact}</p>
            <p>{data.company}</p>

          </div>)}
      </div> */}
      

    </AgLayout>
  );
};

export default Index;
