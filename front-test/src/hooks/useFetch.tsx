import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface FetchState<T> {
  data: T | null;
  error: AxiosError | null;
  isLoading: boolean;
}

const useFetch = <T,>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(error);
        }
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
