import { useState, useEffect } from 'react';

const useStats = url => {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.status === 404 && data.error) {
          setError(data.error.message);
        } else {
          setError('');
        }
        setStats(data);
        setLoading(false);
      } catch (err) {
        // console.log(`Fetch error: ${err}`);
        setError(err);
      }
    }
    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error,
  };
};

export default useStats;
