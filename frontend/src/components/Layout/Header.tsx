import { Typography } from "antd";
import styled from "styled-components";
import { Center } from "./Center";

const Wrapper = styled(Center)`
  h1.ant-typography {
    color: #fff;
    margin: 0.25em;
  }
`;

export const Header = () => (
  <Wrapper>
    <Typography.Title>Space Bois</Typography.Title>
  </Wrapper>
);
