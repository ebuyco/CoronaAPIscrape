import React from 'react';
import useStats from '../utils/useStats';

function CountrySelector() {
  const countries = useStats('https://covid19.mathdro.id/api/countries');
  if (!countries) return <p>Loading ....</p>;
  console.log(countries);
  return (
    <>
      <select>
        {Object.entries(countries.countries).map(([country, code]) => (
          <option key={code} value={code}>
            {country}
          </option>
        ))}
      </select>
    </>
  );
}

export default CountrySelector;
