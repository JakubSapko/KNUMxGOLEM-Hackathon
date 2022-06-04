import { Space, Steps } from "antd";
import styled from "styled-components";
import { Center } from ".";

const Wrapper = styled(Center)`
  padding: 2rem;
`;
export const TestPage = () => (
  <Wrapper>
    <Space align="center">
      <Steps direction={"vertical"} current={1}>
        <Steps.Step title="Finished ✔" description="Eat pizza." />
        <Steps.Step title="In Progress ⏱" description="Initialize project." />
        <Steps.Step title="Waiting ✋🏻" description="Win hackaton!" />
      </Steps>
    </Space>
  </Wrapper>
);
