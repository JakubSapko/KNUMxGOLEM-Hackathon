import { Row, Col } from "antd";
import { FlatsRoom, TransactionsOverTime } from "./Charts";

export const DashboardPage: React.FC = () => {
  return (
    <Row>
      <Col>
        <FlatsRoom />
        <TransactionsOverTime />
      </Col>
    </Row>
  );
};
