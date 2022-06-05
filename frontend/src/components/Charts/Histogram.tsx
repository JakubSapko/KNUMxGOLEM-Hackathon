import {
  Histogram as HistogramComponent,
  HistogramConfig,
} from "@ant-design/plots";
import { ChartWrapper } from "./styled";

const mockData = [
  {
    value: 2,
  },
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 4,
  },
  {
    value: 6,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 3,
  },
];

type HistogramEntry = {
  x: string | number;
  y: number;
};

type Props = {
  data?: HistogramEntry[];
  xLabel?: string;
  yLabel?: string;
};

export const Histogram: React.FC<Props> = ({
  data = mockData,
  xLabel,
  yLabel,
}) => {
  const config: HistogramConfig = {
    data,
    binField: "value",
    binWidth: 1,

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
