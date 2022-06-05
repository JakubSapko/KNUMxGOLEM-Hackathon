import { Row, Col } from "antd";
import styled from "styled-components";
import { FlatsRoom, TransactionsOverTime } from "./Charts";
import { CurrentLocalization } from "./CurrentLocalization";
import { MarkersMap } from "./Map";

const MapWrapper = styled.div`
  width: 600px;
  height: 800px;
`;

export const DashboardPage: React.FC = () => {
  return (
    <Row gutter={20} justify="center" align="middle">
      <Col>
        <CurrentLocalization />
        <MapWrapper>
          <MarkersMap />
        </MapWrapper>
      </Col>
      <Col>
        <FlatsRoom />
        <TransactionsOverTime />
      </Col>
    </Row>
  );
};
