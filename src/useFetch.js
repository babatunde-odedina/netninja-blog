import { useEffect, useState } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal })
        .then(async (res) => {
          if (!res.ok) {
            throw Error('Failed to fetch data');
          }
          return await res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          console.log(data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCtrl.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
