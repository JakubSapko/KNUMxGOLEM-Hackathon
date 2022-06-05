import { Button } from "antd";
import { useFakeMetric, useTestResource } from "../hooks";
import { getUseResource } from "../hooks/getUseResource";

export const PostTest = () => {
  const { data, error } = useFakeMetric();

  return (
    <div>
      <h2>{data ? JSON.stringify(data) : "No data..."} </h2>
      <p>{error && error.message}</p>
    </div>
  );
};

export const FetchTest = () => {
  const { data, refetch } = useTestResource();

  return (
    <div>
      <h2>{data ? data[0] : "No data..."}</h2>
      <Button onClick={refetch}>refetch</Button>
    </div>
  );
};
