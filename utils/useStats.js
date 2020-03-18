import { useState, useEffect } from 'react';

function useStats(url) {
  const [stats, setStats] = useState();
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching data');
      const data = await fetch(url).then(res => res.json());
      setStats(data);
    }
    fetchData();
  }, [url]);
  return stats;
}

export default useStats;
