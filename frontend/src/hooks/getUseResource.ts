import { useEffect, useState } from "react";

type TReturn<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const getUseResource = <T, P = any>(
  callback: (params?: P) => Promise<T>
) => {
  const useResource = (params?: P): TReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = (params?: P) => {
      setIsLoading(true);
      callback(params)
        .then((value) => setData(value))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };

    useEffect(() => fetchData(params), [params]);

    return { data, isLoading, error, refetch: fetchData };
  };

  return useResource;
};
