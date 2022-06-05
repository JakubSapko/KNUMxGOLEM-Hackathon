import { Line } from "@ant-design/plots";
import { ChartWrapper } from "./styled";

const mockData = [
  { name: "Warszawa", time: "I", value: 20 },
  { name: "Warszawa", time: "II", value: 50 },
  { name: "Warszawa", time: "III", value: 40 },
  { name: "Warszawa", time: "IV", value: 80 },
  { name: "Warszawa", time: "V", value: 70 },
  { name: "Warszawa", time: "VI", value: 50 },

  { name: "Kraków", time: "I", value: 15 },
  { name: "Kraków", time: "II", value: 30 },
  { name: "Kraków", time: "III", value: 67 },
  { name: "Kraków", time: "IV", value: 91 },
  { name: "Kraków", time: "V", value: 15 },
  { name: "Kraków", time: "VI", value: 30 },

  { name: "Wrocław", time: "I", value: 82 },
  { name: "Wrocław", time: "II", value: 34 },
  { name: "Wrocław", time: "III", value: 16 },
  { name: "Wrocław", time: "IV", value: 10 },
  { name: "Wrocław", time: "V", value: 65 },
  { name: "Wrocław", time: "VI", value: 40 },
];

export const TransactionsOverTime: React.FC = () => {
  const config = {
    data: mockData,
    xField: "time",
    yField: "value",
    seriesField: "name",
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 4000,
      },
    },
  };

  return (
    <ChartWrapper>
      <Line {...config} />
    </ChartWrapper>
  );
};
