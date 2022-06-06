import { useEffect, useState } from "react";

type TReturn<T, P> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: (params?: P) => void;
};

export const getUseResource = <T, P = undefined>(
  callback: (params?: P) => Promise<T>
) => {
  const useResource = (params?: P): TReturn<T, P> => {
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

    useEffect(() => fetchData(params), []);

    return { data, isLoading, error, refetch: fetchData };
  };

  return useResource;
};
