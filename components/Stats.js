import React from 'react';
import useStats from '../utils/useStats';

function Stats(url) {
  const stats = useStats(url);
  if (!stats) return <p>Loading ....</p>;
  console.log(stats);
  return (
    <>
      <div className="static__block">
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </div>
      <div className="static__block">
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </div>
      <div className="static__block">
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </div>
    </>
  );
}

export default Stats;
