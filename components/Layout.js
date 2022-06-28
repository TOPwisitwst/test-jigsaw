import Head from "next/head";
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import {
  Layout,
  Menu,
  Avatar,
  Badge,
} from "antd";
import {
  BellOutlined,
  CaretDownOutlined,
  QrcodeOutlined,
  IdcardOutlined,
  PieChartOutlined,
  SettingOutlined

} from "@ant-design/icons";

const Layoutpage = (props) => {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };


  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;400&display=swap" rel="stylesheet" />
      </Head>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          theme="light"
          className="hide-mobile"
        >
          <p className="logo">logo</p>
          <Menu defaultSelectedKeys={["2"]} mode="inline">

            <Menu.Item key="1" icon={<QrcodeOutlined />}>
              <Link href={"/dashbord"}>
                Dashbord
              </Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<IdcardOutlined />}>
              Contact Person List
            </Menu.Item>
            <Menu.Item key="3" icon={<PieChartOutlined />}>
              Report
            </Menu.Item>
            <SubMenu key="sub1" icon={<SettingOutlined />} title="Setting">
              <Menu.Item key="4">Manage Layout</Menu.Item>
              <Menu.Item key="5">Member</Menu.Item>
              <Menu.Item key="6">Data Access</Menu.Item>
              <Menu.Item key="7">System log</Menu.Item>

            </SubMenu>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              textAlign: "right",
              color: "white",
              paddingRight: 40,
            }}
          >
            <Badge dot>
              <BellOutlined style={{ fontSize: 18, color: "white" }} />
            </Badge>
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              style={{ marginRight: 20, marginLeft: 20 }}
            />
            Name user
            <CaretDownOutlined style={{ marginLeft: 20 }} />
          </Header>

          <Content style={{ margin: "0 16px" }}>


            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Layout className="site-layout">{props.children}</Layout>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>E-office Automation (v.1.0.0#1000) | About E-Office | Manual | Report a problem
            <p className="footer-text">Powered by a free JigsawOffice license. Please consider purchasing it today</p></Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Layoutpage;

