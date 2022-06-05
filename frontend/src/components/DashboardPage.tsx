import { Row, Col } from "antd";
import { useEffect, memo } from "react";
import styled from "styled-components";
import { useLocalizationsContext } from "../contexts";
import { useRoomsCountHistogram } from "../hooks";
import { Histogram, TransactionsOverTime } from "./Charts";
import { CurrentLocalization } from "./CurrentLocalization";
import { MarkersMap } from "./Map";

const MapWrapper = styled.div`
  width: 600px;
  height: 800px;
`;

const MemoizedMap = memo(MarkersMap);

export const DashboardPage: React.FC = () => {
  const { currentLocalization } = useLocalizationsContext();
  const { data, isLoading, refetch } = useRoomsCountHistogram({
    id: "1",
  });

  useEffect(() => {
    if (currentLocalization) {
      refetch({ id: currentLocalization.id });
    }
  }, [currentLocalization]);

  return (
    <Row gutter={20} justify="center" align="middle">
      <Col>
        <CurrentLocalization />
        <MapWrapper>
          <MemoizedMap />
        </MapWrapper>
      </Col>
      <Col>
        <Histogram
          data={data || []}
          isLoading={isLoading}
          xLabel="Number of rooms"
          yLabel="Count"
        />
        <TransactionsOverTime />
      </Col>
    </Row>
  );
};
