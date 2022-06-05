import { Layout as AntdLayout } from "antd";
import { ReactNode } from "react";
import styled from "styled-components";
import { Center } from "./Center";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const ContenWrapper = styled(Center)`
  flex-direction: column;
  height: 100%;

  gap: 10px;

  padding: 0 20px;
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
      <AntdLayout.Content>
        <ContenWrapper>{children}</ContenWrapper>
      </AntdLayout.Content>
      <AntdLayout.Footer>
        <Footer />
      </AntdLayout.Footer>
    </AntdLayout>
  </Wrapper>
);
