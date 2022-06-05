import {
  Histogram as HistogramComponent,
  HistogramConfig,
} from "@ant-design/plots";
import { ChartWrapper } from "./styled";

type Props = {
  data: number[];
  isLoading?: boolean;
  xLabel?: string;
  yLabel?: string;
};

export const Histogram: React.FC<Props> = ({
  data,
  isLoading,
  xLabel,
  yLabel,
}) => {
  const mappedData = data.map((value) => ({ value }));

  const config: HistogramConfig = {
    data: mappedData,
    binField: "value",
    binWidth: 1,
    loading: isLoading,
    xAxis: {
      alias: xLabel,
      title: { text: xLabel },
    },
    yAxis: {
      alias: yLabel,
      title: { text: yLabel },
    },
    tooltip: {
      title: (v) => v.split(",")[0],
    },
  };

  return (
    <ChartWrapper>
      <HistogramComponent {...config} />
    </ChartWrapper>
  );
};
