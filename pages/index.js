import React from 'react';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

export default function IndexPage() {
  return (
    <>
      <div>
        <h1>Totals: </h1>
        <Stats url="https://covid19.mathdro.id/api/" />
        <CountrySelector />
      </div>
    </>
  );
}
