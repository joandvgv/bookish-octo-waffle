import { useEffect, useState } from "react";

export const useApi = <T>(endpoint: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    async function callEndpoint() {
      try {
        const fetchData = await fetch(endpoint);
        const { results } = await fetchData.json();
        setData(results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    callEndpoint();
  }, [endpoint]);

  return { loading, error, data };
};
