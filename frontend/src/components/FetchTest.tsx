import { Button } from "antd";
import { useTestResource } from "../hooks";

export const FetchTest = () => {
  const { data, refetch } = useTestResource();

  return (
    <div>
      <h2>{data ? data[0] : "No data..."}</h2>
      <Button onClick={refetch}>refetch</Button>
    </div>
  );
};
