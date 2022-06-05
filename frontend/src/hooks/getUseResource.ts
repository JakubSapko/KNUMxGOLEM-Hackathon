import { useEffect, useState } from "react";

type TReturn<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const getUseResource = <T>(callback: () => Promise<T>) => {
  const useResource = (): TReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = () => {
      setIsLoading(true);
      callback()
        .then((value) => setData(value))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };

    useEffect(fetchData, []);

    return { data, isLoading, error, refetch: fetchData };
  };

  return useResource;
};
