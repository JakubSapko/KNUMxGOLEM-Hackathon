import { Layout as AntdLayout } from "antd";
import { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <Wrapper>
    <AntdLayout>
      <AntdLayout.Header>
        <Header />
      </AntdLayout.Header>
      <AntdLayout.Content>{children}</AntdLayout.Content>
      <AntdLayout.Footer>
        <Footer />
      </AntdLayout.Footer>
    </AntdLayout>
  </Wrapper>
);
