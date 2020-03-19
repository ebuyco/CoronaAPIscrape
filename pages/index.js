import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <h1>Totals: </h1>
    <Stats url="https://covid19.mathdro.id/api" />
    <CountrySelector />
  </div>
);

export default IndexPage;
