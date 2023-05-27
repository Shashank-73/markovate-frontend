import { Outlet } from "react-router-dom";

import { Layout } from "antd";

const { Content } = Layout;

const DefaultLayout = () => {
  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
